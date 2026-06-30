"use client";

import Image from "@tiptap/extension-image";
import { ReactNodeViewRenderer, NodeViewWrapper, type ReactNodeViewProps } from "@tiptap/react";
import { useRef, useCallback } from "react";

function ResizableImageView({ node, updateAttributes, selected }: ReactNodeViewProps) {
  const startX = useRef(0);
  const startW = useRef(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      startX.current = e.clientX;
      startW.current = imgRef.current?.offsetWidth ?? (node.attrs["width"] as number) ?? 400;

      const onMove = (ev: MouseEvent) => {
        const w = Math.max(80, startW.current + (ev.clientX - startX.current));
        updateAttributes({ width: Math.round(w) });
      };
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    },
    [node.attrs.width, updateAttributes]
  );

  const w = node.attrs["width"] as number | null;

  return (
    <NodeViewWrapper
      as="span"
      style={{ display: "inline-block", position: "relative", width: w ? `${w}px` : "auto", maxWidth: "100%" }}
    >
      <img
        ref={imgRef}
        src={node.attrs["src"] as string}
        alt={(node.attrs["alt"] as string) ?? ""}
        draggable={false}
        style={{ width: "100%", display: "block", borderRadius: "0.5rem" }}
        className={selected ? "ring-2 ring-blue-500" : ""}
      />
      {selected && (
        <span
          onMouseDown={onMouseDown}
          style={{
            position: "absolute",
            bottom: -5,
            right: -5,
            width: 14,
            height: 14,
            background: "#3b82f6",
            border: "2px solid white",
            borderRadius: "50%",
            cursor: "se-resize",
            display: "block",
          }}
        />
      )}
    </NodeViewWrapper>
  );
}

const ResizableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: (el) => {
          const w = el.getAttribute("width") ?? el.style.width?.replace("px", "");
          return w ? Number(w) : null;
        },
        renderHTML: (attrs) =>
          attrs.width ? { width: attrs.width, style: `width:${attrs.width}px` } : {},
      },
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageView);
  },
});

export default ResizableImage;

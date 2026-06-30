'use client';

import { useEffect, useRef } from 'react';

export default function CatCursor() {
  const catRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const frameRef = useRef<number>(0);
  const tailRef = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      // Smooth follow with lag
      current.current.x += (pos.current.x - current.current.x) * 0.18;
      current.current.y += (pos.current.y - current.current.y) * 0.18;

      tailRef.current += 0.15;
      const wag = Math.sin(tailRef.current) * 8;

      if (catRef.current) {
        catRef.current.style.transform =
          `translate(${current.current.x}px, ${current.current.y}px) rotate(${wag}deg)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={catRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        fontSize: '22px',
        marginLeft: '-11px',
        marginTop: '-22px',
        userSelect: 'none',
        willChange: 'transform',
      }}
    >
      🐱
    </div>
  );
}

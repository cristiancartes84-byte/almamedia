'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GA_MEASUREMENT_ID = 'G-8ZXT1FVJRG';

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views on route change
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  useEffect(() => {
    // Track scroll depth (75% for blog articles)
    let scrollTracked = false;
    const handleScroll = () => {
      if (scrollTracked) return;

      const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

      if (scrollPercentage >= 75 && pathname.startsWith('/blog/')) {
        window.gtag?.('event', 'scroll_75', {
          page_path: pathname,
          page_title: document.title,
        });
        scrollTracked = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    // Track CTA button clicks
    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (!link) return;

      // Track CTA buttons (contain common CTA keywords)
      const ctaKeywords = ['cotizar', 'contacto', 'solicitar', 'agendar', 'gratis', 'llamar'];
      const linkText = link.textContent?.toLowerCase() || '';
      const isCTA = ctaKeywords.some(keyword => linkText.includes(keyword));

      if (isCTA) {
        window.gtag?.('event', 'cta_click', {
          cta_text: link.textContent?.trim() || 'Unknown',
          cta_url: link.href,
          page_path: pathname,
        });
      }

      // Track outbound links
      if (link.href && !link.href.includes('almamedia.cl') && link.href.startsWith('http')) {
        window.gtag?.('event', 'outbound_click', {
          link_url: link.href,
          link_text: link.textContent?.trim() || 'Unknown',
        });
      }

      // Track WhatsApp clicks
      if (link.href && link.href.includes('wa.me')) {
        window.gtag?.('event', 'whatsapp_click', {
          page_path: pathname,
        });
      }

      // Track phone clicks
      if (link.href && link.href.startsWith('tel:')) {
        window.gtag?.('event', 'phone_click', {
          page_path: pathname,
          phone_number: link.href.replace('tel:', ''),
        });
      }
    };

    document.addEventListener('click', handleCTAClick);
    return () => document.removeEventListener('click', handleCTAClick);
  }, [pathname]);

  useEffect(() => {
    // Track reading time (for blog articles only)
    if (!pathname.startsWith('/blog/')) return;

    let startTime = Date.now();
    let timeTracked = false;

    const trackReadTime = () => {
      if (timeTracked) return;

      const timeSpent = (Date.now() - startTime) / 1000; // seconds

      if (timeSpent >= 120) { // 2 minutes
        window.gtag?.('event', 'read_time_2min', {
          page_path: pathname,
          page_title: document.title,
          time_seconds: Math.round(timeSpent),
        });
        timeTracked = true;
      }
    };

    const interval = setInterval(trackReadTime, 10000); // Check every 10 seconds
    return () => clearInterval(interval);
  }, [pathname]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (!measurementId) return;

    const enableAnalytics = () => {
      if (localStorage.getItem('cookieConsent') !== 'accepted') return;
      if (document.getElementById('mirex-ga-script')) return;

      const script = document.createElement('script');
      script.id = 'mirex-ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
      window.gtag('js', new Date());
      window.gtag('config', measurementId, { anonymize_ip: true, send_page_view: false });
    };

    enableAnalytics();
    window.addEventListener('mirex-cookie-consent', enableAnalytics);
    return () => window.removeEventListener('mirex-cookie-consent', enableAnalytics);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('cookieConsent') !== 'accepted' || !window.gtag) return;
    window.gtag('event', 'page_view', { page_path: `${location.pathname}${location.search}` });
  }, [location.pathname, location.search]);

  return null;
}

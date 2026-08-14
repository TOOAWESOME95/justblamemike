'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShow(false);
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }
  };

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 md:p-6" style={{ zIndex: 10000 }}>
      <div
        className="max-w-4xl mx-auto rounded-2xl p-6 md:flex md:items-center md:justify-between gap-6"
        style={{
          background: 'rgba(26,16,8,0.97)',
          border: '1px solid rgba(244,140,37,0.15)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 -4px 30px rgba(0,0,0,0.3)',
        }}
      >
        <div className="mb-4 md:mb-0">
          <p className="text-white text-sm font-semibold mb-1">Cookie Settings</p>
          <p className="text-[#8a7a6a] text-xs leading-relaxed">
            We use cookies to understand how you use our site and improve your experience. You can accept or decline non-essential cookies.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-lg text-xs font-bold transition-all hover:scale-105 active:scale-95"
            style={{ border: '1px solid rgba(244,140,37,0.3)', color: '#a89882' }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-lg text-xs font-bold transition-all hover:scale-105 active:scale-95"
            style={{ background: '#f48c25', color: '#1a1008' }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';

export function SectionLabel({ children }) {
  return (
    <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 bg-brand-orange/10 text-brand-orange">
      {children}
    </span>
  );
}

export function OrangeBtn({ children, href = '/contact', variant = 'filled' }) {
  const base = 'inline-block px-8 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 active:scale-95 text-center';
  if (variant === 'filled') {
    return <Link href={href} className={`${base} bg-brand-orange text-brand-dark`}>{children}</Link>;
  }
  return <Link href={href} className={`${base} border-2 border-brand-orange text-brand-orange`}>{children}</Link>;
}

export function PlaceholderImg({ label = 'Your image here', aspect = '16/9', className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl flex items-center justify-center ${className}`}
      style={{
        aspectRatio: aspect,
        background: 'linear-gradient(135deg, rgba(244,140,37,0.08) 0%, #2a1f14 100%)',
        border: '1px dashed rgba(244,140,37,0.25)',
      }}
    >
      <div className="text-center px-4">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-2 opacity-40">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="#f48c25" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="2" stroke="#f48c25" strokeWidth="1.5" />
          <path d="M3 16l5-5 4 4 3-3 6 6" stroke="#f48c25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-xs font-semibold text-brand-orange/50">{label}</p>
      </div>
    </div>
  );
}

export function CTA() {
  return (
    <section className="bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center bg-brand-orange">
            <div className="absolute top-0 right-0 select-none pointer-events-none opacity-[0.08]" style={{ transform: 'translate(15%,-20%)' }}>
              <Image src="/logo.jpg" alt="" width={280} height={280} className="rounded-lg" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-brand-dark">Ready to grow?</h2>
              <p className="text-lg mb-10 font-medium text-brand-dark/80">
                Every project starts with a conversation. No pressure, no jargon. just a chat about where you are and where you want to be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 active:scale-95 bg-brand-dark text-brand-orange">
                  Start Your Project
                </Link>
                <Link href="/contact" className="px-10 py-4 rounded-xl font-bold text-base transition-all hover:scale-105 active:scale-95 border-2 border-brand-dark text-brand-dark">
                  Book a Free Audit
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SERVICES = [
  { label: 'Google Ads Management', href: '/services/google-ads' },
  { label: 'Meta / Social Ads', href: '/services/meta-ads' },
  { label: 'Website Design & Build', href: '/services/web-design' },
  { label: 'SEO Strategy', href: '/services/seo' },
  { label: 'Email Marketing', href: '/services/email-marketing' },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing-manchester' },
  { label: 'Digital Marketing Manchester', href: '/services/digital-marketing-manchester' },
  { label: 'Small Business Marketing', href: '/services/digital-marketing-small-business' },
];

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', children: SERVICES },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const isServicePage = pathname.startsWith('/services');

  return (
    <header
      className="w-full transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(26,16,8,0.96)' : 'rgba(26,16,8,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(244,140,37,0.13)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.jpg" alt="Just Blame Mike" width={42} height={42} className="rounded-lg object-contain" />
          <span className="text-white text-lg font-extrabold tracking-tight hidden sm:block">
            Just Blame <span className="text-brand-orange">Mike</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => {
            const active = pathname === n.href || (n.children && pathname.startsWith(n.href));

            if (n.children) {
              return (
                <div
                  key={n.href}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={n.href}
                    className="text-sm font-semibold transition-colors relative flex items-center gap-1"
                    style={{ color: active ? '#f48c25' : '#c4b5a4' }}
                  >
                    {n.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}>
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                      style={{ width: active ? '100%' : '0%', background: '#f48c25' }}
                    />
                  </Link>
                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-3 py-2 rounded-xl min-w-[240px] shadow-2xl"
                      style={{
                        background: 'rgba(26,16,8,0.98)',
                        border: '1px solid rgba(244,140,37,0.12)',
                        backdropFilter: 'blur(16px)',
                      }}
                    >
                      {n.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-sm font-medium transition-colors hover:text-brand-orange"
                          style={{ color: pathname === child.href ? '#f48c25' : '#c4b5a4' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={n.href}
                href={n.href}
                className="text-sm font-semibold transition-colors relative"
                style={{ color: active ? '#f48c25' : '#c4b5a4' }}
              >
                {n.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300"
                  style={{ width: active ? '100%' : '0%', background: '#f48c25' }}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105 active:scale-95 bg-brand-orange text-brand-dark"
          >
            Just Blame Mike
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="block w-6 h-0.5 rounded bg-brand-orange transition-all" style={{ transform: mobileOpen ? 'rotate(45deg) translate(3px,3px)' : 'none' }} />
          <span className="block w-6 h-0.5 rounded bg-brand-orange transition-all" style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 rounded bg-brand-orange transition-all" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(3px,-3px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-1" style={{ background: 'rgba(26,16,8,0.98)' }}>
          <Link href="/" className="text-base font-semibold py-3" style={{ color: pathname === '/' ? '#f48c25' : '#c4b5a4' }}>Home</Link>

          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="text-left text-base font-semibold py-3 flex items-center justify-between"
            style={{ color: isServicePage ? '#f48c25' : '#c4b5a4' }}
          >
            Services
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 flex flex-col gap-1 mb-2">
              <Link href="/services" className="text-sm font-medium py-2" style={{ color: pathname === '/services' ? '#f48c25' : '#8a7a6a' }}>All Services</Link>
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} className="text-sm font-medium py-2" style={{ color: pathname === s.href ? '#f48c25' : '#8a7a6a' }}>
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/case-studies" className="text-base font-semibold py-3" style={{ color: pathname === '/case-studies' ? '#f48c25' : '#c4b5a4' }}>Case Studies</Link>
          <Link href="/contact" className="text-base font-semibold py-3" style={{ color: pathname === '/contact' ? '#f48c25' : '#c4b5a4' }}>Contact</Link>
        </div>
      )}
    </header>
  );
}

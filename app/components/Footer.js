import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.jpg" alt="Just Blame Mike" width={38} height={38} className="rounded-lg object-contain" />
              <span className="text-white text-lg font-extrabold tracking-tight">Just Blame Mike</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-[#8a7a6a]">
              A full-service digital agency focused on performance, transparency, and results. We take the blame so you can take the credit.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-[#8a7a6a]">
              <li><Link href="/services/google-ads" className="hover:text-white transition-colors">Google Ads Management</Link></li>
              <li><Link href="/services/meta-ads" className="hover:text-white transition-colors">Social Media Ads</Link></li>
              <li><Link href="/services/web-design" className="hover:text-white transition-colors">Custom Web Design</Link></li>
              <li><Link href="/services/seo" className="hover:text-white transition-colors">SEO Strategy</Link></li>
              <li><Link href="/services/email-marketing" className="hover:text-white transition-colors">Email Marketing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-[#8a7a6a]">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-center text-xs text-[#5a4a3a]" style={{ borderTop: '1px solid rgba(244,140,37,0.04)' }}>
          © 2025 Just Blame Mike. All rights reserved. Mike was here.
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel, PlaceholderImg } from '../../components/UI';
import AuditForm from '../../components/AuditForm';

export default function SEOContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-20 bg-brand-dark">
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span>
              <span className="text-brand-orange">SEO</span>
            </nav>
            <SectionLabel>SEO Strategy</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">Get found.<br /><span className="text-brand-orange">Stay found.</span></h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">Proper SEO isn&apos;t a dark art. it&apos;s structured, measurable work. We handle local SEO, technical audits, and content strategy so Google sends you the right traffic.</p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {['Local SEO', 'Technical SEO', 'On-Page SEO', 'Content Strategy', 'Link Building', 'Google Business Profile'].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/[0.08] text-brand-orange">{t}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Audit Form - Top */}
      <section className="bg-brand-dark" style={{ borderBottom: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <FadeIn>
            <AuditForm service="SEO" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="p-8 md:p-10 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                <span className="text-3xl block mb-4">📍</span>
                <h3 className="text-white text-2xl font-bold mb-4">Local SEO</h3>
                <p className="text-sm leading-relaxed text-[#8a7a6a] mb-6">Dominate the map pack and local search results. We get your business showing up when people nearby are searching for exactly what you offer.</p>
                <ul className="space-y-3">
                  {['Google Business Profile setup & optimisation', 'Local citation building & cleanup', 'Review generation strategy', 'Location-specific landing pages', 'Local link acquisition', 'NAP consistency audit'].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#b0a090]"><span className="text-brand-orange">✓</span> {f}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 md:p-10 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                <span className="text-3xl block mb-4">⚙️</span>
                <h3 className="text-white text-2xl font-bold mb-4">Technical SEO</h3>
                <p className="text-sm leading-relaxed text-[#8a7a6a] mb-6">The under-the-bonnet work that makes Google trust and prioritise your site. Schema, speed, crawlability, and structured data done right.</p>
                <ul className="space-y-3">
                  {['Full site crawl & audit', 'Schema markup implementation', 'Core Web Vitals optimisation', 'Sitemap & robots.txt configuration', 'Internal linking strategy', 'Keyword gap analysis'].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#b0a090]"><span className="text-brand-orange">✓</span> {f}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', border: '1px solid rgba(244,140,37,0.12)' }}>
                <img src="/banner-seo.png" alt="SEO rankings showing Just Blame Mike at position 1" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <SectionLabel>Content Strategy</SectionLabel>
                <h2 className="text-3xl font-bold text-white mb-6">Content that ranks<br />and actually gets read.</h2>
                <p className="text-sm leading-relaxed text-[#8a7a6a] mb-6">We research what your audience is searching for, map it to your services, and create content that answers their questions better than anyone else.</p>
                <div className="space-y-4">
                  {['Keyword research mapped to buyer intent', 'Content calendars aligned with your services', 'Blog posts, service pages, and FAQ content', 'Monthly performance tracking and adjustments'].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#b0a090]"><span className="text-brand-orange mt-0.5">✓</span><span>{item}</span></div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <FadeIn><AuditForm service="SEO" /></FadeIn>
        </div>
      </section>
    </>
  );
}

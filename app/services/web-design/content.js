'use client';

import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel, PlaceholderImg } from '../../components/UI';
import AuditForm from '../../components/AuditForm';

export default function WebDesignContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-20 bg-brand-dark">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span>
              <span className="text-brand-orange">Web Design</span>
            </nav>
            <SectionLabel>Website Design & Build</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">
              Websites that<br /><span className="text-brand-orange">work as hard as you.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">
              No templates. No page builders from 2018. We design and build custom websites that load fast, rank well, and convert visitors into customers.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {['Custom Design', 'WordPress', 'Shopify', 'Landing Pages', 'E-commerce', 'Mobile-First'].map((t) => (
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
            <AuditForm service="Website" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn><h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">What Mike builds for you</h2></FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '✏️', title: 'Bespoke UI/UX Design', desc: 'Custom designs based on your brand, your audience, and your goals. Every element has a purpose.' },
              { icon: '📱', title: 'Mobile-First Development', desc: 'Built for phones first, scaled up for desktop. Because that\'s how your customers browse.' },
              { icon: '⚡', title: 'Core Web Vitals Optimised', desc: 'Sub-2-second load times, no layout shift, instant interactivity. Google rewards fast sites. so do customers.' },
              { icon: '🔍', title: 'SEO Built In', desc: 'Semantic HTML, proper heading structure, schema markup, and keyword-optimised content from day one.' },
              { icon: '🔗', title: 'CMS & Integrations', desc: 'WordPress, Shopify, or headless. whichever fits. Plus booking systems, CRMs, and payment gateways.' },
              { icon: '🚀', title: 'Launch & Support', desc: 'Hosting setup, SSL, analytics, and 30 days of post-launch support to make sure everything runs smoothly.' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <span className="text-2xl block mb-4">{c.icon}</span>
                  <h3 className="text-white text-lg font-bold mb-2">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7a6a]">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Websites We've Built */}
      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">Websites we&apos;ve built</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { client: 'Red Rose / White Rose / North Wales Copiers', desc: 'Three custom PHP websites with bespoke quote builders and lead routing. Leads jumped from 10-15 to 50-60 per month.', image: '/copiers.png', stat: '10→60 leads/mo' },
              { client: 'Barton Drilling', desc: "Mike's very first website, built at 16. A full business site for a specialist drilling company.", image: '/barton-drilling.png', stat: 'First ever build' },
              { client: 'Cancer Got Talent', desc: 'Charity website and videography. Helped raise over £7,000 for cancer patients.', image: '/cancer-got-talent.jpg', stat: '£7K+ raised' },
              { client: 'MLS Kitchens', desc: 'Kitchen specialist website paired with LinkedIn automation generating 40+ leads per month.', image: '/mls-kitchen.png', stat: '40+ leads/mo' },
            ].map((site, i) => (
              <FadeIn key={site.client} delay={i * 0.08}>
                <Link href="/case-studies" className="block rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img src={site.image} alt={site.client} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-bold">{site.client}</h4>
                      <span className="text-xs font-bold text-brand-orange">{site.stat}</span>
                    </div>
                    <p className="text-sm text-[#8a7a6a]">{site.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <FadeIn><AuditForm service="Website" /></FadeIn>
        </div>
      </section>
    </>
  );
}

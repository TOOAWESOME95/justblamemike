'use client';

import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel, PlaceholderImg } from '../../components/UI';
import AuditForm from '../../components/AuditForm';

export default function Content() {
  return (
    <>
      <section className="relative pt-12 pb-20 bg-brand-dark">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span>
              <span className="text-brand-orange">PPC Agency Manchester</span>
            </nav>
            <SectionLabel>PPC Management</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">
              Manchester PPC agency<br />that <span className="text-brand-orange">delivers ROI.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">
              Most PPC agencies in Manchester will spend your budget and show you impressions. We spend your budget and show you revenue. If the numbers don&apos;t add up, blame Mike.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <FadeIn><AuditForm service="PPC (Manchester)" /></FadeIn>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Why Manchester businesses choose us for PPC</h2>
            <p className="text-[#8a7a6a] max-w-2xl mb-12">We&apos;re not a massive agency with 200 clients and an account manager who barely knows your business. We&apos;re a small, specialist team that treats your ad spend like our own money.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'No Wasted Spend', desc: 'Every keyword, every bid, every audience is chosen with intent. We kill what doesn\'t convert and scale what does.' },
              { icon: '📊', title: 'Transparent Reporting', desc: 'Monthly reports that make sense. Revenue, cost per lead, ROAS. No hiding behind jargon or vanity metrics.' },
              { icon: '⚡', title: 'Fast Iteration', desc: 'We don\'t set and forget. Campaigns are reviewed and optimised weekly. The market moves, and so do we.' },
              { icon: '🏪', title: 'Local Knowledge', desc: 'Based in Manchester, we understand the local market. From Middleton to the city centre, we know what works here.' },
              { icon: '💰', title: 'Built for Small Business', desc: 'Whether you\'re spending £500 or £50,000 a month, every penny gets the same level of attention.' },
              { icon: '🔄', title: 'No Lock-in Contracts', desc: 'We earn your business monthly. If we\'re not delivering, you walk. That pressure keeps us sharp.' },
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

      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">PPC services we offer in Manchester</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Google Ads Management', desc: 'Search, Shopping, Display, and Performance Max campaigns. We manage the full Google Ads suite and optimise for conversions, not clicks.', link: '/services/google-ads/' },
              { title: 'Meta Ads (Facebook & Instagram)', desc: 'Lead generation funnels, retargeting sequences, and creative strategy across Facebook and Instagram. Built for action, not just awareness.', link: '/services/meta-ads/' },
              { title: 'Google Shopping', desc: 'Product feed optimisation, custom labels, priority bidding tiers. We make your products show up when buyers are ready to purchase.' },
              { title: 'Remarketing & Retargeting', desc: 'Stay in front of people who visited but didn\'t convert. Multi-stage retargeting across Google and Meta that brings them back.' },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <h3 className="text-white text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7a6a] mb-4">{s.desc}</p>
                  {s.link && <Link href={s.link} className="text-sm font-bold text-brand-orange">Learn more →</Link>}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <FadeIn><AuditForm service="PPC (Manchester)" /></FadeIn>
        </div>
      </section>
    </>
  );
}

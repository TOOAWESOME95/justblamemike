'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/UI';
import AuditForm from '../../components/AuditForm';

export default function Content() {
  return (
    <>
      <section className="relative pt-12 pb-20 bg-brand-dark">
        <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span>
              <span className="text-brand-orange">Google Ads Manchester</span>
            </nav>
            <SectionLabel>Google Ads</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">Google Ads that<br /><span className="text-brand-orange">pay for themselves.</span></h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">Most businesses throw money at Google Ads and hope for the best. We build campaigns where every click has a purpose and every pound drives measurable return.</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-12"><FadeIn><AuditForm service="Google Ads (Manchester)" /></FadeIn></div></section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn><h2 className="text-3xl font-bold text-white mb-12">How to get more leads from Google Ads</h2></FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Stop paying for irrelevant clicks', desc: 'Most Google Ads accounts waste 30-40% of budget on search terms that will never convert. We audit your search terms weekly and build aggressive negative keyword lists that protect your spend.' },
              { title: 'Match your landing pages to intent', desc: 'Sending ad traffic to your homepage is like giving directions to the wrong building. We ensure every ad group points to a page built specifically for that search intent.' },
              { title: 'Use smart bidding properly', desc: 'Automated bidding only works when it has clean data to learn from. We set up conversion tracking correctly first, then let the algorithms do what they do best.' },
              { title: 'Test relentlessly', desc: 'Ad copy, landing pages, audiences, bid strategies. We test everything. The campaigns that win in month 6 look nothing like the ones we launched in month 1.' },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="p-8 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <h3 className="text-white text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7a6a]">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn><h2 className="text-3xl font-bold text-white mb-6">Google Ads campaign types we manage</h2></FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Search Campaigns', desc: 'High-intent keyword targeting that puts you in front of people actively searching for your services in Manchester and beyond.' },
              { title: 'Shopping Campaigns', desc: 'Product feed optimisation with custom labels, priority bidding, and margin-based strategies for e-commerce businesses.' },
              { title: 'Performance Max', desc: 'Google\'s AI-driven campaign type, properly configured with asset groups and audience signals that actually guide the algorithm.' },
              { title: 'Display & Remarketing', desc: 'Banner ads and retargeting that keep your brand visible across millions of websites after someone visits your site.' },
              { title: 'YouTube Ads', desc: 'Video advertising on YouTube targeting users by interests, demographics, and search behaviour.' },
              { title: 'Local Service Ads', desc: 'For service businesses wanting to appear at the very top of local search results with the Google Guarantee badge.' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <div className="p-6 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <h3 className="text-white font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-[#8a7a6a]">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-20"><FadeIn><AuditForm service="Google Ads (Manchester)" /></FadeIn></div></section>
    </>
  );
}

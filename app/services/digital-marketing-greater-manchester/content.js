'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/UI';
import AuditForm from '../../components/AuditForm';
export default function Content() {
  return (<>
    <section className="relative pt-12 pb-20 bg-brand-dark"><div className="relative max-w-7xl mx-auto px-6">
      <FadeIn><nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6"><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span><span className="text-brand-orange">Greater Manchester</span></nav><SectionLabel>Local Coverage</SectionLabel></FadeIn>
      <FadeIn delay={0.1}><h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">Digital marketing across<br /><span className="text-brand-orange">Greater Manchester.</span></h1></FadeIn>
      <FadeIn delay={0.2}><p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">Based in Middleton, Manchester. Working with businesses across Greater Manchester and the North West. Local knowledge combined with strategies that compete nationally.</p></FadeIn>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-12"><FadeIn><AuditForm service="Digital Marketing (Greater Manchester)" /></FadeIn></div></section>
    <section className="bg-brand-dark"><div className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-3xl font-bold text-white mb-6">Areas we cover</h2><p className="text-[#8a7a6a] max-w-2xl mb-12">We&apos;re based in Middleton, right in the heart of Greater Manchester. We work with businesses across the region and beyond, combining local market knowledge with digital strategies that scale.</p></FadeIn>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { area: 'Manchester City Centre', desc: 'Retail, hospitality, professional services. The city centre is fiercely competitive and we know how to cut through the noise.' },
          { area: 'Middleton & North Manchester', desc: 'Our home turf. Tradespeople, local businesses, and growing companies that need digital marketing that works on real budgets.' },
          { area: 'Rochdale & Oldham', desc: 'Manufacturing, trades, and service businesses across the Pennine towns. Local SEO and PPC that targets your exact catchment area.' },
          { area: 'Bolton & Bury', desc: 'Retail, food and drink, and professional services across the northern boroughs of Greater Manchester.' },
          { area: 'Stockport & South Manchester', desc: 'Growing suburbs with thriving business communities. E-commerce, professional services, and hospitality marketing.' },
          { area: 'Wider North West', desc: 'Lancashire, Cheshire, and across the North West. If you can meet us for a coffee, we can work together.' },
        ].map((c, i) => (
          <FadeIn key={c.area} delay={i * 0.06}><div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><h3 className="text-white text-lg font-bold mb-2">{c.area}</h3><p className="text-sm leading-relaxed text-[#8a7a6a]">{c.desc}</p></div></FadeIn>
        ))}
      </div>
    </div></section>
    <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}><div className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-3xl font-bold text-white mb-6">Full service digital marketing for local businesses</h2></FadeIn>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Google Ads & PPC', desc: 'Geo-targeted campaigns that reach customers in your specific service area. No wasted spend on clicks from people who will never buy from you.', link: '/services/google-ads/' },
          { title: 'Local SEO', desc: 'Google Business Profile optimisation, local citations, and content that ranks for "[your service] near me" searches across Greater Manchester.', link: '/services/seo/' },
          { title: 'Website Design', desc: 'Websites built for local businesses. Fast, mobile-first, and designed to convert local visitors into leads and customers.', link: '/services/web-design/' },
          { title: 'Social Media & Email', desc: 'Paid social campaigns and email marketing that keeps your business in front of local customers consistently.', link: '/services/meta-ads/' },
        ].map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.08}><div className="p-8 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><h3 className="text-white text-xl font-bold mb-3">{s.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a] mb-4">{s.desc}</p><Link href={s.link} className="text-xs font-bold text-brand-orange">Learn more →</Link></div></FadeIn>
        ))}
      </div>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-20"><FadeIn><AuditForm service="Digital Marketing (Greater Manchester)" /></FadeIn></div></section>
  </>);
}

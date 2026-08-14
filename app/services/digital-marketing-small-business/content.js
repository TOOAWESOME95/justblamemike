'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/UI';
import AuditForm from '../../components/AuditForm';
export default function Content() {
  return (<>
    <section className="relative pt-12 pb-20 bg-brand-dark"><div className="relative max-w-7xl mx-auto px-6">
      <FadeIn><nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6"><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span><span className="text-brand-orange">Small Business</span></nav><SectionLabel>Small Business</SectionLabel></FadeIn>
      <FadeIn delay={0.1}><h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">Grow your business<br /><span className="text-brand-orange">online. Blame Mike.</span></h1></FadeIn>
      <FadeIn delay={0.2}><p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">You started a business, not a marketing department. We handle the digital side so you can focus on what you do best. Built specifically for small businesses, tradespeople, and owner-managers who need results without the agency price tag.</p></FadeIn>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-12"><FadeIn><AuditForm service="Small Business Growth" /></FadeIn></div></section>
    <section className="bg-brand-dark"><div className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-3xl font-bold text-white mb-6">Digital marketing that works on real budgets</h2><p className="text-[#8a7a6a] max-w-2xl mb-12">You don&apos;t need to spend thousands a month to see results. We build strategies around what you can afford, then scale as your revenue grows. Every pound is tracked, every result is measured.</p></FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '🔧', title: 'For Tradespeople', desc: 'Plumbers, electricians, builders, roofers, jet washers. We know how tradespeople get leads and we build campaigns around those specific search patterns. "Emergency plumber near me" gets a different strategy to "kitchen renovation Manchester".' },
          { icon: '🏪', title: 'For Local Shops & Services', desc: 'Salons, restaurants, gyms, clinics. Local SEO and social media that puts you on the map and keeps the bookings flowing week after week.' },
          { icon: '🛒', title: 'For E-commerce', desc: 'Selling products online? Google Shopping, Meta Ads, and email marketing that turns browsers into buyers without blowing your budget.' },
          { icon: '💼', title: 'For Professional Services', desc: 'Accountants, solicitors, consultants. B2B lead generation through LinkedIn, Google Ads, and content that positions you as the expert.' },
          { icon: '🚀', title: 'For Start-ups', desc: 'Just launched? We build your digital foundations right from the start. Website, SEO, and a launch campaign that gets you noticed fast.' },
          { icon: '📈', title: 'For Growing Businesses', desc: 'Already doing well but want to scale? We optimise what you have and add new channels to accelerate growth without increasing risk.' },
        ].map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.06}><div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><span className="text-2xl block mb-4">{c.icon}</span><h3 className="text-white text-lg font-bold mb-2">{c.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a]">{c.desc}</p></div></FadeIn>
        ))}
      </div>
    </div></section>
    <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}><div className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-3xl font-bold text-white mb-6">Why small businesses choose us</h2></FadeIn>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'We speak your language', desc: 'No jargon, no confusing reports. We tell you what we did, what happened, and what we\'re doing next. Clear as day.' },
          { title: 'No long contracts', desc: 'Month-to-month. If we\'re not delivering, you walk. That accountability is what keeps us sharp and keeps your money working.' },
          { title: 'We started small too', desc: 'Mike built his first website at 16 and grew this agency from a bedroom. We understand small business because we are one.' },
          { title: 'Your budget is respected', desc: 'We don\'t upsell services you don\'t need. If Google Ads alone will solve your problem, that\'s all we\'ll recommend.' },
        ].map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.08}><div className="p-8 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><h3 className="text-white text-xl font-bold mb-3">{s.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a]">{s.desc}</p></div></FadeIn>
        ))}
      </div>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-20"><FadeIn><AuditForm service="Small Business Growth" /></FadeIn></div></section>
  </>);
}

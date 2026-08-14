'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/UI';
import AuditForm from '../../components/AuditForm';
export default function Content() {
  return (<>
    <section className="relative pt-12 pb-20 bg-brand-dark"><div className="relative max-w-7xl mx-auto px-6">
      <FadeIn><nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6"><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span><span className="text-brand-orange">Web Design Manchester</span></nav><SectionLabel>Web Design</SectionLabel></FadeIn>
      <FadeIn delay={0.1}><h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">Web design Manchester.<br /><span className="text-brand-orange">Built to convert.</span></h1></FadeIn>
      <FadeIn delay={0.2}><p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">A pretty website that doesn&apos;t generate leads is just an expensive business card. We build websites that look sharp and work harder than your best salesperson.</p></FadeIn>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-12"><FadeIn><AuditForm service="Web Design (Manchester)" /></FadeIn></div></section>
    <section className="bg-brand-dark"><div className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-3xl font-bold text-white mb-12">What you get with a Just Blame Mike website</h2></FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '✏️', title: 'Custom Design', desc: 'No templates, no page builders. Every site is designed from scratch to match your brand and convert your specific audience.' },
          { icon: '⚡', title: 'Lightning Performance', desc: 'Sub-2-second load times. Perfect Core Web Vitals. Your site loads before your competitors\' even starts rendering.' },
          { icon: '🔍', title: 'SEO Built In', desc: 'Semantic HTML, proper heading structure, schema markup, and optimised content. SEO isn\'t an afterthought, it\'s in the foundations.' },
          { icon: '📱', title: 'Mobile First', desc: 'Over 60% of traffic comes from mobile. We design for phones first, then scale up. Not the other way around.' },
          { icon: '🎯', title: 'Conversion Focused', desc: 'Clear CTAs, streamlined user journeys, and strategically placed forms. Every page has a job to do.' },
          { icon: '🔧', title: 'Ongoing Support', desc: 'We don\'t build it and disappear. Content updates, technical fixes, and performance monitoring included.' },
        ].map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.06}><div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><span className="text-2xl block mb-4">{c.icon}</span><h3 className="text-white text-lg font-bold mb-2">{c.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a]">{c.desc}</p></div></FadeIn>
        ))}
      </div>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-20"><FadeIn><AuditForm service="Web Design (Manchester)" /></FadeIn></div></section>
  </>);
}

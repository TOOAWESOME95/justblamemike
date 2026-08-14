'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/UI';
import AuditForm from '../../components/AuditForm';
export default function Content() {
  return (
    <>
      <section className="relative pt-12 pb-20 bg-brand-dark">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn><nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6"><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span><span className="text-brand-orange">Facebook Ads Manchester</span></nav><SectionLabel>Paid Social</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">Facebook & Instagram ads<br />that <span className="text-brand-orange">stop the scroll.</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">Boosting posts isn&apos;t a strategy. We build proper paid social campaigns with targeting, creative, and funnels that turn scrollers into customers.</p></FadeIn>
        </div>
      </section>
      <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-12"><FadeIn><AuditForm service="Meta Ads (Manchester)" /></FadeIn></div></section>
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn><h2 className="text-3xl font-bold text-white mb-12">What makes our paid social different</h2></FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎨', title: 'Creative That Converts', desc: 'We don\'t just write ads. We build creative strategies with hooks, angles, and formats tested across hundreds of campaigns.' },
              { icon: '🎯', title: 'Audience Architecture', desc: 'Lookalike audiences, interest stacking, custom audiences from your CRM. We build audience layers that find your ideal customers.' },
              { icon: '🔄', title: 'Full-Funnel Retargeting', desc: 'Multi-stage retargeting that follows prospects from awareness to conversion. Different messages at different stages of the journey.' },
              { icon: '📱', title: 'Platform Native', desc: 'Ads built specifically for how people use Facebook and Instagram. Formats that feel native to the feed, not intrusive.' },
              { icon: '📋', title: 'Lead Gen & Instant Forms', desc: 'Facebook Lead Ads with instant forms that capture details without leaving the platform. Lower friction, higher conversion rates.' },
              { icon: '📊', title: 'Attribution That Works', desc: 'We set up proper tracking so you know exactly which ads drive revenue, not just clicks. UTMs, pixel events, and offline conversions.' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}><div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><span className="text-2xl block mb-4">{c.icon}</span><h3 className="text-white text-lg font-bold mb-2">{c.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a]">{c.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-20"><FadeIn><AuditForm service="Meta Ads (Manchester)" /></FadeIn></div></section>
    </>
  );
}

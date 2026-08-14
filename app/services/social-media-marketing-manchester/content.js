'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/UI';
import AuditForm from '../../components/AuditForm';
export default function Content() {
  return (<>
    <section className="relative pt-12 pb-20 bg-brand-dark"><div className="relative max-w-7xl mx-auto px-6">
      <FadeIn><nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6"><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span><span className="text-brand-orange">Social Media Marketing Manchester</span></nav><SectionLabel>Social Media</SectionLabel></FadeIn>
      <FadeIn delay={0.1}><h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">Social media that<br /><span className="text-brand-orange">actually sells.</span></h1></FadeIn>
      <FadeIn delay={0.2}><p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">Posting three times a week and hoping for the best isn&apos;t a strategy. We combine paid social advertising with organic content that builds audiences and drives real business results.</p></FadeIn>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-12"><FadeIn><AuditForm service="Social Media (Manchester)" /></FadeIn></div></section>
    <section className="bg-brand-dark"><div className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-3xl font-bold text-white mb-12">Our social media services</h2></FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '📢', title: 'Paid Social Campaigns', desc: 'Facebook, Instagram, and LinkedIn ad campaigns built for lead generation and sales, not just likes and followers.' },
          { icon: '📸', title: 'Content Strategy', desc: 'A plan for what to post, when to post it, and why. Content calendars tied to business goals, not just filling a feed.' },
          { icon: '🎬', title: 'Video & Creative', desc: 'Scroll-stopping content created by our in-house creative team. Video, graphics, and copy that captures attention.' },
          { icon: '🤝', title: 'Influencer Marketing', desc: 'Finding the right creators for your brand and managing partnerships that drive real engagement and sales.' },
          { icon: '📊', title: 'Analytics & Reporting', desc: 'Monthly reports that tie social activity back to business outcomes. Revenue attributed, not just reach reported.' },
          { icon: '💬', title: 'Community Management', desc: 'Engaging with your audience, responding to comments, and building a community that champions your brand.' },
        ].map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.06}><div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><span className="text-2xl block mb-4">{c.icon}</span><h3 className="text-white text-lg font-bold mb-2">{c.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a]">{c.desc}</p></div></FadeIn>
        ))}
      </div>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-20"><FadeIn><AuditForm service="Social Media (Manchester)" /></FadeIn></div></section>
  </>);
}

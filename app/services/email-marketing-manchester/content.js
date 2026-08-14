'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/UI';
import AuditForm from '../../components/AuditForm';
export default function Content() {
  return (<>
    <section className="relative pt-12 pb-20 bg-brand-dark"><div className="relative max-w-7xl mx-auto px-6">
      <FadeIn><nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6"><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span><span className="text-brand-orange">Email Marketing Manchester</span></nav><SectionLabel>Email Marketing</SectionLabel></FadeIn>
      <FadeIn delay={0.1}><h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">Email marketing<br />that <span className="text-brand-orange">lands in inboxes.</span></h1></FadeIn>
      <FadeIn delay={0.2}><p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">Your emails are getting blocked and you don&apos;t know it. We fix your deliverability, build proper segmentation, and create campaigns that drive revenue. Not spam complaints.</p></FadeIn>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-12"><FadeIn><AuditForm service="Email Marketing (Manchester)" /></FadeIn></div></section>
    <section className="bg-brand-dark"><div className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-3xl font-bold text-white mb-12">Email services for Manchester businesses</h2></FadeIn>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Deliverability & Authentication', desc: 'SPF, DKIM, DMARC setup. Sender reputation monitoring. Blacklist checks. We make sure your emails actually reach the inbox, not the spam folder.' },
          { title: 'Segmentation & Personalisation', desc: 'Stop blasting your whole list with the same email. We build segments based on behaviour, purchase history, and engagement so every email feels relevant.' },
          { title: 'Automation Flows', desc: 'Welcome sequences, abandoned cart recovery, re-engagement campaigns. Automated email flows that work while you sleep and drive revenue on autopilot.' },
          { title: 'Campaign Strategy', desc: 'Monthly campaign planning, copywriting, and A/B testing. We plan what to send, when to send it, and measure what actually moves the needle.' },
        ].map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.08}><div className="p-8 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><h3 className="text-white text-xl font-bold mb-3">{s.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a]">{s.desc}</p></div></FadeIn>
        ))}
      </div>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-20"><FadeIn><AuditForm service="Email Marketing (Manchester)" /></FadeIn></div></section>
  </>);
}

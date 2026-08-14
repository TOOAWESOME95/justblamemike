'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/UI';
import AuditForm from '../../components/AuditForm';
export default function Content() {
  return (<>
    <section className="relative pt-12 pb-20 bg-brand-dark"><div className="relative max-w-7xl mx-auto px-6">
      <FadeIn><nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6"><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span><span className="text-brand-orange">Digital Marketing Manchester</span></nav><SectionLabel>Full Service</SectionLabel></FadeIn>
      <FadeIn delay={0.1}><h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">Digital marketing<br />agency <span className="text-brand-orange">Manchester.</span></h1></FadeIn>
      <FadeIn delay={0.2}><p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">Looking for a digital marketing agency in Manchester that actually delivers? We&apos;re a small team that punches well above our weight. PPC, SEO, web design, email marketing. No fluff. No long contracts. Just results.</p></FadeIn>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-12"><FadeIn><AuditForm service="Digital Marketing (Manchester)" /></FadeIn></div></section>
    <section className="bg-brand-dark"><div className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-3xl font-bold text-white mb-6">Everything you need under one roof</h2><p className="text-[#8a7a6a] max-w-2xl mb-12">Most agencies specialise in one thing and outsource the rest. We do it all in-house. That means your PPC, SEO, website, and email campaigns all work together as one strategy, not disconnected silos.</p></FadeIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '📊', title: 'Google Ads & PPC', desc: 'Search, Shopping, and Performance Max campaigns that drive leads and sales with measurable ROI.', link: '/services/google-ads/' },
          { icon: '📱', title: 'Meta & Social Ads', desc: 'Facebook and Instagram ad campaigns with lookalike audiences, retargeting, and creative that converts.', link: '/services/meta-ads/' },
          { icon: '🔍', title: 'SEO & Local SEO', desc: 'Get found on Google. Technical SEO, local SEO, and content strategy that builds organic traffic long-term.', link: '/services/seo/' },
          { icon: '🖥️', title: 'Web Design', desc: 'Custom websites built for speed, SEO, and conversions. No templates. No WordPress themes.', link: '/services/web-design/' },
          { icon: '📧', title: 'Email Marketing', desc: 'Strategy, segmentation, automation, and deliverability. Emails that land in inboxes and drive revenue.', link: '/services/email-marketing/' },
          { icon: '🎬', title: 'Content & Creative', desc: 'Copywriting, video production, and creative strategy that tells your story and captures attention.' },
        ].map((c, i) => (
          <FadeIn key={c.title} delay={i * 0.06}><div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><span className="text-2xl block mb-4">{c.icon}</span><h3 className="text-white text-lg font-bold mb-2">{c.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a] mb-3">{c.desc}</p>{c.link && <Link href={c.link} className="text-xs font-bold text-brand-orange">Learn more →</Link>}</div></FadeIn>
        ))}
      </div>
    </div></section>
    <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}><div className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-3xl font-bold text-white mb-6">Why hire Just Blame Mike?</h2></FadeIn>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Affordable without cutting corners', desc: 'We\'re not the cheapest and we\'re not the most expensive. We\'re the agency that gives you the best return on what you spend. Every strategy is built around your actual budget.' },
          { title: 'Small business specialists', desc: 'We work with businesses that don\'t have marketing departments. Owner-managers, start-ups, and growing companies who need someone to handle the digital side properly.' },
          { title: 'Direct access to the people doing the work', desc: 'No account managers relaying messages. You speak directly to the people running your campaigns, building your site, and optimising your SEO.' },
          { title: 'Manchester based, UK focused', desc: 'We\'re based in Manchester and work with businesses across the North West and the UK. Local enough to meet face-to-face, experienced enough to compete nationally.' },
        ].map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.08}><div className="p-8 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><h3 className="text-white text-xl font-bold mb-3">{s.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a]">{s.desc}</p></div></FadeIn>
        ))}
      </div>
    </div></section>
    <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-20"><FadeIn><AuditForm service="Digital Marketing (Manchester)" /></FadeIn></div></section>
  </>);
}

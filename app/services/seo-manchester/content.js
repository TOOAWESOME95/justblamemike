'use client';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel } from '../../components/UI';
import AuditForm from '../../components/AuditForm';
export default function Content() {
  return (
    <>
      <section className="relative pt-12 pb-20 bg-brand-dark">
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn><nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6"><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span><span className="text-brand-orange">SEO Manchester</span></nav><SectionLabel>SEO</SectionLabel></FadeIn>
          <FadeIn delay={0.1}><h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">SEO agency Manchester.<br /><span className="text-brand-orange">Page one or nothing.</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">If your business isn&apos;t showing up when people in Manchester search for what you do, you&apos;re invisible. We fix that with local SEO, technical SEO, and content that Google rewards.</p></FadeIn>
        </div>
      </section>
      <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-12"><FadeIn><AuditForm service="SEO (Manchester)" /></FadeIn></div></section>
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn><h2 className="text-3xl font-bold text-white mb-12">SEO services for Manchester businesses</h2></FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Local SEO & Google Business Profile', desc: 'Get into the map pack. We optimise your Google Business Profile, build local citations, manage reviews, and create location-specific content that ranks for "near me" searches across Manchester.' },
              { title: 'Technical SEO Audits', desc: 'Site speed, crawlability, Core Web Vitals, schema markup, XML sitemaps. We fix the things under the bonnet that most agencies ignore but Google cares deeply about.' },
              { title: 'On-Page Optimisation', desc: 'Title tags, meta descriptions, header structure, internal linking, and content optimisation. Every page on your site should be working to rank for something specific.' },
              { title: 'Content Strategy & Keyword Planning', desc: 'We research what your customers actually search for, then create content that answers those questions better than your competitors. Not blog spam. Strategic content.' },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}><div className="p-8 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]"><h3 className="text-white text-xl font-bold mb-3">{s.title}</h3><p className="text-sm leading-relaxed text-[#8a7a6a]">{s.desc}</p></div></FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn><h2 className="text-3xl font-bold text-white mb-6">Why local SEO matters in Manchester</h2><p className="text-[#8a7a6a] max-w-3xl mb-8">Manchester is one of the most competitive digital markets in the UK outside London. With thousands of businesses fighting for the same search terms, you need an SEO strategy that&apos;s built specifically for this market. Generic SEO packages from faceless agencies don&apos;t cut it here. You need someone who knows the landscape, understands the competition, and can move fast when the algorithm changes.</p></FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: '46%', label: 'of Google searches have local intent' },
                { stat: '88%', label: 'of local mobile searches lead to action within 24 hours' },
                { stat: '97%', label: 'of people learn about local companies online first' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-6 text-center bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <p className="text-3xl font-black text-brand-orange">{s.stat}</p>
                  <p className="text-xs text-[#6a5a4a] mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="bg-brand-dark"><div className="max-w-3xl mx-auto px-6 py-20"><FadeIn><AuditForm service="SEO (Manchester)" /></FadeIn></div></section>
    </>
  );
}

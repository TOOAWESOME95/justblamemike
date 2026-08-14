'use client';

import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import { SectionLabel, PlaceholderImg, CTA } from '../components/UI';

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-brand-dark">
        <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn><SectionLabel>Our Expertise</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">
              Growth-focused<br /><span className="text-brand-orange">digital services.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882]">
              Expert digital solutions to scale your business. We handle the complexity, the data, and the execution. If it goes wrong, just blame Mike.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PPC */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12 border-l-4 border-brand-orange pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Pay-Per-Click (PPC) Management</h2>
              <span className="text-3xl">📊</span>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Google Ads', href: '/services/google-ads', desc: 'Search, Display, and Shopping campaigns meticulously optimised for maximum ROI and lead quality.', features: ['High-Intent Keyword Research', 'Dynamic Search Ads (DSA)', 'Performance Max Campaigns', 'Detailed Monthly Performance Audits'], img: '/banner-google-ads.png' },
              { title: 'Meta Ads', href: '/services/meta-ads', desc: 'Targeted social campaigns across Facebook and Instagram designed to capture attention and drive action.', features: ['Advanced Lookalike Audiences', 'Creative Strategy & Copywriting', 'Multi-stage Retargeting Funnels', 'Lead Gen & Instant Forms'], img: '/banner-meta.png' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden h-full transition-all duration-300 hover:translate-y-[-4px] bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-white text-2xl font-bold mb-3">{c.title}</h3>
                    <p className="text-sm leading-relaxed mb-6 text-[#8a7a6a]">{c.desc}</p>
                    <ul className="space-y-3 mb-6">
                      {c.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-[#b0a090]">
                          <span className="text-brand-orange">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={c.href} className="text-sm font-bold text-brand-orange flex items-center gap-2 group">
                      Learn more & get a free audit <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Web Building */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-3xl p-8 md:p-16 bg-brand-orange/[0.03]">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-5xl block mb-4">🖥️</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Website Building</h2>
                <p className="max-w-2xl mx-auto text-[#8a7a6a]">High-performance websites that don&apos;t just look pretty. they work hard for your business 24/7.</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '✏️', title: 'Custom Design', desc: 'No templates. Bespoke digital experiences tailored to your brand identity and user journey.', tags: ['UI/UX', 'Branding'] },
                { icon: '🌐', title: 'SEO Optimised', desc: 'Built-in search engine optimisation from the ground up. Semantic HTML, fast indexing, and keyword structure.', tags: ['On-Page', 'Technical'] },
                { icon: '⚡', title: 'Elite Performance', desc: 'Lightning fast load times and perfect Core Web Vitals scores. Your visitors never wait.', tags: ['Speed', 'Scalability'] },
              ].map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.08}>
                  <div className="p-8 rounded-2xl h-full bg-brand-dark border border-brand-orange/[0.12]">
                    <span className="text-3xl block mb-5">{c.icon}</span>
                    <h4 className="text-white text-xl font-bold mb-3">{c.title}</h4>
                    <p className="text-sm leading-relaxed mb-6 text-[#8a7a6a]">{c.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-orange/[0.08] text-brand-orange">{t}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <div className="text-center mt-10">
                <Link href="/services/web-design" className="text-sm font-bold text-brand-orange inline-flex items-center gap-2 group">
                  Learn more about our web design service <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEO */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12 border-l-4 border-brand-orange pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">SEO & Organic Growth</h2>
              <span className="text-3xl">🔍</span>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Local SEO', desc: 'Dominate your local search results. Google Business Profile optimisation, local citations, review management, and location-specific content.', features: ['Google Business Profile Setup & Optimisation', 'Local Citation Building', 'Review Generation Strategy', 'Location-specific Landing Pages'] },
              { title: 'Technical SEO', desc: 'The stuff under the bonnet that makes Google love your site. Schema markup, site speed, crawlability, and structured data.', features: ['Site Audits & Crawl Analysis', 'Schema Markup Implementation', 'Core Web Vitals Optimisation', 'Keyword Strategy & Content Planning'] },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <h3 className="text-white text-2xl font-bold mb-4">{c.title}</h3>
                  <p className="text-sm leading-relaxed mb-6 text-[#8a7a6a]">{c.desc}</p>
                  <ul className="space-y-3">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-[#b0a090]">
                        <span className="text-brand-orange">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Link href="/services/seo" className="text-sm font-bold text-brand-orange inline-flex items-center gap-2 group">
                Learn more about our SEO service <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Email Marketing */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12 border-l-4 border-brand-orange pl-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Email Marketing & Deliverability</h2>
              <span className="text-3xl">📬</span>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="p-8 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                <h3 className="text-white text-2xl font-bold mb-4">Strategy & Segmentation</h3>
                <p className="text-sm leading-relaxed mb-6 text-[#8a7a6a]">Stop blasting your whole list with the same email. We build proper segmentation, automation flows, and campaigns that actually drive revenue.</p>
                <ul className="space-y-3">
                  {['Behavioural segmentation', 'Welcome & nurture sequences', 'Abandoned cart recovery', 'A/B tested subject lines & content'].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#b0a090]"><span className="text-brand-orange">✓</span> {f}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                <h3 className="text-white text-2xl font-bold mb-4">Deliverability & Compliance</h3>
                <p className="text-sm leading-relaxed mb-6 text-[#8a7a6a]">Your emails are getting blocked and you don&apos;t even know it. We fix authentication, clean your lists, and keep your sender reputation bulletproof.</p>
                <ul className="space-y-3">
                  {['SPF/DKIM/DMARC setup', 'Domain warm-up schedules', 'List hygiene & bounce management', 'GDPR & PECR compliance'].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-[#b0a090]"><span className="text-brand-orange">✓</span> {f}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Link href="/services/email-marketing" className="text-sm font-bold text-brand-orange inline-flex items-center gap-2 group">
                Learn more about email marketing <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location & Specialist Pages */}
      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <SectionLabel>Manchester & Beyond</SectionLabel>
            <h2 className="text-3xl font-bold text-white mb-4">Find us where you need us</h2>
            <p className="text-[#6a5a4a] mb-12 max-w-xl">Based in Middleton, Manchester. Working with businesses across Greater Manchester, the North West, and the UK.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'PPC Agency Manchester', href: '/services/ppc-agency-manchester/' },
              { label: 'Google Ads Manchester', href: '/services/google-ads-manchester/' },
              { label: 'Facebook Ads Manchester', href: '/services/facebook-ads-manchester/' },
              { label: 'SEO Agency Manchester', href: '/services/seo-manchester/' },
              { label: 'Web Design Manchester', href: '/services/web-design-manchester/' },
              { label: 'Email Marketing Manchester', href: '/services/email-marketing-manchester/' },
              { label: 'Social Media Manchester', href: '/services/social-media-marketing-manchester/' },
              { label: 'Digital Marketing Manchester', href: '/services/digital-marketing-manchester/' },
              { label: 'Greater Manchester', href: '/services/digital-marketing-greater-manchester/' },
              { label: 'Small Business Marketing', href: '/services/digital-marketing-small-business/' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="p-4 rounded-xl bg-brand-orange/[0.03] border border-brand-orange/[0.08] text-sm font-semibold text-[#a89882] hover:text-brand-orange hover:border-brand-orange/[0.2] transition-all">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

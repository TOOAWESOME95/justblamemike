'use client';

import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel, PlaceholderImg } from '../../components/UI';
import AuditForm from '../../components/AuditForm';

export default function MetaAdsContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-20 bg-brand-dark">
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span>
              <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span>
              <span className="text-brand-orange">Meta Ads</span>
            </nav>
            <SectionLabel>Meta Ads Management</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">
              Social ads that<br /><span className="text-brand-orange">actually convert.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">
              Forget boosted posts. We build proper Facebook and Instagram campaigns with layered audiences, scroll-stopping creative, and retargeting funnels that turn attention into revenue.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {['Facebook Ads', 'Instagram Ads', 'Lead Gen Forms', 'Retargeting', 'Lookalike Audiences', 'Creative Strategy'].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/[0.08] text-brand-orange">{t}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Audit Form - Top */}
      <section className="bg-brand-dark" style={{ borderBottom: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <FadeIn>
            <AuditForm service="Meta Ads" />
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn><h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">What Mike sorts out for you</h2></FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '👥', title: 'Audience Research & Targeting', desc: 'Custom audiences, lookalikes, interest stacking, and exclusions. We find the people most likely to buy, not just scroll past.' },
              { icon: '🎨', title: 'Creative Strategy & Production', desc: 'Thumb-stopping ad creative. static, carousel, and video concepts designed to cut through the noise in the feed.' },
              { icon: '🔄', title: 'Retargeting Funnels', desc: 'Multi-stage retargeting that nurtures cold traffic into warm leads. Different messages for different stages of awareness.' },
              { icon: '📋', title: 'Lead Gen & Instant Forms', desc: 'In-platform lead forms that reduce friction and increase conversion rates. Auto-synced with your CRM or email tool.' },
              { icon: '🧪', title: 'A/B Testing Framework', desc: 'Systematic creative and audience testing so we\'re always scaling what works and killing what doesn\'t.' },
              { icon: '📊', title: 'Weekly Reporting & Optimisation', desc: 'Clear reports with CPL, ROAS, and funnel metrics. Plus weekly budget shifts based on what\'s performing.' },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <span className="text-2xl block mb-4">{c.icon}</span>
                  <h3 className="text-white text-lg font-bold mb-2">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7a6a]">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1}>
              <div>
                <SectionLabel>Why Blame Mike?</SectionLabel>
                <h2 className="text-3xl font-bold text-white mb-6">Boosted posts are not a strategy.<br />This is.</h2>
                <div className="space-y-4">
                  {[
                    'Full-funnel approach. awareness, consideration, conversion',
                    'Creative that\'s designed for the platform, not repurposed',
                    'Pixel and CAPI setup for accurate tracking post-iOS14',
                    'We test audiences and creative weekly, not quarterly',
                    'Transparent reporting. you see every metric that matters',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#b0a090]">
                      <span className="text-brand-orange mt-0.5">✓</span><span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', border: '1px solid rgba(244,140,37,0.12)' }}>
                <img src="/banner-meta.png" alt="Meta Ads campaign dashboard" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <FadeIn><AuditForm service="Meta Ads" /></FadeIn>
        </div>
      </section>
    </>
  );
}

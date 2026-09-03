'use client';

import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel, PlaceholderImg } from '../../components/UI';
import AuditForm from '../../components/AuditForm';
import { FAQS } from './faqs';

export default function GoogleAdsContent() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-20 bg-brand-dark">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brand-orange">Google Ads</span>
            </nav>
            <SectionLabel>Google Ads Management</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">
              Stop wasting ad spend.<br /><span className="text-brand-orange">Start scaling.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">
              We manage Google Ads campaigns that actually make money. Search, Shopping, Display, Performance Max. all meticulously optimised so every pound works harder.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {['Search Ads', 'Google Shopping', 'Display Network', 'Performance Max', 'YouTube Ads', 'Remarketing'].map((t) => (
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
            <AuditForm service="Google Ads" />
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">What Mike handles for you</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔍', title: 'Keyword Research & Strategy', desc: 'Deep-dive into high-intent keywords your customers are actually searching. We find the money terms your competitors are missing.' },
              { icon: '🛒', title: 'Shopping Feed Optimisation', desc: 'Product titles, descriptions, custom labels, and bidding tiers structured to maximise Shopping and PMax performance.' },
              { icon: '📊', title: 'Conversion Tracking Setup', desc: 'Proper tracking that tells you exactly which clicks turn into revenue. GA4, GTM, enhanced conversions. all configured correctly.' },
              { icon: '🎯', title: 'Audience Targeting', desc: 'Customer match lists, in-market audiences, and custom segments that put your ads in front of buyers, not browsers.' },
              { icon: '✍️', title: 'Ad Copy & Creative', desc: 'Responsive search ads with tested headlines and descriptions. We write copy that clicks, not just impressions.' },
              { icon: '📈', title: 'Monthly Reporting & Optimisation', desc: 'Transparent reports with real metrics. Plus continuous bid adjustments, A/B tests, and negative keyword management.' },
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

      {/* Why Mike */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', border: '1px solid rgba(244,140,37,0.12)' }}>
                <img src="/banner-google-ads.png" alt="Google Ads campaign dashboard" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <SectionLabel>Why Blame Mike?</SectionLabel>
                <h2 className="text-3xl font-bold text-white mb-6">Most agencies set and forget.<br />Mike doesn&apos;t.</h2>
                <div className="space-y-4">
                  {[
                    'Weekly optimisation, not monthly check-ins',
                    'No long-term contracts. we earn your business monthly',
                    'Direct access to the person managing your account',
                    'We tell you what\'s not working, not just what is',
                    'Transparent pricing. you see exactly where your money goes',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#b0a090]">
                      <span className="text-brand-orange mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <FadeIn>
            <SectionLabel>FAQs</SectionLabel>
            <h2 className="text-3xl font-bold text-white mb-8">Common questions.</h2>
          </FadeIn>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <FadeIn key={f.question}>
                <div className="p-6 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <h3 className="text-white font-bold mb-2">{f.question}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7a6a]">{f.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Form */}
      <section className="bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <FadeIn>
            <AuditForm service="Google Ads" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}

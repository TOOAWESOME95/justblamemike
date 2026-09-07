'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './components/FadeIn';
import { SectionLabel, OrangeBtn, PlaceholderImg, CTA } from './components/UI';
import Schema, { howToSchema } from './components/Schema';

const FEATURED_WORK = [
  { tag: 'Social Media · Viral Marketing', client: 'YorkRoast', headline: 'From a wrap to 2.7 million views across Facebook and LadBible.', image: '/york-roast.jpg', metrics: [['2.7M+', 'Views'], ['Viral', 'LadBible'], ['📈', 'Awareness']] },
  { tag: 'Amazon Ads · Google Shopping · Meta Ads', client: 'Nutripouch', headline: '450% ROAS without increasing spend. Every penny worked harder.', image: '/nutripouch.jpg', metrics: [['450%+', 'ROAS'], ['📈', 'Sales Up'], ['£0', 'Extra Spend']] },
  { tag: 'Google Ads · Google Shopping', client: 'Gear4Music', headline: 'Month-on-month growth in the most competitive music market.', image: '/gear4music.jpg', metrics: [['📈', 'MoM Growth'], ['12+', 'Iterations'], ['🎸', 'E-commerce']] },
  { tag: 'Web Design · Custom PHP · Lead Gen', client: 'Red Rose / White Rose / North Wales Copiers', headline: 'From 15 leads to 60 a month. Custom code, custom results.', image: '/copiers.png', metrics: [['10→60', 'Leads/Month'], ['3', 'Sites'], ['Custom', 'PHP']] },
  { tag: 'LinkedIn Automation · B2B', client: 'MLS Kitchens', headline: '40 leads a month on autopilot. Fully automated LinkedIn outreach.', image: '/mls-kitchen.png', metrics: [['40+', 'Leads/Month'], ['🤖', 'Automated'], ['📈', 'Pipeline']] },
  { tag: 'Website · Videography · Charity', client: 'Cancer Got Talent', headline: '£7,000+ raised for cancer patients. Built the site and shot the video.', image: '/cancer-got-talent.jpg', metrics: [['£7K+', 'Raised'], ['🎬', 'Video'], ['❤️', 'Charity']] },
];

function shuffleAndPick(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function HomePage() {
  const [featured, setFeatured] = useState(FEATURED_WORK.slice(0, 2));

  useEffect(() => {
    setFeatured(shuffleAndPick(FEATURED_WORK, 2));
  }, []);

  return (
    <>
      <Schema data={howToSchema({
        name: 'How Just Blame Mike Works With New Clients',
        description: 'The four-step process for starting a PPC, website, or SEO project with Just Blame Mike.',
        steps: [
          { name: 'Discovery Call', text: 'We chat about your business, goals, and what’s not working. No hard sell.' },
          { name: 'Strategy & Audit', text: 'We dive into your data, competitors, and market. You get a clear plan.' },
          { name: 'Build & Launch', text: 'We build it, test it, and launch it. Campaigns, websites, or both.' },
          { name: 'Optimise & Scale', text: 'Monthly reporting, continuous optimisation, and scaling what works.' },
        ],
      })} />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(244,140,37,0.03) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.07) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
          <div className="max-w-3xl">
            <FadeIn><SectionLabel>Digital Marketing Agency</SectionLabel></FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
                PPC. Websites. SEO.<br /><span className="text-brand-orange">Blame Mike*</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mb-4 text-[#a89882]">
                We run your Google &amp; Meta ad campaigns, build the website they land on, and get you found on search, so growth doesn&apos;t depend on you learning marketing.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-4">
                <OrangeBtn href="/contact">Start Your Project</OrangeBtn>
                <OrangeBtn variant="outline" href="/services">View Services</OrangeBtn>
              </div>
              <p className="text-xs text-[#6a5a4a]">*Results guaranteed. Blame is optional.</p>
            </FadeIn>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
          <Image src="/logo.jpg" alt="" width={180} height={180} className="rounded-lg" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-dark" style={{ borderBottom: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[['£2.1M+', 'Ad Spend Managed'], ['340%', 'Avg. ROAS Increase'], ['28+', 'Websites Launched'], ['96%', 'Client Retention']].map(([n, l]) => (
                <div key={l}>
                  <p className="text-3xl md:text-4xl font-black text-brand-orange">{n}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider mt-1 text-[#6a5a4a]">{l}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <FadeIn>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-2xl leading-tight">
              Three pillars.<br />One obsession: <span className="text-brand-orange">your growth.</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📊', title: 'PPC Management', desc: 'Google Ads and Meta Ads campaigns built for ROI, not vanity metrics. Every penny managed like it\'s our own.', tags: ['Google Ads', 'Meta Ads', 'Shopping', 'PMax'] },
              { icon: '🖥️', title: 'Website Building', desc: 'Custom-designed, lightning-fast websites that convert visitors into customers. No templates, no fluff.', tags: ['Custom Design', 'WordPress', 'Shopify', 'Landing Pages'] },
              { icon: '🔍', title: 'SEO Strategy', desc: 'Technical SEO, local SEO, and content strategy that gets you found by the right people at the right time.', tags: ['Local SEO', 'Technical', 'On-Page', 'Content'] },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Link href="/services" className="block p-8 rounded-2xl h-full transition-all duration-300 hover:translate-y-[-4px] bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <span className="text-4xl block mb-5">{s.icon}</span>
                  <h3 className="text-white text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-6 text-[#8a7a6a]">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-orange/[0.08] text-brand-orange">{t}</span>
                    ))}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="bg-brand-warm">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <FadeIn>
            <SectionLabel>Recent Work</SectionLabel>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight max-w-lg leading-tight">
                Results that <span className="text-brand-orange">do the talking.</span>
              </h2>
              <Link href="/case-studies" className="text-sm font-bold flex items-center gap-2 group text-brand-orange">
                View all case studies <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((cs, n) => (
              <FadeIn key={cs.client} delay={n * 0.1}>
                <Link href="/case-studies" className="block rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] bg-brand-dark border border-brand-orange/[0.08]">
                  <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img src={cs.image} alt={cs.client} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">{cs.tag}</span>
                    <h3 className="text-white text-xl font-bold mt-2 mb-3">{cs.client}</h3>
                    <p className="text-sm mb-4 text-[#8a7a6a]">{cs.headline}</p>
                    <div className="flex gap-6">
                      {cs.metrics.map(([val, label]) => (
                        <div key={label} className="text-center">
                          <p className="text-lg font-black text-brand-orange">{val}</p>
                          <p className="text-[10px] uppercase tracking-wider text-[#6a5a4a]">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <FadeIn>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-2xl leading-tight">
              Simple process.<br /><span className="text-brand-orange">Serious results.</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { s: '01', t: 'Discovery Call', d: "We chat about your business, goals, and what's not working. No hard sell." },
              { s: '02', t: 'Strategy & Audit', d: 'We dive into your data, competitors, and market. You get a clear plan.' },
              { s: '03', t: 'Build & Launch', d: 'We build it, test it, and launch it. Campaigns, websites, or both.' },
              { s: '04', t: 'Optimise & Scale', d: 'Monthly reporting, continuous optimisation, and scaling what works.' },
            ].map((item, i) => (
              <FadeIn key={item.s} delay={i * 0.08}>
                <div>
                  <span className="text-7xl font-black block mb-4 text-brand-orange/[0.08]">{item.s}</span>
                  <h4 className="text-white text-lg font-bold mb-2">{item.t}</h4>
                  <p className="text-sm leading-relaxed text-[#8a7a6a]">{item.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

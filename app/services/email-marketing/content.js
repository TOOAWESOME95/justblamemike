'use client';

import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel, PlaceholderImg } from '../../components/UI';
import AuditForm from '../../components/AuditForm';

export default function EmailMarketingContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-brand-dark">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6">
              <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brand-orange">Email Marketing</span>
            </nav>
            <SectionLabel>Email Marketing</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">
              Inbox, not junk.<br /><span className="text-brand-orange">Blame Mike.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">
              Your emails are getting blocked, bounced, or binned. Mike fixes your deliverability, builds proper segmentation, and creates automations that actually make you money. not get you blacklisted.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {['Email Strategy', 'Segmentation', 'Automation', 'Deliverability', 'SPF/DKIM/DMARC', 'List Hygiene'].map((t) => (
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
            <AuditForm service="Email Marketing" />
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">What Mike sorts out for you</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📬', title: 'Deliverability & Authentication', desc: 'SPF, DKIM, DMARC setup and monitoring. Warming schedules for new domains. Blacklist checks and removal. Your emails land in inboxes, not spam folders.' },
              { icon: '🎯', title: 'List Segmentation', desc: 'Stop blasting your whole list with the same email. We build segments based on behaviour, purchase history, engagement level, and lifecycle stage.' },
              { icon: '⚙️', title: 'Automation Flows', desc: 'Welcome sequences, abandoned cart recovery, post-purchase nurture, win-back campaigns. all running 24/7 making you money while you sleep.' },
              { icon: '✍️', title: 'Email Copy & Design', desc: 'Emails that get opened AND clicked. Subject lines that cut through the noise, copy that converts, and designs that look mint on every device.' },
              { icon: '🧹', title: 'List Hygiene & Compliance', desc: 'Regular list cleaning, bounce management, unsubscribe handling, and GDPR/PECR compliance. Keep your sender reputation bulletproof.' },
              { icon: '📊', title: 'Reporting & A/B Testing', desc: 'Open rates, click rates, revenue per email, deliverability scores. Plus continuous A/B testing on subject lines, send times, and content.' },
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

      {/* The Deliverability Problem */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-3xl p-8 md:p-16 bg-brand-orange/[0.03]">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Why your emails are getting blocked</h2>
              <p className="text-[#8a7a6a] max-w-2xl mb-12">Most businesses don&apos;t even know they have a deliverability problem until it&apos;s too late. Here&apos;s what Mike checks first.</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { problem: 'No SPF/DKIM/DMARC records', fix: 'We set up proper email authentication so mailbox providers trust your domain. Without this, you\'re basically sending from a burner phone.' },
                { problem: 'Sending to dead addresses', fix: 'Bounced emails tank your sender score. We clean your list, remove inactive contacts, and set up automatic hygiene rules.' },
                { problem: 'No warm-up on new domains', fix: 'Blasting 10,000 emails from a fresh domain? Straight to spam. We build gradual warm-up schedules that establish trust.' },
                { problem: 'One-size-fits-all blasts', fix: 'Sending the same email to everyone kills engagement. Low engagement = spam folder. We segment so every email is relevant.' },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="p-6 rounded-xl bg-brand-dark border border-brand-orange/[0.12]">
                    <h4 className="text-brand-orange font-bold mb-2 flex items-center gap-2">
                      <span>🚫</span> {item.problem}
                    </h4>
                    <p className="text-sm text-[#8a7a6a] leading-relaxed">
                      <span className="text-brand-orange font-semibold">Mike&apos;s fix:</span> {item.fix}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Mike */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', border: '1px solid rgba(244,140,37,0.12)' }}>
                <img src="/banner-email.png" alt="Email marketing dashboard showing open rates and engagement" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <SectionLabel>Why Blame Mike?</SectionLabel>
                <h2 className="text-3xl font-bold text-white mb-6">Your emails should make money,<br />not make enemies.</h2>
                <div className="space-y-4">
                  {[
                    'We fix deliverability FIRST. no point writing great emails if they never arrive',
                    'Platform agnostic. Mailchimp, Klaviyo, ActiveCampaign, HubSpot, whatever you\'re on',
                    'Revenue-focused flows, not just "newsletters" nobody reads',
                    'GDPR and PECR compliant. Mike keeps you legal',
                    'We monitor sender reputation weekly so you never get blacklisted',
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

      {/* Bottom Audit Form */}
      <section className="bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <FadeIn>
            <AuditForm service="Email Marketing" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel, CTA } from '../../components/UI';
import { WHATSAPP_URL, WhatsAppIcon } from '../../components/WhatsApp';
import { FAQS } from './faqs';

const FORMSPREE = 'https://formspree.io/f/mrejgonp';
const MAILBOX_OPTIONS = ['1 to 5', '6 to 15', '16 to 40', 'More than 40'];
const CURRENT_OPTIONS = ['Microsoft 365 / Outlook', 'Google Workspace / Gmail', 'My web host', 'Something else / not sure'];

const STEPS = [
  { n: '01', title: 'Keep your address', desc: 'you@yourcompany.co.uk stays exactly the same. Your customers won’t notice a thing, apart from fewer emails going missing.' },
  { n: '02', title: 'Moved over for you', desc: 'I move your mailboxes, old emails and folders across to my server, so you can carry on working while it happens.' },
  { n: '03', title: 'Works on everything', desc: 'Outlook, Apple Mail, the mail app on your phone or a web browser. Same inbox everywhere.' },
  { n: '04', title: 'Looked after', desc: 'I keep the server updated, filtered and backed up, and you’ve got one person to call if anything plays up.' },
];

const SECURITY = [
  { title: 'Encrypted connections', desc: 'Email is sent and collected over encrypted connections, so it can’t be read on the way.' },
  { title: 'Spam and virus filtering', desc: 'Junk and dodgy attachments are filtered before they reach your inbox.' },
  { title: 'Two-step login', desc: 'A code on your phone as well as a password, so a leaked password isn’t enough to get in.' },
  { title: 'Backed up every day', desc: 'Deleted something you needed? It can be brought back from a backup.' },
  { title: 'Proper sender records', desc: 'SPF, DKIM and DMARC set up, so your emails land in inboxes and nobody can easily fake your address.' },
  { title: 'Watched by me', desc: 'The server is monitored, and I’m the one who gets the alert and fixes it.' },
];

const COMPARE = [
  ['One flat monthly price', true, 'Charged per user', false],
  ['Hosted on my server, not big tech’s', true, 'Their cloud', false],
  ['Old emails moved over for you', true, 'Usually DIY', false],
  ['A named person to call', true, 'Help centre or chatbot', false],
  ['Works with Outlook and your phone', true, 'Yes', true],
  ['Spam filtering and backups', true, 'Yes', true],
];

function Check({ on }) {
  return on
    ? <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-brand-dark text-xs font-black" aria-label="Yes">✓</span>
    : <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#5a4a3a] text-[#6a5a4a] text-xs font-black" aria-label="No">✕</span>;
}

function Quote() {
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  async function submit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    form.append('_subject', `Email hosting quote: ${form.get('mailboxes')} mailboxes`);
    form.append('service', 'Business Email Hosting');
    setState('sending');
    try {
      const r = await fetch(FORMSPREE, { method: 'POST', body: form, headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error(String(r.status));
      setState('sent');
      if (window.dataLayer) window.dataLayer.push({ event: 'quote_form_submit', form_type: 'Email Hosting' });
    } catch {
      setState('error');
    }
  }
  const input = 'w-full rounded-xl px-4 py-4 text-sm bg-brand-dark border border-brand-orange/[0.15] text-white placeholder:text-[#6a5a4a]';
  return (
    <section className="bg-brand-dark" id="quote" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <FadeIn>
          <SectionLabel>Get a quote</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            One flat price. <span className="text-brand-orange">No per-user fees.</span>
          </h2>
          <p className="text-lg text-[#a89882] mb-6">
            Tell me how many email addresses you need and I’ll come back with a fixed monthly price for your whole business. Hire someone new and it doesn’t go up.
          </p>
          <p className="text-sm text-[#8a7a6a]">
            Rather talk?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-[#3fd27f] underline underline-offset-4"><WhatsAppIcon size={16} /> Message me on WhatsApp</a>
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          {state === 'sent' ? (
            <div className="p-8 md:p-10 rounded-3xl bg-brand-orange/[0.06] border border-brand-orange/30" role="status">
              <h3 className="text-white text-2xl font-bold mb-2">Thanks, that’s with me</h3>
              <p className="text-[#a89882]">I’ll email you a quote, usually the same working day.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="p-8 md:p-10 rounded-3xl bg-brand-orange/[0.03] border border-brand-orange/[0.08] space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input name="name" required placeholder="Your name" className={input} aria-label="Your name" />
                <input name="email" type="email" required placeholder="Email address" className={input} aria-label="Email address" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block text-sm font-semibold text-white mb-2 ml-1">How many email addresses?</span>
                  <select name="mailboxes" required defaultValue="" className={`${input} text-[#a89882]`}>
                    <option value="" disabled>Choose one</option>
                    {MAILBOX_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="block text-sm font-semibold text-white mb-2 ml-1">Who do you use now?</span>
                  <select name="current_provider" defaultValue="" className={`${input} text-[#a89882]`}>
                    <option value="" disabled>Choose one</option>
                    {CURRENT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </label>
              </div>
              <button type="submit" disabled={state === 'sending'}
                className="w-full py-5 rounded-xl font-bold text-base bg-brand-orange text-brand-dark transition-opacity disabled:opacity-50">
                {state === 'sending' ? 'Sending…' : 'Get my quote'}
              </button>
              {state === 'error' && <p className="text-sm text-red-400" role="alert">That didn’t send. Check your connection and try again, or email mike@justblamemike.com.</p>}
              <p className="text-xs text-[#6a5a4a]">No obligation, no hard sell. Monthly rolling, cancel with 30 days’ notice.</p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

export default function EmailHostingContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-brand-dark">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(79,157,255,0.08) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <FadeIn>
              <nav className="flex items-center gap-2 text-xs text-[#6a5a4a] mb-6">
                <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link><span>/</span>
                <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link><span>/</span>
                <span className="text-brand-orange">Email Hosting</span>
              </nav>
              <SectionLabel>New: Business Email Hosting</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
                Your business email.<br /><span className="text-brand-orange">Hosted by me.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">
                Move your email off the big tech companies and onto my server. One flat monthly price instead of paying for every user, security set up properly, and a real person to call when something goes wrong.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#quote" className="px-8 py-4 rounded-xl font-bold text-center transition-all hover:scale-105 active:scale-95 bg-brand-orange text-brand-dark">Get a quote</a>
                <Link href="/contact#book" className="px-8 py-4 rounded-xl font-bold text-center transition-all hover:scale-105 active:scale-95 border-2 border-brand-orange text-brand-orange">Book a free call</Link>
              </div>
              <p className="text-sm text-[#8a7a6a] mt-5">One flat monthly price for your whole business. <span className="text-white font-bold">No per-user fees.</span></p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <video src="/videos/email-hosting.mp4" poster="/videos/email-hosting.jpg" controls playsInline preload="none"
              className="w-full max-w-md mx-auto block rounded-3xl bg-black border border-brand-orange/[0.12] shadow-2xl" style={{ aspectRatio: '4/5' }}
              aria-label="How Just Blame Mike email hosting works" />
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-14 max-w-2xl leading-tight">
              Same email address. <span className="text-brand-orange">Better looked after.</span>
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.08}>
                <div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <span className="block text-brand-orange text-sm font-black tracking-widest mb-4">{s.n}</span>
                  <h3 className="text-white text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7a6a]">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-brand-warm">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <SectionLabel>Security</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 max-w-2xl leading-tight">
              Security set up properly, <span className="text-brand-orange">from day one.</span>
            </h2>
            <p className="text-lg text-[#a89882] max-w-2xl mb-12">Most email problems come from things nobody set up. Here’s what every mailbox gets as standard.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <div className="p-7 rounded-2xl h-full bg-brand-dark/60 border border-brand-orange/[0.1]">
                  <span className="inline-flex items-center justify-center w-9 h-9 mb-4 rounded-full bg-brand-orange text-brand-dark font-black">✓</span>
                  <h3 className="text-white text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7a6a]">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compared */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <FadeIn>
            <SectionLabel>Why switch</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Stop paying more <span className="text-brand-orange">every time you hire.</span>
            </h2>
            <p className="text-[#a89882] mb-8">
              The big names do a good job of email, but you pay for every single user, every month, and when something goes wrong you’re on your own. With me, it’s one price and one person.
            </p>
            <figure className="flex items-center gap-4">
              <img src="/michael.png" alt="Mike, founder of Just Blame Mike" className="w-16 h-16 rounded-full object-cover" style={{ objectPosition: 'center 22%' }} />
              <figcaption>
                <span className="block text-white font-bold">You’ll be talking to me.</span>
                <span className="block text-sm text-[#8a7a6a]">No account managers, no call centre. Just Mike.</span>
              </figcaption>
            </figure>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl overflow-hidden border border-brand-orange/[0.12] bg-brand-warm/60">
              <div className="grid grid-cols-[1.4fr_0.8fr_0.9fr] text-xs font-black uppercase tracking-wider">
                <span className="p-4" />
                <span className="p-4 text-center text-brand-orange bg-brand-orange/[0.08]">Just Blame Mike</span>
                <span className="p-4 text-center text-[#8a7a6a]">Big-name email</span>
              </div>
              {COMPARE.map(([row, us, them, themOn]) => (
                <div key={row} className="grid grid-cols-[1.4fr_0.8fr_0.9fr] items-center border-t border-brand-orange/[0.08]">
                  <span className="p-4 text-sm text-white font-semibold">{row}</span>
                  <span className="p-4 flex justify-center bg-brand-orange/[0.08] h-full items-center"><Check on={us} /></span>
                  <span className="p-4 flex flex-col items-center gap-1 text-center"><Check on={themOn} /><span className="text-[11px] text-[#6a5a4a] leading-tight hidden sm:block">{them}</span></span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Quote />

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

      <CTA />
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';
import { SectionLabel, CTA } from '../../components/UI';
import { WHATSAPP_URL, WhatsAppIcon } from '../../components/WhatsApp';
import { FAQS } from './faqs';

// Prices are per user, per month, and storage is per user. Edit these to change the pricing table.
const PLANS = [
  {
    name: 'Cloud Drive',
    price: 8,
    storage: '50 GB',
    blurb: 'Your files on every device, set up properly.',
    features: [
      'Shows up on your PC like a normal drive',
      'Synced to your PC, laptop and phone',
      'Open your files from anywhere',
      'Set up for you over a remote session',
      'Email support, reply next working day',
    ],
  },
  {
    name: 'Cloud + Support',
    price: 20,
    storage: '100 GB',
    popular: true,
    blurb: 'The drive, plus someone to call when things break.',
    features: [
      'Everything in Cloud Drive',
      'Your old files moved over for you',
      'Remote help with everyday IT problems',
      'Backups checked every month',
      'Same-day reply by phone, text or WhatsApp',
    ],
  },
  {
    name: 'Complete IT',
    price: 35,
    storage: '500 GB',
    blurb: 'Your whole IT setup, looked after.',
    features: [
      'Everything in Cloud + Support',
      'Priority reply within 2 working hours',
      'New starters and new devices set up',
      'A quarterly IT health check',
      'Discounted on-site visits in Greater Manchester',
    ],
  },
];
const ONE_OFF_FIX = 45;
const MAX_USERS = 25;

const STEPS = [
  { n: '01', title: 'Shows up as a drive', desc: 'A Cloud Drive (Z:) appears next to your C: drive. Save, open and drag files exactly like you do now. No new app to learn.' },
  { n: '02', title: 'Stored in the cloud', desc: 'Your files live off-site, so a stolen laptop or a dead hard drive doesn’t take your business down with it.' },
  { n: '03', title: 'Synced everywhere', desc: 'Save it on the office PC and it’s on your laptop and phone too. Everyone works from the latest version.' },
  { n: '04', title: 'Open it anywhere', desc: 'In the office, at home or on holiday. If you can get online, you can get to your files.' },
];

const COMPARE = [
  ['Works like a normal drive on your PC', true, 'Usually an app or website', false],
  ['Set up for you', true, 'You do it yourself', false],
  ['Your old files moved over for you', true, 'You do it yourself', false],
  ['A named person to call', true, 'Help centre or chatbot', false],
  ['Help with everyday IT problems', true, 'Storage only', false],
  ['Based in Manchester', true, 'Varies', false],
];

const PROBLEMS = ['Email not syncing', 'Slow laptops', 'Printers and Wi-Fi', 'New starter setup', 'Passwords and two-step login', '“I think I clicked a dodgy link”', 'Lost or deleted files', 'Moving to a new computer'];

// '500 GB' x 5 people -> '2.5 TB'
const storageTotal = (per, n) => { const gb = parseFloat(per) * (/TB/.test(per) ? 1000 : 1) * n; return gb >= 1000 ? `${+(gb / 1000).toFixed(2)} TB` : `${gb} GB`; };
const gbp = (n) => `£${n.toLocaleString('en-GB', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })}`;

function Check({ on }) {
  return on
    ? <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-brand-dark text-xs font-black" aria-label="Yes">✓</span>
    : <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-[#5a4a3a] text-[#6a5a4a] text-xs font-black" aria-label="No">✕</span>;
}

function Pricing() {
  const [users, setUsers] = useState(5);
  return (
    <section className="bg-brand-dark" id="pricing" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 max-w-2xl leading-tight">
            Simple monthly pricing. <span className="text-brand-orange">No surprises.</span>
          </h2>
          <p className="text-lg text-[#a89882] max-w-2xl mb-10">
            You’re not just paying for storage. You’re paying for someone who picks up the phone, knows your setup and fixes it.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="max-w-xl mb-12 p-6 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
            <label htmlFor="team-size" className="flex items-baseline justify-between mb-4">
              <span className="text-white font-bold">How many people in your team?</span>
              <span className="text-brand-orange text-2xl font-black tabular-nums">{users}{users === MAX_USERS ? '+' : ''}</span>
            </label>
            <input id="team-size" type="range" min="1" max={MAX_USERS} value={users} onChange={(e) => setUsers(+e.target.value)}
              className="w-full accent-[#f48c25] cursor-pointer" aria-valuetext={`${users} people`} />
            <p className="text-xs text-[#6a5a4a] mt-3">Drag to see your monthly total. Bigger team? <Link href="/contact#book" className="underline underline-offset-2 hover:text-brand-orange">Get in touch</Link> for a quote.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <div className={`relative h-full flex flex-col p-8 rounded-3xl border ${p.popular ? 'bg-brand-orange/[0.07] border-brand-orange/60' : 'bg-brand-orange/[0.03] border-brand-orange/[0.08]'}`}>
                {p.popular && <span className="absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-brand-orange text-brand-dark">Most popular</span>}
                <h3 className="text-white text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-sm text-[#8a7a6a] mb-6">{p.blurb}</p>
                <p className="mb-1"><span className="text-sm font-bold text-[#a89882] mr-1">From</span><span className="text-5xl font-black text-white">{gbp(p.price)}</span> <span className="text-sm text-[#a89882]">per person / month</span></p>
                <p className="text-sm text-brand-orange font-bold mb-6 tabular-nums">From {gbp(p.price * users)} a month for {users} {users === 1 ? 'person' : 'people'}</p>
                <div className="flex items-center gap-3 mb-8 px-4 py-3 rounded-xl bg-brand-dark/60 border border-brand-orange/[0.12]">
                  <span className="text-2xl font-black text-white">{p.storage}</span>
                  <span className="text-xs text-[#a89882] leading-tight">storage per person<br />{users > 1 ? <span className="text-white font-bold">{storageTotal(p.storage, users)} for your team</span> : 'more can be added'}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-[#b0a090]"><span className="text-brand-orange shrink-0">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/contact#book" className={`block text-center px-6 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${p.popular ? 'bg-brand-orange text-brand-dark' : 'border-2 border-brand-orange text-brand-orange'}`}>
                  Book a free call
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-6 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
            <div>
              <h3 className="text-white font-bold mb-1">Just need something fixed?</h3>
              <p className="text-sm text-[#8a7a6a]">One-off remote fix, fixed price, no plan needed: <span className="text-white font-bold">{gbp(ONE_OFF_FIX)}</span> per issue.</p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white shrink-0" style={{ background: '#1fa855' }}>
              <WhatsAppIcon size={20} /> Message me about it
            </a>
          </div>
          <p className="text-xs text-[#6a5a4a] mt-4">Monthly rolling, cancel with 30 days’ notice. Prices and storage are per person, per month. Need more space? Extra storage can be added any time.</p>
        </FadeIn>
      </div>
    </section>
  );
}

export default function CloudDriveContent() {
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
                <span className="text-brand-orange">Cloud Drive & IT Support</span>
              </nav>
              <SectionLabel>New: Cloud Drive & IT Support</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6">
                Your files on every device.<br /><span className="text-brand-orange">One person to call.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg max-w-xl leading-relaxed text-[#a89882] mb-8">
                A secure Cloud Drive that works just like the hard drive you already use, synced to your PC, laptop and phone. Set up, looked after and supported by me, not a chatbot.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pricing" className="px-8 py-4 rounded-xl font-bold text-center transition-all hover:scale-105 active:scale-95 bg-brand-orange text-brand-dark">See pricing</a>
                <Link href="/contact#book" className="px-8 py-4 rounded-xl font-bold text-center transition-all hover:scale-105 active:scale-95 border-2 border-brand-orange text-brand-orange">Book a free call</Link>
              </div>
              <p className="text-sm text-[#8a7a6a] mt-5">From <span className="text-white font-bold">{gbp(PLANS[0].price)}</span> per person a month, with <span className="text-white font-bold">{PLANS[0].storage}</span> of storage each.</p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <video src="/videos/cloud-drive.mp4" poster="/videos/cloud-drive.jpg" controls playsInline preload="none"
              className="w-full max-w-md mx-auto block rounded-3xl bg-black border border-brand-orange/[0.12] shadow-2xl" style={{ aspectRatio: '4/5' }}
              aria-label="How Just Blame Mike Cloud Drive works" />
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-14 max-w-2xl leading-tight">
              Works like a hard drive. <span className="text-brand-orange">Lives in the cloud.</span>
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

      {/* Person, not a product */}
      <section className="bg-brand-warm">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <FadeIn>
            <SectionLabel>Why it’s different</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              You’re paying for a person, <span className="text-brand-orange">not just a product.</span>
            </h2>
            <p className="text-[#a89882] mb-8">
              Plenty of companies sell storage. Very few will set it up, move your files over, and answer the phone when the printer stops talking to the laptop.
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
            <div className="rounded-3xl overflow-hidden border border-brand-orange/[0.12] bg-brand-dark/60">
              <div className="grid grid-cols-[1.4fr_0.8fr_0.9fr] text-xs font-black uppercase tracking-wider">
                <span className="p-4 text-[#6a5a4a]" />
                <span className="p-4 text-center text-brand-orange bg-brand-orange/[0.08]">Just Blame Mike</span>
                <span className="p-4 text-center text-[#8a7a6a]">Storage on its own</span>
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

      {/* Everyday IT help */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <SectionLabel>Everyday IT help</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 max-w-2xl leading-tight">
              Something else playing up? <span className="text-brand-orange">Just blame Mike.</span>
            </h2>
            <p className="text-lg text-[#a89882] max-w-2xl mb-10">On the support plans, I’ll help with the everyday stuff that eats into your day, usually over a quick remote session.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className="flex flex-wrap gap-3">
              {PROBLEMS.map((p) => (
                <li key={p} className="px-5 py-3 rounded-full text-sm font-bold bg-brand-orange/[0.06] border border-brand-orange/[0.15] text-white">{p}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <Pricing />

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

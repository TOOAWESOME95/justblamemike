'use client';
import { useEffect, useState } from 'react';
import FadeIn from './FadeIn';
import { SectionLabel } from './UI';
import { WHATSAPP_URL } from './WhatsApp';

// Weekly call slots Mike offers (0 = Sunday … 6 = Saturday). Edit these to change availability.
const WEEKLY_SLOTS = {
  2: ['10:00', '11:30', '14:00'],   // Tuesday
  4: ['10:00', '11:30', '14:00'],   // Thursday
};
const DAYS_AHEAD = 14;              // how far ahead people can book
const MIN_NOTICE_HOURS = 24;        // no same-day surprises
const FORMSPREE = 'https://formspree.io/f/mrejgonp';

const fmtDay = (d) => d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
const fmtLong = (d) => d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
const fmtTime = (t) => { const [h, m] = t.split(':').map(Number); return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')}${h < 12 ? 'am' : 'pm'}`; };

function upcomingDays() {
  const now = new Date(), days = [];
  for (let i = 0; i <= DAYS_AHEAD; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    const times = (WEEKLY_SLOTS[d.getDay()] || []).filter((t) => {
      const [h, m] = t.split(':').map(Number);
      const at = new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m);
      return at - now >= MIN_NOTICE_HOURS * 3600e3;
    });
    if (times.length) days.push({ date: d, times });
  }
  return days;
}

export default function BookingPicker() {
  // dates are worked out in the visitor's browser, not at build time, so they stay current
  const [days, setDays] = useState(null);
  useEffect(() => { setDays(upcomingDays()); }, []);
  const [dayIdx, setDayIdx] = useState(0);
  const [time, setTime] = useState(null);
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const day = days?.[dayIdx];

  async function submit(e) {
    e.preventDefault();
    if (!day || !time) return;
    const form = new FormData(e.currentTarget);
    const slot = `${fmtLong(day.date)} at ${fmtTime(time)}`;
    form.append('requested_call', slot);
    form.append('_subject', `Call request: ${slot}`);
    setState('sending');
    try {
      const r = await fetch(FORMSPREE, { method: 'POST', body: form, headers: { Accept: 'application/json' } });
      if (!r.ok) throw new Error(String(r.status));
      setState('sent');
      if (window.dataLayer) window.dataLayer.push({ event: 'call_request_submit' });
    } catch {
      setState('error');
    }
  }

  const chip = (active) => `px-4 py-3 rounded-xl text-sm font-bold border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-orange ${
    active ? 'bg-brand-orange text-brand-dark border-brand-orange' : 'bg-brand-dark text-white border-brand-orange/[0.15] hover:border-brand-orange/60'}`;
  const input = 'w-full rounded-xl px-4 py-4 text-sm bg-brand-dark border border-brand-orange/[0.15] text-white placeholder:text-[#6a5a4a]';

  return (
    <section className="bg-brand-warm" id="book">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <FadeIn>
          <SectionLabel>Book a call</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 max-w-2xl leading-tight">
            Rather talk it through?
          </h2>
          <p className="text-lg text-[#a89882] max-w-xl mb-4">
            Pick a time for a free 15-minute call. I only take a few of these each week, so I can give every one proper attention.
          </p>
          <p className="text-sm text-[#a89882] mb-12">
            None of these times work?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-[#3fd27f] underline underline-offset-4">Message me on WhatsApp</a>
            {' '}and we&apos;ll sort one out.
          </p>
        </FadeIn>

        {state === 'sent' ? (
          <div className="p-8 md:p-12 rounded-3xl bg-brand-orange/[0.06] border border-brand-orange/30 max-w-2xl" role="status">
            <h3 className="text-white text-2xl font-bold mb-2">Request sent</h3>
            <p className="text-[#a89882]">You asked for {fmtLong(day.date)} at {fmtTime(time)}. I&apos;ll email you to confirm the call and send the details.</p>
          </div>
        ) : (
          <FadeIn>
            <form onSubmit={submit} className="grid lg:grid-cols-2 gap-10 p-8 md:p-12 rounded-3xl bg-brand-dark/60 border border-brand-orange/[0.08]">
              <div>
                <h3 className="text-white font-bold mb-4">1. Choose a day</h3>
                {days === null ? (
                  <div className="h-12 mb-8" aria-hidden="true" />
                ) : days.length ? (
                  <div className="flex flex-wrap gap-3 mb-8" role="radiogroup" aria-label="Day">
                    {days.map((d, i) => (
                      <button type="button" key={d.date.toISOString()} role="radio" aria-checked={i === dayIdx}
                        onClick={() => { setDayIdx(i); setTime(null); }} className={chip(i === dayIdx)}>
                        {fmtDay(d.date)}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#a89882] mb-8">No call slots in the next two weeks. Send a message instead and I&apos;ll find a time.</p>
                )}
                {day && (
                  <>
                    <h3 className="text-white font-bold mb-4">2. Choose a time</h3>
                    <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Time">
                      {day.times.map((t) => (
                        <button type="button" key={t} role="radio" aria-checked={t === time} onClick={() => setTime(t)} className={chip(t === time)}>
                          {fmtTime(t)}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-[#6a5a4a] mt-4">All times are UK time.</p>
                  </>
                )}
              </div>

              <div className="space-y-5">
                <h3 className="text-white font-bold">3. Your details</h3>
                <input name="name" required placeholder="Your name" className={input} aria-label="Your name" />
                <input name="email" type="email" required placeholder="Email address" className={input} aria-label="Email address" />
                <input name="phone" type="tel" placeholder="Phone number (optional)" className={input} aria-label="Phone number" />
                <textarea name="message" rows={3} placeholder="What does your business do, and what would you like help with?" className={`${input} resize-none`} aria-label="About your business" />
                <button type="submit" disabled={!time || state === 'sending'}
                  className="w-full py-5 rounded-xl font-bold text-base bg-brand-orange text-brand-dark transition-opacity disabled:opacity-40 disabled:cursor-not-allowed">
                  {state === 'sending' ? 'Sending…' : time ? `Request ${fmtDay(day.date)}, ${fmtTime(time)}` : 'Pick a day and time first'}
                </button>
                {state === 'error' && <p className="text-sm text-red-400" role="alert">That didn&apos;t send. Check your connection and try again, or email mike@justblamemike.com.</p>}
                <p className="text-xs text-[#6a5a4a]">I&apos;ll confirm by email. No obligation, no hard sell.</p>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

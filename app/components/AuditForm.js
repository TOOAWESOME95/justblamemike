'use client';

import { useState } from 'react';

export default function AuditForm({ service = 'General' }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-brand-orange/[0.03] border border-brand-orange/[0.08] text-center">
        <span className="text-5xl block mb-4">🎉</span>
        <h3 className="text-white text-2xl font-bold mb-3">Nice one!</h3>
        <p className="text-[#a89882]">Mike&apos;s on it. You&apos;ll hear from us within 2 hours (he literally never sleeps).</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Push to dataLayer for GTM
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'audit_form_submit', form_type: service });
    }

    try {
      await fetch('https://formspree.io/f/mvzloveg', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    }
  };

  return (
    <div className="p-8 md:p-12 rounded-3xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
      <h3 className="text-white text-2xl font-bold mb-2">Get Your Free {service} Audit</h3>
      <p className="text-sm text-[#8a7a6a] mb-8">No obligation. No jargon. Just a clear breakdown of what&apos;s working, what&apos;s not, and what Mike would do differently.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white ml-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Doe"
              className="w-full rounded-xl px-4 py-4 text-sm bg-brand-dark border border-brand-orange/[0.15] text-white placeholder:text-[#6a5a4a]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white ml-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="jane@company.com"
              className="w-full rounded-xl px-4 py-4 text-sm bg-brand-dark border border-brand-orange/[0.15] text-white placeholder:text-[#6a5a4a]"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white ml-1">Website URL</label>
          <input
            type="url"
            name="website"
            placeholder="https://yoursite.com"
            className="w-full rounded-xl px-4 py-4 text-sm bg-brand-dark border border-brand-orange/[0.15] text-white placeholder:text-[#6a5a4a]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-white ml-1">What&apos;s your biggest challenge right now?</label>
          <textarea
            name="challenge"
            placeholder="e.g. High CPA, low traffic, outdated website..."
            rows={4}
            className="w-full rounded-xl px-4 py-4 text-sm bg-brand-dark border border-brand-orange/[0.15] text-white placeholder:text-[#6a5a4a] resize-none"
          />
        </div>
        <input type="hidden" name="service" value={service} />
        <button
          type="submit"
          className="w-full py-5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] bg-brand-orange text-brand-dark"
        >
          Request Free Audit <span>→</span>
        </button>
        <p className="text-center text-xs text-[#6a5a4a]">
          Takes 2 minutes. Mike responds within 2 hours.
        </p>
      </form>
    </div>
  );
}

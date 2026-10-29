'use client';

import FadeIn from '../components/FadeIn';
import { SectionLabel, PlaceholderImg } from '../components/UI';
import Schema, { localBusinessSchema } from '../components/Schema';
import BookingPicker from '../components/BookingPicker';
import { WHATSAPP_URL, WhatsAppIcon } from '../components/WhatsApp';

export default function ContactPage() {
  return (
    <>
      <Schema data={localBusinessSchema()} />
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-8 bg-brand-dark">
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn><SectionLabel>Contact Us</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">
              Blame Mike for<br />your <span className="text-brand-orange">growth.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882]">
              Ready to scale? We&apos;re the scapegoats for your success. Drop us a line and let&apos;s start winning.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div className="space-y-8">
              <FadeIn>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: '📧', title: 'Email us', info: 'mike@justblamemike.com' },
                    { icon: '📍', title: 'Location', info: 'Manchester, UK' },
                  ].map((c) => (
                    <div key={c.title} className="p-6 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                      <span className="text-2xl block mb-3">{c.icon}</span>
                      <h4 className="text-white font-bold mb-1">{c.title}</h4>
                      <p className="text-sm text-[#8a7a6a]">{c.info}</p>
                    </div>
                  ))}
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-4 p-6 rounded-2xl border transition-colors hover:border-[#1fa855] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1fa855]"
                  style={{ background: 'rgba(31,168,85,0.08)', borderColor: 'rgba(31,168,85,0.3)' }}>
                  <span className="flex items-center justify-center w-12 h-12 rounded-full text-white shrink-0" style={{ background: '#1fa855' }}><WhatsAppIcon size={26} /></span>
                  <span>
                    <span className="block text-white font-bold">Message me on WhatsApp</span>
                    <span className="block text-sm text-[#8a7a6a]">Quickest way to reach me. 07570 978359</span>
                  </span>
                </a>
              </FadeIn>

              <FadeIn delay={0.05}>
                <div className="p-6 rounded-2xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <span className="text-2xl block mb-3">⏰</span>
                  <h4 className="text-white font-bold mb-1">Response time</h4>
                  <p className="text-sm text-[#8a7a6a]">Typically within 2 hours. Mike never sleeps.</p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <figure className="rounded-2xl overflow-hidden bg-brand-orange/[0.03] border border-brand-orange/[0.08] grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] items-center">
                  <img src="/michael.png" alt="Michael, founder of Just Blame Mike" className="w-full h-full object-cover" style={{ aspectRatio: '4/5', objectPosition: 'center 22%' }} />
                  <figcaption className="p-5 sm:p-6">
                    <p className="text-white font-bold mb-1">You&apos;ll be talking to me.</p>
                    <p className="text-sm text-[#8a7a6a]">No account managers, no call centre. Just Mike.</p>
                  </figcaption>
                </figure>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-2xl p-8 relative overflow-hidden bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f48c25 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                  <p className="relative z-10 text-center italic font-medium text-brand-orange/50">
                    &ldquo;It&apos;s not your fault you&apos;re succeeding too fast. Just blame Mike.&rdquo;
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Form */}
            <FadeIn delay={0.1}>
              <div className="p-8 md:p-12 rounded-3xl bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                <h3 className="text-white text-2xl font-bold mb-8">Send us a message</h3>
                <form action="https://formspree.io/f/mrejgonp" method="POST" className="space-y-6" onSubmit={() => { if (window.dataLayer) { window.dataLayer.push({ event: 'contact_form_submit' }); } }}>
                  <div className="grid md:grid-cols-2 gap-6">
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
                    <label className="text-sm font-semibold text-white ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="07xxx xxxxxx"
                      className="w-full rounded-xl px-4 py-4 text-sm bg-brand-dark border border-brand-orange/[0.15] text-white placeholder:text-[#6a5a4a]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white ml-1">Service Needed</label>
                    <select name="service" className="w-full rounded-xl px-4 py-4 text-sm bg-brand-dark border border-brand-orange/[0.15] text-[#a89882]">
                      <option>Google Ads Management</option>
                      <option>Meta / Social Ads</option>
                      <option>Website Design & Build</option>
                      <option>SEO Strategy</option>
                      <option>Email Marketing</option>
                      <option>Full Growth Package</option>
                      <option>Something else</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white ml-1">Tell us about your goals</label>
                    <textarea
                      name="message"
                      required
                      placeholder="What's not working? Where do you want to be? How can Mike help?"
                      rows={5}
                      className="w-full rounded-xl px-4 py-4 text-sm bg-brand-dark border border-brand-orange/[0.15] text-white placeholder:text-[#6a5a4a] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] bg-brand-orange text-brand-dark"
                  >
                    Send Message <span>→</span>
                  </button>

                  <p className="text-center text-xs text-[#6a5a4a]">
                    Typically responds within 2 hours. No spam, ever.
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Book a call */}
      <BookingPicker />
    </>
  );
}

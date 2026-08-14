'use client';

import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import { SectionLabel, PlaceholderImg, CTA } from '../components/UI';

function TimelineItem({ year, title, description, side = 'left', icon }) {
  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center mb-16 group">
      {side === 'left' ? (
        <>
          <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1 mt-4 md:mt-0 pl-14 md:pl-0">
            <h3 className="text-2xl font-black text-brand-orange">{year}: {title}</h3>
            <p className="text-[#8a7a6a] mt-2">{description}</p>
          </div>
          <div className="absolute md:relative left-4 md:left-0 z-10 w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center order-1 md:order-2 text-lg">
            {icon}
          </div>
          <div className="md:w-1/2 md:pl-12 order-3" />
        </>
      ) : (
        <>
          <div className="md:w-1/2 order-3 md:order-1" />
          <div className="absolute md:relative left-4 md:left-0 z-10 w-8 h-8 rounded-full bg-brand-dark border-2 border-brand-orange flex items-center justify-center order-1 md:order-2 text-lg">
            {icon}
          </div>
          <div className="md:w-1/2 md:pl-12 order-2 md:order-3 mt-4 md:mt-0 pl-14 md:pl-12">
            <h3 className="text-2xl font-black text-brand-orange">{year}: {title}</h3>
            <p className="text-[#8a7a6a] mt-2">{description}</p>
          </div>
        </>
      )}
    </div>
  );
}

function TeamMember({ name, role, placeholder, image, position = 'top' }) {
  return (
    <FadeIn>
      <div className="group">
        {image ? (
          <div className="overflow-hidden rounded-2xl mb-4 relative" style={{ aspectRatio: '4/5', border: '1px solid rgba(244,140,37,0.12)' }}>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-all duration-500"
              style={{ objectPosition: position }}
            />
            <div className="absolute inset-0 border-4 border-brand-orange opacity-0 group-hover:opacity-100 transition-opacity m-3 rounded-xl pointer-events-none" />
          </div>
        ) : (
          <PlaceholderImg label={placeholder} aspect="4/5" className="mb-4" />
        )}
        <h3 className="text-xl font-black text-white">{name}</h3>
        <p className="text-brand-orange font-bold text-xs uppercase tracking-widest">{role}</p>
      </div>
    </FadeIn>
  );
}

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20 bg-brand-dark">
        <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.08) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn><SectionLabel>About Us</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-4xl">
              We build empires.<br /><span className="text-brand-orange">Mike takes the fall.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 mt-10">
              <p className="text-2xl font-bold text-white leading-tight">
                We&apos;re the growth partner for brands that are tired of &ldquo;playing it safe.&rdquo;
              </p>
              <p className="text-[#a89882] text-lg leading-relaxed">
                Born from a solo freelance hustle, Just Blame Mike has evolved into a full-scale digital growth unit. We don&apos;t just run ads or build sites. we engineer market dominance. And if things get too aggressive? You know who to blame.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <FadeIn>
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '21/9', border: '1px solid rgba(244,140,37,0.12)' }}>
              <img src="/banner-team.png" alt="The Just Blame Mike team" className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)', borderBottom: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <span className="w-12 h-0.5 bg-brand-orange" />
              <h2 className="text-3xl font-black text-white tracking-tight">The Timeline of Blame</h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-orange/20 hidden md:block" style={{ transform: 'translateX(-50%)' }} />

            <FadeIn>
              <TimelineItem
                year="2018"
                title="THE SPARK"
                description="Started as a solo PPC freelancer, obsessed with conversion rates and late-night data. The foundation of everything we do today."
                side="left"
                icon="⚡"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <TimelineItem
                year="2020"
                title="THE PIVOT"
                description="Expanded into high-performance web development. We realised ads only work if the destination is built to convert."
                side="right"
                icon="🖥️"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <TimelineItem
                year="2022"
                title="SCALING UP"
                description="Grew the team from a one-man operation to a squad of specialists who refuse to settle for average results."
                side="left"
                icon="🏢"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <TimelineItem
                year="2024"
                title="THE FULL STACK"
                description="Added SEO, email marketing, and AI-integrated strategies. Now offering the complete growth engine. PPC, web, SEO, and email under one roof."
                side="right"
                icon="🚀"
              />
            </FadeIn>
            <FadeIn delay={0.4}>
              <TimelineItem
                year="2025+"
                title="THE FUTURE"
                description="Focusing on ROI-driven digital growth through smarter automation and aggressive market penetration. We're just getting started."
                side="left"
                icon="🔮"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Mike Philosophy */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="text-5xl font-black text-white tracking-tighter leading-none mb-10">
                  The Mike<br /><span className="text-brand-orange">Philosophy</span>
                </h2>
                <div className="space-y-8">
                  {[
                    { num: '01', title: 'Outcome Over Activity', desc: "We don't bill for hours. We bill for impact. If it doesn't move the needle, we don't do it." },
                    { num: '02', title: 'Radical Accountability', desc: "When things go right, you take the credit. When you need a scapegoat for your aggressive expansion? Just Blame Mike." },
                    { num: '03', title: 'Data Is Dispassionate', desc: "We don't follow trends. We follow tracking pixels. If the numbers say pivot, we pivot instantly." },
                    { num: '04', title: 'No Contracts, No Hostages', desc: "We earn your business monthly. If we're not delivering, you walk. That pressure keeps us sharp." },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4">
                      <span className="text-brand-orange font-black text-xl italic">{item.num}.</span>
                      <div>
                        <h4 className="font-bold text-white text-xl mb-1">{item.title}</h4>
                        <p className="text-[#8a7a6a]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl relative overflow-hidden bg-brand-orange/[0.05] border border-brand-orange/[0.12] aspect-square flex items-center justify-center">
                <p className="text-8xl font-black text-brand-orange/[0.08] select-none text-center leading-none">NO<br />EXCUSES</p>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="p-6 rounded-xl bg-brand-dark/80 backdrop-blur-md" style={{ borderLeft: '4px solid #f48c25' }}>
                    <p className="italic text-white text-lg leading-relaxed">&ldquo;The market doesn&apos;t care about your feelings. It only cares about who&apos;s shouting the loudest with the best product.&rdquo;</p>
                    <p className="font-black text-brand-orange mt-3 uppercase tracking-widest text-sm">— Mike</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meet the Scapegoats */}
      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                Meet the <span className="text-brand-orange">Scapegoats</span>
              </h2>
              <p className="text-[#6a5a4a] uppercase tracking-widest font-bold text-sm">The specialists behind the chaos</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name='Michael "The Original Mike"'
              role="Founder / Strategy & PPC"
              image="/michael.png"
              position="center"
            />
            <TeamMember
              name="Jake"
              role="Copywriter & Content Creator"
              image="/jake.png"
              position="center"
            />
            <TeamMember
              name="Alex"
              role="Creative Director & Videography"
              image="/alex.png"
              position="top"
            />
          </div>
          <FadeIn>
            <p className="text-center text-[#6a5a4a] text-sm mt-12 max-w-lg mx-auto">
              We&apos;re a small team by design. No account managers, no middlemen. When you work with us, you work with us. Directly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                ['£2.1M+', 'Ad Spend Managed'],
                ['340%', 'Avg. ROAS Increase'],
                ['28+', 'Websites Launched'],
                ['96%', 'Client Retention'],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="text-3xl md:text-4xl font-black text-brand-orange">{n}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider mt-1 text-[#6a5a4a]">{l}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA />
    </>
  );
}

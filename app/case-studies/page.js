'use client';

import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import { SectionLabel, PlaceholderImg, CTA } from '../components/UI';

const CASE_STUDIES = [
  {
    client: 'YorkRoast',
    tag: 'Social Media · Viral Marketing',
    headline: 'From a wrap to 2.7 million views.',
    image: '/york-roast.jpg',
    challenge: "YorkRoast had a belting product. a ginormous roast dinner Yorkshire pudding wrap. but no one outside York knew about it. They needed eyeballs, and fast.",
    actions: [
      'Managed their social media platforms with a content strategy built around the iconic Yorkie Wrap',
      'Shot the now-viral video of Kate tackling the massive wrap. designed to stop thumbs scrolling',
      'Ran targeted social ads alongside the organic content to amplify reach across Facebook and Instagram',
      'The video hit 2.7 million views across Facebook and LadBible, going properly viral nationwide',
    ],
    metrics: [['2.7M+', 'Views'], ['Viral', 'LadBible Feature'], ['📈', 'Brand Awareness']],
  },
  {
    client: 'YorkRoast',
    tag: 'Influencer Marketing',
    headline: 'Turning viral momentum into an influencer machine.',
    image: '/kate-ovens.jpg',
    imagePosition: 'top',
    challenge: "After the viral wrap video, YorkRoast needed to keep the momentum going. One-hit wonders don't build brands. consistent influencer partnerships do.",
    actions: [
      'Built an influencer marketing strategy to sustain the viral buzz long-term',
      'Identified and partnered with food influencers and local content creators',
      'Coordinated influencer visits and content creation around key menu items',
      'Created a repeatable framework for ongoing influencer collaborations that kept the brand in feeds',
    ],
    metrics: [['🤝', 'Influencer Partnerships'], ['📱', 'Ongoing Content'], ['🔥', 'Sustained Buzz']],
  },
  {
    client: 'Nutripouch',
    tag: 'Amazon Ads · Google Shopping · Meta Ads',
    headline: '450% ROAS without increasing spend. Blame Mike.',
    image: '/nutripouch.jpg',
    challenge: "Nutripouch needed to increase sales across Amazon, Google Shopping, and Meta. but the budget wasn't moving. Every penny had to work harder, not just harder but smarter.",
    actions: [
      'Set up and managed Amazon Ads campaigns optimised for product visibility and Buy Box positioning',
      'Built Google Shopping campaigns using custom rules and margin-based bidding strategies',
      'Ran Meta Ads campaigns alongside Shopping to drive brand awareness and direct-to-consumer sales',
      'Continuously optimised across all three platforms, squeezing maximum ROAS from the existing budget',
    ],
    metrics: [['450%+', 'ROAS'], ['📈', 'Sales Increased'], ['£0', 'Extra Spend']],
  },
  {
    client: 'Gear4Music',
    tag: 'Google Ads · Google Shopping',
    headline: 'Month-on-month growth in a market that never sits still.',
    image: '/gear4music.jpg',
    imagePosition: 'top',
    challenge: "Gear4Music needed consistent month-over-month sales growth through Google Ads. The music equipment market is fiercely competitive. strategies that worked one month would flatline the next.",
    actions: [
      'Managed Google Ads with a heavy focus on Shopping campaigns and product feed optimisation',
      'Implemented advanced Shopping rules, priority bidding tiers, and custom label segmentation',
      'Constantly adapted strategies. Testing new campaign structures, audiences, and bid strategies monthly',
      'Delivered consistent month-on-month revenue increases through relentless optimisation and testing',
    ],
    metrics: [['📈', 'Month-on-Month Growth'], ['12+', 'Strategy Iterations'], ['🎸', 'Music E-commerce']],
  },
  {
    client: 'Red Rose / White Rose / North Wales Copiers',
    tag: 'Web Design · Custom PHP · Lead Generation',
    headline: 'From 15 leads to 60. Custom code, custom results.',
    image: '/copiers.png',
    challenge: "Three copier companies under one group needed their websites completely rebuilt. Off-the-shelf solutions couldn't deliver the features they needed. Bespoke quote builders, product configurators, and intelligent lead routing that simply don't exist in templates. Their current sites were generating barely 10-15 leads a month.",
    actions: [
      'Fully rebuilt all three websites from scratch using custom PHP . No WordPress, no templates',
      'Developed bespoke features not available in any off-the-shelf solution including instant quote calculators',
      'Designed for conversion with clear CTAs, streamlined user journeys, and integrated lead tracking',
      'Implemented source attribution so they know exactly where every lead comes from',
    ],
    metrics: [['10→60', 'Leads Per Month'], ['3', 'Sites Rebuilt'], ['Custom', 'PHP Build']],
  },
  {
    client: 'Cancer Got Talent',
    tag: 'Website · Videography · Charity',
    headline: '£7,000+ raised. Building something that matters.',
    image: '/cancer-got-talent.jpg',
    challenge: "Cancer Got Talent needed a website and professional videography to support their fundraising event. This wasn't about ROI. it was about creating something meaningful that could raise real money for patients facing cancer treatment.",
    actions: [
      'Designed and built the Cancer Got Talent website from scratch to support ticket sales and donations',
      'Produced professional videography capturing the spirit and energy of the event',
      'Created content that helped promote the cause across social media channels',
      'The event raised over £7,000 for equipment and ongoing treatment for cancer patients',
    ],
    metrics: [['£7K+', 'Raised'], ['🎬', 'Video Production'], ['❤️', 'For a Cause']],
    videoLink: 'https://www.youtube.com/watch?v=7dzvhUU9jxw&t=8s',
  },
  {
    client: 'Barton Drilling',
    tag: 'Web Design · First Ever Build',
    headline: "Mike's first website. Built at 16.",
    image: '/barton-drilling.png',
    challenge: "Every story starts somewhere. Barton Drilling was Mike's very first website client. built when he was just 16 years old. No agency experience, no mentor, just a lad who figured it out.",
    actions: [
      'Designed and built a complete business website for a specialist drilling company at 16 years old',
      'Learned on the job. no agency background, just raw determination and late nights',
      'Delivered a fully working site for a real business with real customers',
      "Proved that age doesn't matter when you can deliver results. And sparked everything that came after",
    ],
    metrics: [['16', 'Years Old'], ['1st', 'Website Ever'], ['⚡', 'Where It Started']],
  },
  {
    client: 'MLS Kitchens',
    tag: 'LinkedIn Automation · B2B Marketing',
    headline: '40 leads a month. On autopilot.',
    image: '/mls-kitchen.png',
    challenge: "MLS Kitchens needed more B2B sales and visibility but didn't have the time or team to manually prospect on LinkedIn all day. They needed a system that generated leads consistently without someone glued to a screen.",
    actions: [
      'Built LinkedIn automation marketing campaigns for consistent, hands-off outreach at scale',
      'Created personalised messaging sequences that felt human, not spammy . Driving real conversations',
      'Increased visibility within their target market through strategic connection building and content',
      'Delivered a consistent average of 40 qualified leads per month through automated-but-authentic touchpoints',
    ],
    metrics: [['40+', 'Leads Per Month'], ['🤖', 'Fully Automated'], ['📈', 'Consistent Pipeline']],
  },
];

const SIDE_PROJECTS = [
  {
    title: 'Project Celeste. Age of Empires Online Revival',
    desc: "Worked on server configuration and reverse engineering game files to bring Age of Empires Online back from the dead. When Microsoft shut the servers down, the community said no.",
    tag: 'Server Dev · Reverse Engineering',
    link: 'https://github.com/ProjectCeleste',
  },
  {
    title: 'Destination Home. PlayStation Home Revival',
    desc: "Worked with development teams to reverse engineer game files and build the base server code to bring PlayStation Home back online. Became one of the very first beta testers.",
    tag: 'Game Server Revival · Beta Tester',
    link: 'https://github.com/DestinationHome',
  },
  {
    title: 'Email Scanning Program',
    desc: 'Built a custom email scanning tool in Python for automated inbox processing and data extraction.',
    tag: 'Python · Custom Software',
  },
  {
    title: 'LinkedIn Contact Scraper',
    desc: 'Developed a scraper tool for extracting LinkedIn contacts for targeted outreach campaigns.',
    tag: 'Automation · Python',
  },
  {
    title: 'Mail Merge Campaigns',
    desc: 'Built a system for sending personalised mail merge campaigns via Word. old school but effective.',
    tag: 'Automation · Outreach',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 bg-brand-dark">
        <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,140,37,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn><SectionLabel>Case Studies</SectionLabel></FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-6 max-w-3xl">
              Real work.<br /><span className="text-brand-orange">Real blame.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg max-w-xl leading-relaxed text-[#a89882]">
              From viral wraps to game server revivals. here&apos;s what happens when you let Mike loose. Not every project is conventional. That&apos;s the point.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-dark" style={{ borderBottom: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[['2.7M+', 'Viral Video Views'], ['450%+', 'ROAS (Nutripouch)'], ['10→60', 'Leads/Month (Copiers)'], ['£7K+', 'Raised for Charity']].map(([n, l]) => (
                <div key={l} className="rounded-2xl p-6 text-center bg-brand-orange/[0.03] border border-brand-orange/[0.08]">
                  <p className="text-3xl font-black text-brand-orange">{n}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider mt-1 text-[#6a5a4a]">{l}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-10">
          {CASE_STUDIES.map((cs, idx) => {
            const flip = idx % 2 === 1;
            return (
              <FadeIn key={`${cs.client}-${idx}`}>
                <div className="rounded-3xl overflow-hidden bg-brand-orange/[0.02] border border-brand-orange/[0.07]">
                  <div className="grid md:grid-cols-2">
                    {/* Visual Side */}
                    <div
                      className={`p-10 md:p-14 flex flex-col justify-between min-h-[400px] ${flip ? 'md:order-2' : ''}`}
                      style={{ background: `linear-gradient(${flip ? '225deg' : '135deg'}, rgba(244,140,37,0.07) 0%, transparent 60%)` }}
                    >
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 bg-brand-orange/[0.12] text-brand-orange">
                          {cs.tag}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">{cs.client}</h3>
                        <p className="text-sm text-[#8a7a6a]">{cs.headline}</p>
                      </div>

                      {/* Real image */}
                      <div className="mt-6 rounded-2xl overflow-hidden border border-brand-orange/[0.12]" style={{ aspectRatio: '16/9' }}>
                        <img
                          src={cs.image}
                          alt={`${cs.client} project`}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: cs.imagePosition || 'center' }}
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-6">
                        {cs.metrics.map(([val, label]) => (
                          <div key={label} className="rounded-xl p-4 text-center bg-brand-dark/90 border border-brand-orange/[0.06]">
                            <p className="text-xl font-black text-brand-orange">{val}</p>
                            <p className="text-[10px] font-semibold uppercase text-[#6a5a4a]">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`p-10 md:p-14 flex flex-col justify-center ${flip ? 'md:order-1' : ''}`}>
                      <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                        <span className="text-brand-orange">💡</span> The Challenge
                      </h4>
                      <p className="text-sm leading-relaxed mb-8 text-[#8a7a6a]">{cs.challenge}</p>

                      <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                        <span className="text-brand-orange">🔧</span> What Mike Did
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {cs.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#8a7a6a]">
                            <span className="text-brand-orange mt-0.5">✓</span> {action}
                          </li>
                        ))}
                      </ul>

                      {cs.videoLink && (
                        <a
                          href={cs.videoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange mb-4 group"
                        >
                          🎬 Watch the video <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Side Projects & Tools */}
      <section className="bg-brand-dark" style={{ borderTop: '1px solid rgba(244,140,37,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-0.5 bg-brand-orange" />
              <h2 className="text-3xl font-black text-white tracking-tight">The Side Quests</h2>
            </div>
            <p className="text-[#6a5a4a] mb-12 max-w-xl">Not everything fits in a case study. Here&apos;s the other stuff Mike&apos;s built, broken, and fixed. From resurrecting dead games to building custom automation tools.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIDE_PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06}>
                <div className="p-7 rounded-2xl h-full bg-brand-orange/[0.03] border border-brand-orange/[0.08] flex flex-col">
                  <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-orange/[0.08] text-brand-orange mb-4 self-start">{p.tag}</span>
                  <h3 className="text-white text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7a6a] mb-4 flex-grow">{p.desc}</p>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-orange flex items-center gap-1 group">
                      View on GitHub <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <FadeIn>
            <h3 className="text-white text-2xl font-bold mb-3">What Mike works with</h3>
            <p className="text-sm mb-8 text-[#6a5a4a]">Every project is different. Here&apos;s the toolkit.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Google Ads', 'Google Shopping', 'Meta Ads', 'Amazon Ads', 'LinkedIn Automation', 'Influencer Marketing', 'Custom PHP', 'Python', 'WordPress', 'Videography', 'Social Media Management', 'Email Marketing', 'Server Development', 'Reverse Engineering'].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/[0.08] text-brand-orange">{t}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA />
    </>
  );
}

'use client';
import { useRef } from 'react';
import FadeIn from './FadeIn';
import { SectionLabel } from './UI';

const VIDEOS = [
  { src: '/videos/services.mp4', poster: '/videos/services.jpg', title: 'One website, start to finish', desc: 'How a quiet website turns into a steady stream of enquiries, in 30 seconds.' },
  { src: '/videos/blame.mp4', poster: '/videos/blame.jpg', title: 'Just blame Mike', desc: 'Rain, Wi-Fi, printers, fish. Some things really are Mike’s fault.' },
  { src: '/videos/noir.mp4', poster: '/videos/noir.jpg', title: 'The case file', desc: 'A business was found dead. The evidence points to one suspect.' },
  { src: '/videos/promo.mp4', poster: '/videos/promo.jpg', title: 'Where it started', desc: 'First website at 16. The results since.' },
];

export default function VideoShowcase() {
  const refs = useRef([]);
  // only one video plays at a time
  const onPlay = (i) => refs.current.forEach((v, j) => { if (v && j !== i) v.pause(); });

  return (
    <section className="bg-brand-dark" id="videos">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <FadeIn>
          <SectionLabel>Watch</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-16 max-w-2xl leading-tight">
            See it <span className="text-brand-orange">in action.</span>
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEOS.map((v, i) => (
            <FadeIn key={v.src} delay={i * 0.08}>
              <figure className="rounded-2xl overflow-hidden bg-brand-warm border border-brand-orange/[0.08] h-full flex flex-col">
                <video
                  ref={(el) => { refs.current[i] = el; }}
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload="none"
                  onPlay={() => onPlay(i)}
                  className="w-full block bg-black"
                  style={{ aspectRatio: '4/5' }}
                  aria-label={v.title}
                />
                <figcaption className="p-5">
                  <h3 className="text-white text-lg font-bold mb-1">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7a6a]">{v.desc}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

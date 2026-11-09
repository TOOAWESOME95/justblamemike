// Links to clients' live websites, keyed by the client name used on the work cards.
// Sites Mike built say "Visit website"; ads and social clients say "Visit their site" so it's clear he didn't build those.
// Leave a client out when there's no live site (Cancer Got Talent's domain has lapsed).
export const CLIENT_LINKS = {
  YorkRoast: [{ label: 'Visit their site', url: 'https://www.yorkroast.co/' }],
  Nutripouch: [{ label: 'Visit their Amazon store', url: 'https://www.amazon.co.uk/stores/NutriPouch/page/C55035CE-2C97-45E5-8C0F-2E3BA115C2FA' }],
  Gear4Music: [{ label: 'Visit their site', url: 'https://www.gear4music.com/' }],
  'Red Rose / White Rose / North Wales Copiers': [
    { label: 'Red Rose', url: 'https://redrosecopiers.com/' },
    { label: 'White Rose', url: 'https://whiterosecopiers.com/' },
    { label: 'North Wales', url: 'https://northwalescopiers.com/' },
  ],
  'Barton Drilling': [{ label: 'Visit website', url: 'https://bartondrillingltd.co.uk/' }],
  'MLS Kitchens': [{ label: 'Visit website', url: 'https://www.mlskitchensmanchester.co.uk/' }],
};

export default function ClientLinks({ client, className = '' }) {
  const links = CLIENT_LINKS[client];
  if (!links) return null;
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {links.length > 1 && <span className="text-xs font-semibold uppercase tracking-wider text-[#6a5a4a]">Visit the sites:</span>}
      {links.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-bold text-brand-orange hover:underline underline-offset-4"
          aria-label={`${l.label} (${client}, opens in a new tab)`}>
          {l.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

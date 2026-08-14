import Schema, { serviceSchema, breadcrumbSchema } from '../../components/Schema';
import Content from './content';

export const metadata = {
  title: 'PPC Agency Manchester | Pay-Per-Click Management | Just Blame Mike',
  description: 'Manchester PPC agency delivering Google Ads and Meta Ads campaigns that actually convert. No wasted spend, no vanity metrics. Free PPC audit available.',
  keywords: 'PPC agency Manchester, PPC management Manchester, pay per click Manchester, PPC agency North West England, PPC management small businesses Manchester',
  openGraph: {
    title: 'PPC Agency Manchester | Just Blame Mike',
    description: 'Manchester PPC agency. Google Ads & Meta Ads that convert. Free audit.',
    url: 'https://justblamemike.com/services/ppc-agency-manchester/',
  },
};

export default function Page() {
  return (
    <>
      <Schema data={serviceSchema({ name: 'PPC Agency Manchester', description: 'Manchester-based PPC agency delivering Google Ads and Meta Ads campaigns with measurable ROI for small and medium businesses.', url: 'https://justblamemike.com/services/ppc-agency-manchester/' })} />
      <Schema data={breadcrumbSchema([{ name: 'Home', url: 'https://justblamemike.com' }, { name: 'Services', url: 'https://justblamemike.com/services' }, { name: 'PPC Agency Manchester', url: 'https://justblamemike.com/services/ppc-agency-manchester/' }])} />
      <Content />
    </>
  );
}

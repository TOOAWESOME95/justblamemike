import Schema, { serviceSchema, breadcrumbSchema } from '../../components/Schema';
import Content from './content';
export const metadata = {
  title: 'Facebook & Instagram Ads Manchester | Meta Ads Agency | Just Blame Mike',
  description: 'Expert Facebook and Instagram advertising in Manchester. Lead generation, retargeting funnels, and creative strategy. Paid social that converts. Free audit.',
  alternates: { canonical: '/services/facebook-ads-manchester/' },
  keywords: 'Meta Ads agency Manchester, Facebook advertising Manchester, paid social Manchester, Instagram ads Manchester, Meta Ads management Manchester',
  openGraph: { title: 'Facebook & Instagram Ads Manchester | Just Blame Mike', description: 'Paid social campaigns that drive real leads. Manchester-based Meta Ads agency.', url: 'https://justblamemike.com/services/facebook-ads-manchester/' },
};
export default function Page() {
  return (<><Schema data={serviceSchema({ name: 'Facebook & Instagram Ads Agency Manchester', description: 'Expert paid social advertising across Facebook and Instagram for Manchester businesses.', url: 'https://justblamemike.com/services/facebook-ads-manchester/' })} /><Schema data={breadcrumbSchema([{ name: 'Home', url: 'https://justblamemike.com' }, { name: 'Services', url: 'https://justblamemike.com/services' }, { name: 'Facebook Ads Manchester', url: 'https://justblamemike.com/services/facebook-ads-manchester/' }])} /><Content /></>);
}

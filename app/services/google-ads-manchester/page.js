import Schema, { serviceSchema, breadcrumbSchema } from '../../components/Schema';
import Content from './content';
export const metadata = {
  title: 'Google Ads Agency Manchester | Google Ads Management | Just Blame Mike',
  description: 'Expert Google Ads management in Manchester. Search, Shopping, and Performance Max campaigns that drive leads and sales. Get more from your ad spend. Free audit.',
  keywords: 'Google Ads agency Manchester, Google Ads management Manchester, how to get more leads from Google Ads, Google Ads specialist Manchester',
  openGraph: { title: 'Google Ads Agency Manchester | Just Blame Mike', description: 'Google Ads management that drives real leads. Manchester-based. Free audit.', url: 'https://justblamemike.com/services/google-ads-manchester/' },
};
export default function Page() {
  return (<><Schema data={serviceSchema({ name: 'Google Ads Agency Manchester', description: 'Expert Google Ads management in Manchester delivering Search, Shopping, and Performance Max campaigns with measurable ROI.', url: 'https://justblamemike.com/services/google-ads-manchester/' })} /><Schema data={breadcrumbSchema([{ name: 'Home', url: 'https://justblamemike.com' }, { name: 'Services', url: 'https://justblamemike.com/services' }, { name: 'Google Ads Manchester', url: 'https://justblamemike.com/services/google-ads-manchester/' }])} /><Content /></>);
}

import Schema, { serviceSchema, breadcrumbSchema, faqSchema } from '../../components/Schema';
import MetaAdsContent from './content';
import { FAQS } from './faqs';

export const metadata = {
  title: 'Meta Ads Management | Facebook & Instagram Ads | Just Blame Mike',
  description: 'Targeted Facebook and Instagram ad campaigns that generate leads and drive sales. Advanced audience targeting, creative strategy, and retargeting funnels.',
  alternates: { canonical: '/services/meta-ads/' },
  keywords: 'Meta Ads, Facebook Ads, Instagram Ads, social media advertising, lead generation, Manchester',
  openGraph: {
    title: 'Meta Ads Management | Just Blame Mike',
    description: 'Facebook & Instagram campaigns that capture attention and drive action.',
    url: 'https://justblamemike.com/services/meta-ads',
  },
};

export default function MetaAdsPage() {
  return (
    <>
      <Schema data={serviceSchema({ name: 'Meta Ads Management', description: 'Targeted Facebook and Instagram advertising campaigns designed to generate leads, drive sales, and build brand awareness.', url: 'https://justblamemike.com/services/meta-ads' })} />
      <Schema data={breadcrumbSchema([{ name: 'Home', url: 'https://justblamemike.com' }, { name: 'Services', url: 'https://justblamemike.com/services' }, { name: 'Meta Ads', url: 'https://justblamemike.com/services/meta-ads' }])} />
      <Schema data={faqSchema(FAQS)} />
      <MetaAdsContent />
    </>
  );
}

import Schema, { serviceSchema, breadcrumbSchema, faqSchema } from '../../components/Schema';
import GoogleAdsContent from './content';
import { FAQS } from './faqs';

export const metadata = {
  title: 'Google Ads Management | Just Blame Mike',
  description: 'Expert Google Ads management. Search, Shopping, Display, and Performance Max campaigns optimised for maximum ROI. Free audit available.',
  alternates: { canonical: '/services/google-ads/' },
  keywords: 'Google Ads management, PPC agency, Google Shopping ads, Performance Max, Manchester',
  openGraph: {
    title: 'Google Ads Management | Just Blame Mike',
    description: 'Search, Shopping & Performance Max campaigns built for ROI. Get a free audit.',
    url: 'https://justblamemike.com/services/google-ads',
  },
};

export default function GoogleAdsPage() {
  return (
    <>
      <Schema data={serviceSchema({
        name: 'Google Ads Management',
        description: 'Expert Google Ads management including Search, Shopping, Display, and Performance Max campaigns optimised for maximum ROI.',
        url: 'https://justblamemike.com/services/google-ads',
      })} />
      <Schema data={breadcrumbSchema([
        { name: 'Home', url: 'https://justblamemike.com' },
        { name: 'Services', url: 'https://justblamemike.com/services' },
        { name: 'Google Ads', url: 'https://justblamemike.com/services/google-ads' },
      ])} />
      <Schema data={faqSchema(FAQS)} />
      <GoogleAdsContent />
    </>
  );
}

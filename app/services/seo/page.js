import Schema, { serviceSchema, breadcrumbSchema, faqSchema } from '../../components/Schema';
import SEOContent from './content';
import { FAQS } from './faqs';

export const metadata = {
  title: 'SEO Strategy & Optimisation | Just Blame Mike',
  description: 'Local SEO, technical SEO, and content strategy that gets your business found on Google. Manchester-based SEO agency with proven results.',
  alternates: { canonical: '/services/seo/' },
  keywords: 'SEO agency, local SEO, technical SEO, Google Business Profile, Manchester SEO, organic growth',
  openGraph: {
    title: 'SEO Strategy | Just Blame Mike',
    description: 'Get found on Google. Local SEO, technical audits, and content that ranks.',
    url: 'https://justblamemike.com/services/seo',
  },
};

export default function SEOPage() {
  return (
    <>
      <Schema data={serviceSchema({ name: 'SEO Strategy & Optimisation', description: 'Comprehensive SEO services including local SEO, technical audits, and content strategy for organic growth.', url: 'https://justblamemike.com/services/seo' })} />
      <Schema data={breadcrumbSchema([{ name: 'Home', url: 'https://justblamemike.com' }, { name: 'Services', url: 'https://justblamemike.com/services' }, { name: 'SEO', url: 'https://justblamemike.com/services/seo' }])} />
      <Schema data={faqSchema(FAQS)} />
      <SEOContent />
    </>
  );
}

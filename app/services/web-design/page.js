import Schema, { serviceSchema, breadcrumbSchema } from '../../components/Schema';
import WebDesignContent from './content';

export const metadata = {
  title: 'Website Design & Build | Just Blame Mike',
  description: 'Custom-designed, high-performance websites built to convert. WordPress, Shopify, and bespoke builds with SEO baked in from day one.',
  keywords: 'web design, website build, WordPress, Shopify, custom website, Manchester web design',
  openGraph: {
    title: 'Website Design & Build | Just Blame Mike',
    description: 'Custom websites that convert. Fast, SEO-optimised, and built for growth.',
    url: 'https://justblamemike.com/services/web-design',
  },
};

export default function WebDesignPage() {
  return (
    <>
      <Schema data={serviceSchema({ name: 'Website Design & Build', description: 'Custom-designed, high-performance websites built to convert visitors into customers.', url: 'https://justblamemike.com/services/web-design' })} />
      <Schema data={breadcrumbSchema([{ name: 'Home', url: 'https://justblamemike.com' }, { name: 'Services', url: 'https://justblamemike.com/services' }, { name: 'Web Design', url: 'https://justblamemike.com/services/web-design' }])} />
      <WebDesignContent />
    </>
  );
}

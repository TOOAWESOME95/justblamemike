import Schema, { serviceSchema, breadcrumbSchema, faqSchema } from '../../components/Schema';
import EmailHostingContent from './content';
import { FAQS } from './faqs';

export const metadata = {
  title: 'Business Email Hosting Manchester | Just Blame Mike',
  description: 'Business email hosted on my own server, with one flat monthly price instead of per-user fees. Spam filtering, daily backups and a real person to call. Get a free quote.',
  alternates: { canonical: '/services/email-hosting/' },
  keywords: 'business email hosting, email hosting Manchester, custom domain email, small business email, email server, IT support Manchester',
  openGraph: {
    title: 'Business Email Hosting | Just Blame Mike',
    description: 'Your business email, hosted and looked after by me. One flat price, no per-user fees.',
    url: 'https://justblamemike.com/services/email-hosting/',
  },
};

export default function EmailHostingPage() {
  return (
    <>
      <Schema data={serviceSchema({ name: 'Business Email Hosting', description: 'Business email on a server run by Just Blame Mike, with a flat monthly price, spam filtering, daily backups and support from a real person in Manchester.', url: 'https://justblamemike.com/services/email-hosting' })} />
      <Schema data={breadcrumbSchema([{ name: 'Home', url: 'https://justblamemike.com' }, { name: 'Services', url: 'https://justblamemike.com/services' }, { name: 'Email Hosting', url: 'https://justblamemike.com/services/email-hosting' }])} />
      <Schema data={faqSchema(FAQS)} />
      <EmailHostingContent />
    </>
  );
}

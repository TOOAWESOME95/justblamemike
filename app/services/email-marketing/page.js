import Schema, { serviceSchema, breadcrumbSchema } from '../../components/Schema';
import EmailMarketingContent from './content';

export const metadata = {
  title: 'Email Marketing Strategy & Deliverability | Just Blame Mike',
  description: 'Email marketing that actually lands in inboxes. Strategy, segmentation, automation, and deliverability. so your emails get opened, not blocked. Free audit.',
  keywords: 'email marketing, email deliverability, email segmentation, email automation, avoid spam filters, Manchester',
  openGraph: {
    title: 'Email Marketing Strategy | Just Blame Mike',
    description: 'Emails that land, get opened, and drive revenue. Not spam folders. Free audit.',
    url: 'https://justblamemike.com/services/email-marketing',
  },
};

export default function EmailMarketingPage() {
  return (
    <>
      <Schema data={serviceSchema({
        name: 'Email Marketing Strategy & Deliverability',
        description: 'Email marketing strategy, segmentation, automation, and deliverability optimisation to ensure emails reach inboxes and drive revenue.',
        url: 'https://justblamemike.com/services/email-marketing',
      })} />
      <Schema data={breadcrumbSchema([
        { name: 'Home', url: 'https://justblamemike.com' },
        { name: 'Services', url: 'https://justblamemike.com/services' },
        { name: 'Email Marketing', url: 'https://justblamemike.com/services/email-marketing' },
      ])} />
      <EmailMarketingContent />
    </>
  );
}

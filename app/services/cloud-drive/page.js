import Schema, { serviceSchema, breadcrumbSchema, faqSchema } from '../../components/Schema';
import CloudDriveContent from './content';
import { FAQS } from './faqs';

export const metadata = {
  title: 'Cloud Drive & IT Support Manchester | Just Blame Mike',
  description: 'A secure cloud drive that works like a normal hard drive, synced to your PC, laptop and phone. Set up and supported by a real person in Manchester. From £8 per user a month with 50 GB each.',
  alternates: { canonical: '/services/cloud-drive/' },
  keywords: 'cloud storage Manchester, IT support Manchester, small business IT support, cloud drive, file sync, business cloud storage',
  openGraph: {
    title: 'Cloud Drive & IT Support | Just Blame Mike',
    description: 'Your files on every device, and one real person to call when something breaks.',
    url: 'https://justblamemike.com/services/cloud-drive/',
  },
};

export default function CloudDrivePage() {
  return (
    <>
      <Schema data={serviceSchema({ name: 'Cloud Drive & IT Support', description: 'Secure cloud storage that works like a normal drive, synced across devices, with setup and IT support from a real person in Manchester.', url: 'https://justblamemike.com/services/cloud-drive' })} />
      <Schema data={breadcrumbSchema([{ name: 'Home', url: 'https://justblamemike.com' }, { name: 'Services', url: 'https://justblamemike.com/services' }, { name: 'Cloud Drive & IT Support', url: 'https://justblamemike.com/services/cloud-drive' }])} />
      <Schema data={faqSchema(FAQS)} />
      <CloudDriveContent />
    </>
  );
}

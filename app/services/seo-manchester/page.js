import Schema, { serviceSchema, breadcrumbSchema } from '../../components/Schema';
import Content from './content';
export const metadata = {
  title: 'SEO Agency Manchester | Local SEO & Technical SEO | Just Blame Mike',
  description: 'Manchester SEO agency specialising in local SEO, technical SEO, and organic growth. Get found on Google by customers in Manchester and beyond. Free SEO audit.',
  alternates: { canonical: '/services/seo-manchester/' },
  keywords: 'SEO agency Manchester, local SEO Manchester, best SEO agency Manchester UK, technical SEO Manchester, web design and SEO Manchester',
  openGraph: { title: 'SEO Agency Manchester | Just Blame Mike', description: 'Manchester SEO that gets you found. Local & technical SEO specialists. Free audit.', url: 'https://justblamemike.com/services/seo-manchester/' },
};
export default function Page() {
  return (<><Schema data={serviceSchema({ name: 'SEO Agency Manchester', description: 'Manchester SEO agency specialising in local SEO, technical audits, and organic growth strategies.', url: 'https://justblamemike.com/services/seo-manchester/' })} /><Schema data={breadcrumbSchema([{ name: 'Home', url: 'https://justblamemike.com' }, { name: 'Services', url: 'https://justblamemike.com/services' }, { name: 'SEO Manchester', url: 'https://justblamemike.com/services/seo-manchester/' }])} /><Content /></>);
}

import Schema, { webPageSchema, breadcrumbSchema } from '../components/Schema';
import AboutContent from './content';

export const metadata = {
  title: 'About Us. Meet the Scapegoats | Just Blame Mike',
  description: 'The story behind Just Blame Mike. Meet Michael, Jake, and Alex. the team behind your growth. Born from a solo hustle, built for market dominance.',
  alternates: { canonical: '/about/' },
  keywords: 'about Just Blame Mike, digital marketing team, Manchester agency, our story',
  openGraph: {
    title: 'About Us | Just Blame Mike',
    description: 'Meet the scapegoats behind your success.',
    url: 'https://justblamemike.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Schema data={webPageSchema({
        name: 'About Us. Just Blame Mike',
        description: 'The story behind Just Blame Mike digital marketing agency.',
        url: 'https://justblamemike.com/about',
      })} />
      <Schema data={breadcrumbSchema([
        { name: 'Home', url: 'https://justblamemike.com' },
        { name: 'About', url: 'https://justblamemike.com/about' },
      ])} />
      <AboutContent />
    </>
  );
}

export default function Schema({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Helper to build Organization schema (used on every page)
export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Just Blame Mike',
    url: 'https://justblamemike.com',
    logo: 'https://justblamemike.com/logo.jpg',
    description: 'Full-service digital marketing agency specialising in PPC, web design, and SEO.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manchester',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'mike@justblamemike.com',
      contactType: 'sales',
    },
    sameAs: [],
  };
}

// Helper to build Service schema
export function serviceSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'Just Blame Mike',
      url: 'https://justblamemike.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  };
}

// Helper to build WebPage schema
export function webPageSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Just Blame Mike',
      url: 'https://justblamemike.com',
    },
  };
}

// Helper for BreadcrumbList
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Helper for LocalBusiness (contact page)
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Just Blame Mike',
    url: 'https://justblamemike.com',
    logo: 'https://justblamemike.com/logo.jpg',
    description: 'Digital marketing agency specialising in PPC management, web design, and SEO.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manchester',
      addressCountry: 'GB',
    },
    email: 'mike@justblamemike.com',
    priceRange: '££',
    areaServed: 'United Kingdom',
  };
}

import { getCountryFromDomain } from "./utils";

/**
 * Get the base URL for the current domain
 */
export function getBaseUrl(): string {
  if (typeof window === 'undefined') return 'https://walldream.fr';
  
  const hostname = window.location.hostname;
  
  if (hostname.includes('walldream.fr') || hostname.includes('.fr')) {
    return 'https://walldream.fr';
  }
  
  if (hostname.includes('walldream.ch') || hostname.includes('.ch')) {
    return 'https://walldream.ch';
  }
  
  // Default for development/preview
  return window.location.origin;
}

/**
 * Get alternate URLs for hreflang
 */
export function getAlternateUrls(path: string = '') {
  return {
    'fr-FR': `https://walldream.fr${path}`,
    'fr-CH': `https://walldream.ch${path}`,
    'x-default': `https://walldream.fr${path}`
  };
}

/**
 * Get structured data for the organization based on current domain
 */
export function getOrganizationStructuredData() {
  const country = getCountryFromDomain();
  const baseUrl = getBaseUrl();
  
  const contactPoints = country === 'france' 
    ? [{
        "@type": "ContactPoint",
        telephone: "+33-7-74-59-86-27",
        contactType: "Service client",
        areaServed: "FR",
        availableLanguage: ["fr"]
      }]
    : country === 'suisse'
    ? [{
        "@type": "ContactPoint",
        telephone: "+41-77-808-32-70",
        contactType: "Service client",
        areaServed: "CH",
        availableLanguage: ["fr", "de"]
      }]
    : [
        {
          "@type": "ContactPoint",
          telephone: "+33-7-74-59-86-27",
          contactType: "Service client",
          areaServed: "FR",
          availableLanguage: ["fr"]
        },
        {
          "@type": "ContactPoint",
          telephone: "+41-77-808-32-70",
          contactType: "Service client",
          areaServed: "CH",
          availableLanguage: ["fr", "de"]
        }
      ];

  const addresses = country === 'france'
    ? [{ "@type": "PostalAddress", addressCountry: "FR" }]
    : country === 'suisse'
    ? [{ "@type": "PostalAddress", addressCountry: "CH" }]
    : [
        { "@type": "PostalAddress", addressCountry: "FR" },
        { "@type": "PostalAddress", addressCountry: "CH" }
      ];

  const areaServed = country === 'france' 
    ? ["FR"] 
    : country === 'suisse' 
    ? ["CH"] 
    : ["FR", "CH"];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wall Dream",
    description: "Impression murale professionnelle : création et pose de décors grand format pour entreprises et commerces",
    url: baseUrl,
    contactPoint: contactPoints,
    address: addresses,
    service: {
      "@type": "Service",
      serviceType: "Impression murale professionnelle",
      provider: {
        "@type": "Organization",
        name: "Wall Dream"
      },
      areaServed: areaServed
    }
  };
}

/**
 * Get SEO meta tags configuration based on domain
 */
export function getSeoConfig() {
  const country = getCountryFromDomain();
  const baseUrl = getBaseUrl();
  
  if (country === 'france') {
    return {
      title: "Wall Dream France - Impression Murale Professionnelle",
      description: "Impression murale professionnelle en France : création et pose de décors grand format pour entreprises et commerces. Impact visuel immédiat, image de marque forte.",
      keywords: "impression murale, décoration murale, impression grand format, habillage mural, France",
      canonical: baseUrl,
      ogTitle: "Wall Dream France - Impression Murale Professionnelle",
      ogDescription: "Spécialiste de l'impression murale professionnelle pour entreprises et commerces en France."
    };
  }
  
  if (country === 'suisse') {
    return {
      title: "Wall Dream Suisse - Impression Murale Professionnelle",
      description: "Impression murale professionnelle en Suisse : création et pose de décors grand format pour entreprises et commerces. Impact visuel immédiat, image de marque forte.",
      keywords: "impression murale, décoration murale, impression grand format, habillage mural, Suisse, Schweiz",
      canonical: baseUrl,
      ogTitle: "Wall Dream Suisse - Impression Murale Professionnelle",
      ogDescription: "Spécialiste de l'impression murale professionnelle pour entreprises et commerces en Suisse."
    };
  }
  
  // Default (both markets)
  return {
    title: "Wall Dream - Impression Murale Professionnelle",
    description: "Impression murale professionnelle : création et pose de décors grand format pour entreprises et commerces. Impact visuel immédiat, image de marque forte.",
    keywords: "impression murale, décoration murale, impression grand format, habillage mural, France, Suisse",
    canonical: baseUrl,
    ogTitle: "Wall Dream - Impression Murale Professionnelle",
    ogDescription: "Spécialiste de l'impression murale professionnelle pour entreprises et commerces en France et en Suisse."
  };
}

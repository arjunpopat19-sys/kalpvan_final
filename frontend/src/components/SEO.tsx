import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  schema?: Record<string, any> | Record<string, any>[];
}

const DOMAIN = 'https://kalpvanayurvedashram.com';
const DEFAULT_IMAGE = `${DOMAIN}/assets/logo.png`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  image,
  type = 'website',
  noindex = false,
  schema,
}) => {
  const { language } = useLanguage();

  const fullTitle = title 
    ? (title.includes('Kalpvan') || title.includes('कल्पवन') ? title : `${title} | Kalpvan Ayurvedashram`) 
    : (language === 'hi'
        ? 'कल्पवन आयुर्वेदाश्रम | भरूच, गुजरात में सर्वश्रेष्ठ आयुर्वेदिक एवं पंचकर्म चिकित्सालय'
        : 'Kalpvan Ayurvedashram | Best Ayurvedic & Panchakarma Clinic in Bharuch, Gujarat');

  const defaultDesc = language === 'hi'
    ? 'कल्पवन आयुर्वेदाश्रम भरूच, गुजरात में डॉ. वंदना ठक्कर के मार्गदर्शन में प्रामाणिक आयुर्वेदिक उपचार, पंचकर्म डिटॉक्स, त्वचा और बाल चिकित्सा और समग्र स्वास्थ्य प्रदान करता है।'
    : 'Kalpvan Ayurvedashram in Bharuch, Gujarat led by Dr. Vandana Thakkar offers authentic Ayurvedic treatments, Panchakarma detox, Cosmetology, Trichology, Weight Loss & wellness therapies.';

  const metaDescription = description || defaultDesc;

  const defaultKeywords = 'Ayurveda, Panchakarma, Ayurvedic clinic Bharuch, Dr Vandana Thakkar, Kalpvan Ayurvedashram, herbal medicine, authentic ayurveda Gujarat, Shirodhara, Suvarnaprashan, Skin treatment, Hair treatment, Weight loss ayurveda, Ayurvedic doctor Bharuch';
  const metaKeywords = keywords || defaultKeywords;

  const canonicalUrl = canonical ? `${DOMAIN}${canonical.startsWith('/') ? canonical : `/${canonical}`}` : DOMAIN;
  const ogImage = image 
    ? (image.startsWith('http') ? image : `${DOMAIN}${image.startsWith('/') ? image : `/${image}`}`) 
    : DEFAULT_IMAGE;

  // Base MedicalClinic Schema
  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'LocalBusiness'],
    '@id': `${DOMAIN}/#clinic`,
    name: 'Kalpvan Ayurvedashram',
    alternateName: 'कल्पवन आयुर्वेदाश्रम',
    url: DOMAIN,
    logo: `${DOMAIN}/assets/logo.png`,
    image: `${DOMAIN}/assets/doctor.jpg`,
    description: 'Authentic Ayurvedic & Panchakarma Clinic in Bharuch, Gujarat led by Dr. Vandana Thakkar.',
    telephone: '+919824370788',
    email: 'kalpvan_panchkarma@yahoo.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '119, Akshardham Complex, Opp. Sai Mandir, Zadeshwar Road',
      addressLocality: 'Bharuch',
      addressRegion: 'Gujarat',
      postalCode: '392011',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.7226,
      longitude: 73.0118
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00'
      }
    ],
    medicalSpecialty: [
      'https://schema.org/Ayurvedic',
      'https://schema.org/DietNutrition'
    ],
    physician: {
      '@type': 'Physician',
      name: 'Dr. Vandana Thakkar',
      jobTitle: 'Ayurvedic Physician & Consultant',
      description: 'B.A.M.S, M.E.T.C — Specialist in Panchakarma, Cosmetology, Trichology, Weight Loss, Suvarnaprashan & Wellness therapies.',
      medicalSpecialty: 'Ayurveda'
    }
  };

  const schemasToInject = schema 
    ? (Array.isArray(schema) ? [clinicSchema, ...schema] : [clinicSchema, schema])
    : [clinicSchema];

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />

      {/* Local SEO / Geo Targeting */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Bharuch" />
      <meta name="geo.position" content="21.7226;73.0118" />
      <meta name="ICBM" content="21.7226, 73.0118" />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:site_name" content="Kalpvan Ayurvedashram" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={language === 'hi' ? 'hi_IN' : 'en_IN'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {schemasToInject.map((item, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.tagline,
    url: site.url,
    email: site.email,
    telephone: "+61494300150",
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
    },
    priceRange: "$1450–$5400",
    sameAs: [site.url],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

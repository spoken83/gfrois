interface WebsiteSchemaProps {
  pageType?: 'homepage' | 'about' | 'contact' | 'portfolio' | 'article';
  title?: string;
  description?: string;
}

export default function SEOSchema({ 
  pageType = 'homepage',
  title = "Gordon Frois - Product Leader & Builder",
  description = "Founder and builder with 17 years across fintech, SaaS, and consumer platforms. Building Thinkerly, ZenOptions, and AI agent systems."
}: WebsiteSchemaProps) {
  const getSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gordon Frois",
      "jobTitle": "Product Leader & Builder",
      "description": description,
      "url": "https://gordonfrois.com",
      "email": "gordon.frois@gmail.com",
      "sameAs": [
        "https://linkedin.com/in/gordonfrois"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Thinkerly.app"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Nanyang Technological University"
      },
      "knowsAbout": [
        "Product Management",
        "Product Strategy", 
        "Team Leadership",
        "Startup Founding",
        "SaaS Products",
        "B2B Products",
        "B2C Products",
        "Fintech",
        "Insurtech"
      ]
    };

    if (pageType === 'homepage') {
      return {
        ...baseSchema,
        "@type": ["Person", "WebSite"],
        "mainEntity": {
          "@type": "Person",
          "name": "Gordon Frois"
        }
      };
    }

    if (pageType === 'portfolio') {
      return {
        ...baseSchema,
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Bachelor of Engineering, Computer Engineering",
            "educationalLevel": "Second Upper Honours",
            "recognizedBy": {
              "@type": "CollegeOrUniversity",
              "name": "Nanyang Technological University"
            }
          }
        ]
      };
    }

    return baseSchema;
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema(), null, 2)
      }}
    />
  );
}
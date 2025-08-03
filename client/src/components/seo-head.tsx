import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEOHead({
  title = "Gordon Frois - Product Leader & Ex-Founder | 15+ Years Experience",
  description = "Product leader with 15+ years experience across fintech, insurtech, B2B SaaS, and consumer apps in Asia-Pacific. Ex-founder of Financial Butler, full-stack operator.",
  keywords = "product leader, product manager, ex-founder, startup founder, SaaS, B2B, B2C, fintech, insurtech, product strategy, team leadership, Gordon Frois",
  canonicalUrl = "https://gordonfrois.com",
  ogImage = "https://gordonfrois.com/og-image.jpg",
  ogType = "website"
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
    
    // Update robots meta tag for better indexing control
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:url', canonicalUrl, true);
    updateMetaTag('twitter:image', ogImage, true);
  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  return null;
}
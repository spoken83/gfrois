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
  title = "Gordon Frois - Product Leader & Builder | AI, Fintech, and Beyond",
  description = "Founder and builder with 17 years across fintech, SaaS, and consumer platforms. Currently building Thinkerly, ZenOptions, and AI agent systems. Ex-product leader at Income Insurance, Railsr, and Murex.",
  keywords = "Gordon Frois, founder, builder, Thinkerly, ZenOptions, AI agents, fintech, edtech, SaaS, product leader, Singapore, startup founder",
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
    updateMetaTag('og:site_name', 'Gordon Frois', true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:url', canonicalUrl, true);
    updateMetaTag('twitter:image', ogImage, true);
    updateMetaTag('twitter:creator', '@gordonfrois', true);
    
    // LinkedIn specific optimizations
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('article:author', 'Gordon Frois', true);
    updateMetaTag('og:locale', 'en_US', true);
  }, [title, description, keywords, canonicalUrl, ogImage, ogType]);

  return null;
}
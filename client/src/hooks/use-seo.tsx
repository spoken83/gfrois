import { useEffect } from 'react';

interface UseSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  imageUrl?: string;
}

export const useSEO = ({
  title,
  description,
  keywords = '',
  canonicalUrl = 'https://gordonfrois.com',
  imageUrl = 'https://gordonfrois.com/og-image.jpg'
}: UseSEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      const selector = `meta[${attribute}="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update meta description
    updateMetaTag('description', description);
    
    // Update keywords if provided
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', imageUrl, true);
    updateMetaTag('og:type', 'website', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', imageUrl, true);
    updateMetaTag('twitter:card', 'summary_large_image', true);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

  }, [title, description, keywords, canonicalUrl, imageUrl]);
};
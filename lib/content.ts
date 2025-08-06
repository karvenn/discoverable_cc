import contentData from '@/config/content.json';

// Type definitions for content structure
export interface Content {
  brand: {
    name: string;
    domain: string;
    tagline: string;
    email: string;
    social: {
      twitter: string;
      linkedin: string;
    };
  };
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  navigation: {
    main: Array<{ name: string; href: string }>;
    footer: Array<{ name: string; href: string }>;
  };
  hero: {
    badge: string;
    title: {
      line1: string;
      line2: string;
    };
    description: string;
    cta: {
      primary: string;
      secondary: string;
    };
    features: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      essentials: ServiceItem;
      growth: ServiceItem & { popular?: boolean };
      dominance: ServiceItem;
    };
    cta: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  cta: {
    title: string;
    subtitle: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      websitePlaceholder: string;
      messagePlaceholder: string;
      button: string;
    };
    disclaimer: string;
  };
  footer: {
    description: string;
    quickLinks: {
      title: string;
    };
    legal: {
      title: string;
    };
    copyright: string;
  };
  analyze: {
    title: string;
    subtitle: string;
    form: {
      placeholder: string;
      button: {
        analyze: string;
        analyzing: string;
      };
    };
    tabs: {
      seo: string;
      ai: string;
    };
    seo: {
      score: {
        title: string;
        labels: {
          excellent: string;
          good: string;
          needsImprovement: string;
          poor: string;
        };
      };
      issues: {
        title: string;
      };
      recommendations: {
        title: string;
      };
    };
    ai: {
      overview: {
        title: string;
        scoreLabel: string;
      };
      factors: {
        title: string;
      };
      recommendations: {
        title: string;
      };
    };
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  aiVisibilityPage: {
    badge: string;
    hero: {
      title: string;
      subtitle: string;
      cta: {
        primary: string;
        secondary: string;
      };
    };
    platforms: {
      title: string;
      items: Array<{
        name: string;
        description: string;
        icon: string;
      }>;
    };
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
    };
    process: {
      title: string;
      steps: Array<{
        step: number;
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  seoPage: {
    badge: string;
    hero: {
      title: string;
      subtitle: string;
      cta: {
        primary: string;
        secondary: string;
      };
    };
    results: {
      title: string;
      metrics: Array<{
        metric: string;
        label: string;
      }>;
    };
    services: {
      title: string;
      items: Array<{
        title: string;
        description: string;
        features: string[];
      }>;
    };
    tools: {
      title: string;
      items: string[];
    };
    timeline: {
      title: string;
      steps: Array<{
        week: string;
        title: string;
        description: string;
      }>;
    };
    cta: {
      title: string;
      subtitle: string;
      buttons: {
        primary: string;
        secondary: string;
      };
    };
  };
}

interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  link: string;
}

interface Testimonial {
  id: string;
  author: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

// Export the typed content
export const content: Content = contentData as Content;

// Helper functions for accessing content
export const getBrand = () => content.brand;
export const getMetadata = () => content.metadata;
export const getNavigation = () => content.navigation;
export const getHeroContent = () => content.hero;
export const getServicesContent = () => content.services;
export const getTestimonials = () => content.testimonials;
export const getCTAContent = () => content.cta;
export const getFooterContent = () => content.footer;
export const getAnalyzeContent = () => content.analyze;
export const getAIVisibilityPageContent = () => content.aiVisibilityPage;
export const getSEOPageContent = () => content.seoPage;
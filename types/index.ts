// Core type definitions for Discoverable platform

export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIVisibilityScore {
  overall: number;
  chatgpt: number;
  claude: number;
  gemini: number;
  perplexity: number;
  lastChecked: Date;
}

export interface SEOMetrics {
  domainAuthority: number;
  pageAuthority: number;
  backlinks: number;
  organicTraffic: number;
  keywords: number;
  averagePosition: number;
  coreWebVitals: {
    lcp: number;
    fid: number;
    cls: number;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  price?: {
    monthly: number;
    annual: number;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  tags: string[];
  readingTime: number;
}
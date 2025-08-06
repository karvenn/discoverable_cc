// SEO Analysis utilities

export interface SEOAnalysisResult {
  score: number;
  issues: SEOIssue[];
  recommendations: string[];
  metrics: SEOMetrics;
}

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: string;
  message: string;
  impact: 'high' | 'medium' | 'low';
}

export interface SEOMetrics {
  title: {
    length: number;
    hasKeywords: boolean;
    isOptimal: boolean;
  };
  description: {
    length: number;
    hasKeywords: boolean;
    isOptimal: boolean;
  };
  headings: {
    h1Count: number;
    hasProperHierarchy: boolean;
  };
  images: {
    total: number;
    withoutAlt: number;
    optimized: number;
  };
  links: {
    internal: number;
    external: number;
    broken: number;
  };
  performance: {
    loadTime: number;
    size: number;
    requests: number;
  };
}

interface SEOMetadata {
  title?: string;
  description?: string;
}

export function analyzeSEO(url: string, content: string, metadata?: SEOMetadata): SEOAnalysisResult {
  const issues: SEOIssue[] = [];
  const recommendations: string[] = [];
  
  // Analyze title
  const titleLength = metadata?.title?.length || 0;
  const titleMetrics = {
    length: titleLength,
    hasKeywords: checkKeywords(metadata?.title || ''),
    isOptimal: titleLength >= 30 && titleLength <= 60,
  };
  
  if (!titleMetrics.isOptimal) {
    issues.push({
      type: titleLength === 0 ? 'error' : 'warning',
      category: 'Title Tag',
      message: titleLength === 0 
        ? 'Missing title tag' 
        : `Title length (${titleLength}) is not optimal. Should be 30-60 characters.`,
      impact: 'high',
    });
  }
  
  // Analyze description
  const descLength = metadata?.description?.length || 0;
  const descMetrics = {
    length: descLength,
    hasKeywords: checkKeywords(metadata?.description || ''),
    isOptimal: descLength >= 120 && descLength <= 160,
  };
  
  if (!descMetrics.isOptimal) {
    issues.push({
      type: descLength === 0 ? 'error' : 'warning',
      category: 'Meta Description',
      message: descLength === 0 
        ? 'Missing meta description' 
        : `Description length (${descLength}) is not optimal. Should be 120-160 characters.`,
      impact: 'high',
    });
  }
  
  // Calculate SEO score
  const score = calculateSEOScore({
    title: titleMetrics,
    description: descMetrics,
    headings: { h1Count: 1, hasProperHierarchy: true },
    images: { total: 0, withoutAlt: 0, optimized: 0 },
    links: { internal: 0, external: 0, broken: 0 },
    performance: { loadTime: 0, size: 0, requests: 0 },
  });
  
  // Generate recommendations
  if (!titleMetrics.hasKeywords) {
    recommendations.push('Include target keywords in your title tag');
  }
  if (!descMetrics.hasKeywords) {
    recommendations.push('Include target keywords in your meta description');
  }
  recommendations.push('Add schema markup for better search visibility');
  recommendations.push('Implement Open Graph tags for social sharing');
  
  return {
    score,
    issues,
    recommendations,
    metrics: {
      title: titleMetrics,
      description: descMetrics,
      headings: { h1Count: 1, hasProperHierarchy: true },
      images: { total: 0, withoutAlt: 0, optimized: 0 },
      links: { internal: 0, external: 0, broken: 0 },
      performance: { loadTime: 0, size: 0, requests: 0 },
    },
  };
}

function checkKeywords(text: string): boolean {
  const keywords = ['seo', 'search', 'visibility', 'optimization', 'ranking', 'traffic'];
  const lowerText = text.toLowerCase();
  return keywords.some(keyword => lowerText.includes(keyword));
}

function calculateSEOScore(metrics: SEOMetrics): number {
  let score = 100;
  
  // Title penalties
  if (!metrics.title.isOptimal) score -= 15;
  if (!metrics.title.hasKeywords) score -= 10;
  
  // Description penalties
  if (!metrics.description.isOptimal) score -= 15;
  if (!metrics.description.hasKeywords) score -= 10;
  
  // Heading penalties
  if (metrics.headings.h1Count === 0) score -= 20;
  if (metrics.headings.h1Count > 1) score -= 10;
  
  // Image penalties
  if (metrics.images.withoutAlt > 0) {
    score -= Math.min(20, metrics.images.withoutAlt * 5);
  }
  
  return Math.max(0, score);
}

export function getScoreColor(score: number): string {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-yellow-600';
  return 'text-red-600';
}

export function getScoreLabel(score: number): string {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Needs Improvement';
  return 'Poor';
}
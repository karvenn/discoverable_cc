// AI Visibility Assessment utilities

export interface AIVisibilityResult {
  overall: number;
  platforms: {
    chatgpt: PlatformScore;
    claude: PlatformScore;
    gemini: PlatformScore;
    perplexity: PlatformScore;
  };
  factors: VisibilityFactors;
  recommendations: string[];
}

export interface PlatformScore {
  score: number;
  presence: 'strong' | 'moderate' | 'weak' | 'none';
  factors: string[];
}

export interface VisibilityFactors {
  contentQuality: number;
  structuredData: number;
  citationPotential: number;
  authoritySignals: number;
  freshness: number;
  topicalRelevance: number;
}

export async function checkAIVisibility(domain: string): Promise<AIVisibilityResult> {
  // In a real implementation, this would make API calls to check actual AI platform visibility
  // For now, we'll simulate the analysis
  
  const factors: VisibilityFactors = {
    contentQuality: calculateContentQuality(domain),
    structuredData: calculateStructuredDataScore(domain),
    citationPotential: calculateCitationPotential(domain),
    authoritySignals: calculateAuthoritySignals(domain),
    freshness: calculateFreshness(domain),
    topicalRelevance: calculateTopicalRelevance(domain),
  };
  
  const platforms = {
    chatgpt: assessPlatformVisibility('chatgpt', factors),
    claude: assessPlatformVisibility('claude', factors),
    gemini: assessPlatformVisibility('gemini', factors),
    perplexity: assessPlatformVisibility('perplexity', factors),
  };
  
  const overall = calculateOverallScore(platforms);
  
  const recommendations = generateAIRecommendations(factors, platforms);
  
  return {
    overall,
    platforms,
    factors,
    recommendations,
  };
}

function calculateContentQuality(_domain: string): number {
  // Simulate content quality analysis
  // In reality, would analyze content depth, originality, expertise
  return Math.floor(Math.random() * 30) + 70; // 70-100
}

function calculateStructuredDataScore(_domain: string): number {
  // Check for schema markup, JSON-LD, etc.
  return Math.floor(Math.random() * 40) + 60; // 60-100
}

function calculateCitationPotential(_domain: string): number {
  // Assess how likely content is to be cited by AI
  return Math.floor(Math.random() * 30) + 65; // 65-95
}

function calculateAuthoritySignals(_domain: string): number {
  // Domain authority, backlinks, brand mentions
  return Math.floor(Math.random() * 35) + 55; // 55-90
}

function calculateFreshness(_domain: string): number {
  // Content update frequency, news coverage
  return Math.floor(Math.random() * 30) + 70; // 70-100
}

function calculateTopicalRelevance(_domain: string): number {
  // Relevance to AI training data topics
  return Math.floor(Math.random() * 25) + 75; // 75-100
}

function assessPlatformVisibility(
  platform: string,
  factors: VisibilityFactors
): PlatformScore {
  // Weight factors differently for each platform
  const weights = {
    chatgpt: { content: 0.3, structured: 0.2, citation: 0.25, authority: 0.15, freshness: 0.1 },
    claude: { content: 0.35, structured: 0.15, citation: 0.2, authority: 0.2, freshness: 0.1 },
    gemini: { content: 0.25, structured: 0.25, citation: 0.2, authority: 0.2, freshness: 0.1 },
    perplexity: { content: 0.2, structured: 0.15, citation: 0.25, authority: 0.25, freshness: 0.15 },
  };
  
  const w = weights[platform as keyof typeof weights] || weights.chatgpt;
  
  const score = Math.round(
    factors.contentQuality * w.content +
    factors.structuredData * w.structured +
    factors.citationPotential * w.citation +
    factors.authoritySignals * w.authority +
    factors.freshness * w.freshness
  );
  
  let presence: 'strong' | 'moderate' | 'weak' | 'none';
  if (score >= 80) presence = 'strong';
  else if (score >= 60) presence = 'moderate';
  else if (score >= 40) presence = 'weak';
  else presence = 'none';
  
  const platformFactors = [];
  if (factors.contentQuality >= 80) platformFactors.push('High-quality content detected');
  if (factors.structuredData >= 70) platformFactors.push('Good structured data implementation');
  if (factors.citationPotential >= 75) platformFactors.push('Strong citation potential');
  if (factors.authoritySignals >= 70) platformFactors.push('Good authority signals');
  
  return { score, presence, factors: platformFactors };
}

function calculateOverallScore(platforms: Record<string, PlatformScore>): number {
  const scores = Object.values(platforms).map((p) => p.score);
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}

function generateAIRecommendations(
  factors: VisibilityFactors,
  platforms: Record<string, PlatformScore>
): string[] {
  const recommendations = [];
  
  if (factors.structuredData < 70) {
    recommendations.push('Implement comprehensive schema markup to help AI understand your content');
  }
  
  if (factors.contentQuality < 80) {
    recommendations.push('Create more in-depth, authoritative content that AI systems prefer to cite');
  }
  
  if (factors.citationPotential < 70) {
    recommendations.push('Add statistics, research data, and unique insights to increase citation potential');
  }
  
  if (factors.authoritySignals < 70) {
    recommendations.push('Build domain authority through quality backlinks and brand mentions');
  }
  
  if (factors.freshness < 80) {
    recommendations.push('Update content regularly to maintain relevance in AI responses');
  }
  
  if (platforms.chatgpt.score < 70) {
    recommendations.push('Optimize for ChatGPT by focusing on conversational, Q&A-style content');
  }
  
  if (platforms.perplexity.score < 70) {
    recommendations.push('Improve Perplexity visibility with clear, factual content and proper citations');
  }
  
  return recommendations.slice(0, 5); // Return top 5 recommendations
}

export function getPresenceColor(presence: string): string {
  switch (presence) {
    case 'strong': return 'text-green-600';
    case 'moderate': return 'text-yellow-600';
    case 'weak': return 'text-orange-600';
    case 'none': return 'text-red-600';
    default: return 'text-gray-600';
  }
}

export function getPresenceIcon(presence: string): string {
  switch (presence) {
    case 'strong': return '✓✓';
    case 'moderate': return '✓';
    case 'weak': return '!';
    case 'none': return '✗';
    default: return '?';
  }
}
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { analyzeSEO, getScoreColor, getScoreLabel } from '@/lib/seo/analyzer';
import { checkAIVisibility, getPresenceColor, getPresenceIcon } from '@/lib/ai/visibility-checker';
import type { SEOAnalysisResult } from '@/lib/seo/analyzer';
import type { AIVisibilityResult } from '@/lib/ai/visibility-checker';
import { getAnalyzeContent } from '@/lib/content';

export default function AnalyzePage() {
  const content = getAnalyzeContent();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [seoResult, setSeoResult] = useState<SEOAnalysisResult | null>(null);
  const [aiResult, setAiResult] = useState<AIVisibilityResult | null>(null);
  const [activeTab, setActiveTab] = useState<'seo' | 'ai'>('seo');
  
  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    
    // Simulate API calls
    setTimeout(async () => {
      // Analyze SEO
      const seoAnalysis = analyzeSEO(url, '', {
        title: 'Example Business - Leading Provider of Services',
        description: 'Discover our comprehensive range of professional services designed to help your business grow and succeed in today\'s competitive market.',
      });
      setSeoResult(seoAnalysis);
      
      // Check AI visibility
      const aiVisibility = await checkAIVisibility(url);
      setAiResult(aiVisibility);
      
      setLoading(false);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>
        
        {/* URL Input Form */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardContent className="p-6">
            <form onSubmit={handleAnalyze} className="flex gap-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={content.form.placeholder}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <Button type="submit" disabled={loading}>
                {loading ? content.form.button.analyzing : content.form.button.analyze}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {/* Results Section */}
        {(seoResult || aiResult) && (
          <>
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <button
                  onClick={() => setActiveTab('seo')}
                  className={`px-6 py-3 rounded-l-lg font-medium transition-colors ${
                    activeTab === 'seo'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {content.tabs.seo}
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-6 py-3 rounded-r-lg font-medium transition-colors ${
                    activeTab === 'ai'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {content.tabs.ai}
                </button>
              </div>
            </div>
            
            {/* SEO Results */}
            {activeTab === 'seo' && seoResult && (
              <div className="grid gap-6 md:grid-cols-2">
                {/* Score Card */}
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">{content.seo.score.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className={`text-6xl font-bold ${getScoreColor(seoResult.score)}`}>
                        {seoResult.score}
                      </div>
                      <div className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                        {getScoreLabel(seoResult.score)}
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Title Tag</span>
                        <Badge variant={seoResult.metrics.title.isOptimal ? 'success' : 'warning'}>
                          {seoResult.metrics.title.length} chars
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Meta Description</span>
                        <Badge variant={seoResult.metrics.description.isOptimal ? 'success' : 'warning'}>
                          {seoResult.metrics.description.length} chars
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Issues Card */}
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">{content.seo.issues.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {seoResult.issues.map((issue, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Badge 
                            variant={issue.type === 'error' ? 'error' : issue.type === 'warning' ? 'warning' : 'info'}
                            size="sm"
                          >
                            {issue.impact}
                          </Badge>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {issue.category}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {issue.message}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recommendations */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <h2 className="text-xl font-semibold">{content.seo.recommendations.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {seoResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* AI Visibility Results */}
            {activeTab === 'ai' && aiResult && (
              <div className="grid gap-6">
                {/* Overall Score */}
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">{content.ai.overview.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-8">
                      <div className={`text-6xl font-bold ${getScoreColor(aiResult.overall)}`}>
                        {aiResult.overall}%
                      </div>
                      <div className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                        {content.ai.overview.scoreLabel}
                      </div>
                    </div>
                    
                    {/* Platform Scores */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(aiResult.platforms).map(([platform, data]) => (
                        <div key={platform} className="text-center">
                          <div className="text-2xl font-bold capitalize mb-1">{platform}</div>
                          <div className={`text-3xl font-bold ${getPresenceColor(data.presence)}`}>
                            {data.score}%
                          </div>
                          <div className={`text-sm ${getPresenceColor(data.presence)}`}>
                            {getPresenceIcon(data.presence)} {data.presence}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Visibility Factors */}
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">{content.ai.factors.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(aiResult.factors).map(([factor, score]) => (
                        <div key={factor}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {factor.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {score}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* AI Recommendations */}
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-semibold">{content.ai.recommendations.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {aiResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </>
        )}
        
        {/* Features Section */}
        {!seoResult && !aiResult && !loading && (
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{content.features[0].title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {content.features[0].description}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{content.features[1].title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {content.features[1].description}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{content.features[2].title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {content.features[2].description}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
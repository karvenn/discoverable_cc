import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function SEOPage() {
  const services = [
    {
      title: 'Technical SEO',
      description: 'Optimize site architecture, speed, and crawlability',
      features: ['Site speed optimization', 'Mobile responsiveness', 'XML sitemaps', 'Robots.txt optimization'],
    },
    {
      title: 'On-Page SEO',
      description: 'Perfect your content and HTML elements',
      features: ['Title tag optimization', 'Meta descriptions', 'Header structure', 'Internal linking'],
    },
    {
      title: 'Content Strategy',
      description: 'Create content that ranks and converts',
      features: ['Keyword research', 'Content planning', 'Topic clusters', 'Content optimization'],
    },
    {
      title: 'Link Building',
      description: 'Build authority with quality backlinks',
      features: ['Link audit', 'Outreach campaigns', 'Guest posting', 'Brand mentions'],
    },
  ];
  
  const results = [
    { metric: '250%', label: 'Average Traffic Increase' },
    { metric: '180%', label: 'Conversion Rate Boost' },
    { metric: '500+', label: 'Keywords Ranking #1' },
    { metric: '95%', label: 'Client Retention Rate' },
  ];
  
  const tools = [
    'Google Search Console',
    'SEMrush',
    'Ahrefs',
    'Screaming Frog',
    'PageSpeed Insights',
    'Google Analytics',
  ];
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="info" className="mb-4">SEO Optimization Service</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Advanced SEO That Delivers Results
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Dominate search rankings with our data-driven SEO strategies. 
                We combine technical excellence with content mastery to drive organic growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/analyze">
                  <Button size="lg">Get Free SEO Audit</Button>
                </a>
                <Button variant="outline" size="lg">View Case Studies</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Proven SEO Results
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {results.map((result) => (
                <div key={result.label} className="text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {result.metric}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Comprehensive SEO Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Card key={service.title}>
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tools Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Enterprise-Grade SEO Tools
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
                <Badge key={tool} variant="default" className="px-4 py-2 text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our SEO Process Timeline
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Week 1-2: Comprehensive Audit
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Deep dive into your current SEO performance, competitor analysis, and opportunity identification.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Week 3-4: Strategy Development
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Create custom SEO roadmap with prioritized actions and measurable goals.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Month 2-3: Implementation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Execute technical fixes, content optimization, and link building campaigns.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Ongoing: Monitor & Optimize
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Continuous tracking, reporting, and refinement to maintain and improve rankings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a comprehensive SEO audit and custom strategy tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-lg">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                Download SEO Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
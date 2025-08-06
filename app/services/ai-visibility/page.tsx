import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function AIVisibilityPage() {
  const platforms = [
    { name: 'ChatGPT', description: 'OpenAI\'s conversational AI', icon: '🤖' },
    { name: 'Claude', description: 'Anthropic\'s AI assistant', icon: '🧠' },
    { name: 'Gemini', description: 'Google\'s multimodal AI', icon: '✨' },
    { name: 'Perplexity', description: 'AI-powered search engine', icon: '🔍' },
  ];
  
  const features = [
    {
      title: 'AI Content Optimization',
      description: 'Structure your content to be easily understood and cited by AI systems',
      icon: '📝',
    },
    {
      title: 'Knowledge Graph Integration',
      description: 'Ensure your brand appears in AI knowledge bases and training data',
      icon: '🗂️',
    },
    {
      title: 'Citation Building',
      description: 'Create authoritative content that AI systems prefer to reference',
      icon: '📚',
    },
    {
      title: 'Real-time Monitoring',
      description: 'Track how AI platforms mention and recommend your brand',
      icon: '📊',
    },
  ];
  
  const process = [
    { step: 1, title: 'Audit', description: 'Analyze current AI visibility and identify gaps' },
    { step: 2, title: 'Strategy', description: 'Develop custom AI optimization roadmap' },
    { step: 3, title: 'Implementation', description: 'Optimize content and technical infrastructure' },
    { step: 4, title: 'Monitor', description: 'Track improvements and refine strategy' },
  ];
  
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge variant="info" className="mb-4">AI Visibility Service</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Dominate AI Search Results
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Make your brand the go-to recommendation across ChatGPT, Claude, Gemini, and other AI platforms. 
                Be present where AI makes decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/analyze">
                  <Button size="lg">Get AI Visibility Audit</Button>
                </a>
                <Button variant="outline" size="lg">Schedule Consultation</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Platforms Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Optimize for Every Major AI Platform
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform) => (
                <Card key={platform.name} hover>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{platform.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {platform.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Comprehensive AI Optimization Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Our AI Visibility Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={item.step} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 dark:bg-gray-700" />
                  )}
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Boost Your AI Visibility?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of brands that are now recommended by AI systems worldwide.
            </p>
            <Button size="lg" variant="secondary" className="shadow-lg">
              Start Your AI Journey
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
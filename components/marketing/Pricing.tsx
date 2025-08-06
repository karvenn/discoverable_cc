import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import pricingData from '@/config/pricing.json';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Choose the perfect plan to boost your online visibility
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingData.tiers.map((tier) => (
            <Card 
              key={tier.id} 
              hover 
              className={`relative flex flex-col ${tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {tier.tagline}
                </p>
                
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {tier.price.currency}{tier.price.monthly}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                
                <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                  Save {tier.price.currency}{tier.price.monthly * 2} annually
                </div>
                
                <div className="mt-6 flex justify-center gap-2">
                  {tier.highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg 
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Link href="#enquiry">
                    <Button 
                      size="lg" 
                      variant={tier.popular ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {pricingData.comparison.title}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 font-medium text-gray-900 dark:text-white">
                    Features
                  </th>
                  {pricingData.tiers.map((tier) => (
                    <th key={tier.id} className="text-center py-4 px-4 font-medium text-gray-900 dark:text-white">
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingData.comparison.features.map((feature, index) => (
                  <tr 
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-800"
                  >
                    <td className="py-4 px-4 text-gray-700 dark:text-gray-300">
                      {feature.name}
                    </td>
                    {['essentials', 'growth', 'dominance'].map((tierId) => (
                      <td key={tierId} className="text-center py-4 px-4">
                        {typeof feature[tierId as keyof typeof feature] === 'boolean' ? (
                          feature[tierId as keyof typeof feature] ? (
                            <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )
                        ) : (
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature[tierId as keyof typeof feature]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            {pricingData.faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState, FormEvent, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { getCTAContent } from '@/lib/content';
import pricingData from '@/config/pricing.json';

export function CTA() {
  const cta = getCTAContent();
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
    package: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Get package from URL params
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const packageId = params.get('package');
      if (packageId) {
        const tier = pricingData.tiers.find(t => t.id === packageId);
        if (tier) {
          setSelectedPackage(tier.name);
          setFormData(prev => ({ ...prev, package: tier.name }));
        }
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', website: '', message: '', package: '' });
          setSelectedPackage('');
        }, 5000);
      } else {
        // Handle error
        console.error('Form submission error:', data.error);
        alert(data.error || 'Failed to submit form. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="enquiry" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {cta.title}
          </h2>
          <p className="text-xl text-purple-100">
            {cta.subtitle}
          </p>
        </div>
        
        {isSubmitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
            <p className="text-purple-100">We&apos;ve received your request and will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            {selectedPackage && (
              <div className="mb-6 p-4 bg-white/10 rounded-lg">
                <p className="text-white font-semibold">Selected Package: {selectedPackage}</p>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={cta.form.namePlaceholder}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={cta.form.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder={cta.form.websitePlaceholder}
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                required
              />
            </div>
            
            <div className="mb-6">
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 mb-4"
                required
              >
                <option value="">Select a package...</option>
                {pricingData.tiers.map((tier) => (
                  <option key={tier.id} value={tier.name}>
                    {tier.name} - ${tier.price.monthly}/month
                  </option>
                ))}
              </select>
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={cta.form.messagePlaceholder}
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 resize-none"
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit"
                size="lg" 
                variant="secondary"
                className="shadow-lg hover:shadow-xl min-w-[200px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : cta.form.button}
              </Button>
            </div>
          </form>
        )}
        
        <p className="mt-6 text-center text-sm text-purple-100">
          {cta.disclaimer}
        </p>
      </div>
    </section>
  );
}
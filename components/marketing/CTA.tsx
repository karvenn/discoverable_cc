'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { getCTAContent } from '@/lib/content';

export function CTA() {
  const cta = getCTAContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - in production, this would send to your backend
    console.log('Form submitted:', formData);
    
    // Here you would typically:
    // 1. Send data to your API endpoint
    // 2. Send email notification
    // 3. Store in database
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', website: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
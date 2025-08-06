import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Boost Your Digital Presence?
        </h2>
        <p className="mt-4 text-xl text-purple-100">
          Get a free AI visibility and SEO audit report for your brand in just 24 hours.
        </p>
        
        <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
            required
          />
          <Button 
            type="submit"
            size="lg" 
            variant="secondary"
            className="shadow-lg hover:shadow-xl"
          >
            Get Free Audit
          </Button>
        </form>
        
        <p className="mt-4 text-sm text-purple-100">
          No credit card required • Results in 24 hours • 100% free
        </p>
      </div>
    </section>
  );
}
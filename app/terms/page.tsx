import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
            
            <p className="text-gray-400 mb-8">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing or using Discoverable&apos;s services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
              <p className="text-gray-300 mb-4">
                Discoverable provides:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>SEO optimization and consulting services</li>
                <li>AI visibility enhancement for search platforms</li>
                <li>Website analysis and audit reports</li>
                <li>Content optimization recommendations</li>
                <li>Performance tracking and reporting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Obligations</h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the services in compliance with all applicable laws</li>
                <li>Not engage in any activity that interferes with our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                For paid services:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Payment is due upon subscription or as specified in your service agreement</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Prices are subject to change with 30 days notice</li>
                <li>You are responsible for all applicable taxes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, 
                are the exclusive property of Discoverable and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimers</h2>
              <p className="text-gray-300 mb-4">
                Our services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Specific search engine rankings or AI visibility results</li>
                <li>Uninterrupted or error-free service</li>
                <li>That our services will meet all your requirements</li>
                <li>The accuracy or completeness of any information provided</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300">
                To the maximum extent permitted by law, Discoverable shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Indemnification</h2>
              <p className="text-gray-300">
                You agree to indemnify and hold Discoverable harmless from any claims, losses, damages, liabilities, and expenses 
                arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
              <p className="text-gray-300">
                We reserve the right to terminate or suspend your access to our services at any time, with or without cause or notice. 
                Upon termination, your right to use our services will immediately cease.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Governing Law</h2>
              <p className="text-gray-300">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Discoverable operates, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our services. 
                Your continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  <strong className="text-white">Discoverable</strong><br />
                  Email: legal@discoverable.cc<br />
                  Website: www.discoverable.cc
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <Link href="/" className="text-purple-400 hover:text-purple-300">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
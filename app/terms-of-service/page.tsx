import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-6">Last Updated: March 15, 2023</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-3">1. Agreement to Terms</h2>
                <p className="text-gray-700">
                  By accessing our website and services, you agree to be bound by these Terms of Service and all
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                  using or accessing our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">2. Use License</h2>
                <p className="text-gray-700 mb-3">
                  Permission is granted to temporarily access the materials on Challenger Classes' website for personal,
                  non-commercial use only. This is the grant of a license, not a transfer of title, and under this
                  license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>
                    Attempt to decompile or reverse engineer any software contained on Challenger Classes' website
                  </li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  This license shall automatically terminate if you violate any of these restrictions and may be
                  terminated by Challenger Classes at any time.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">3. Disclaimer</h2>
                <p className="text-gray-700">
                  The materials on Challenger Classes' website are provided on an 'as is' basis. Challenger Classes
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties
                  including, without limitation, implied warranties or conditions of merchantability, fitness for a
                  particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">4. Limitations</h2>
                <p className="text-gray-700">
                  In no event shall Challenger Classes or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on Challenger Classes' website, even if Challenger Classes or a
                  Challenger Classes authorized representative has been notified orally or in writing of the possibility
                  of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">5. Accuracy of Materials</h2>
                <p className="text-gray-700">
                  The materials appearing on Challenger Classes' website could include technical, typographical, or
                  photographic errors. Challenger Classes does not warrant that any of the materials on its website are
                  accurate, complete, or current. Challenger Classes may make changes to the materials contained on its
                  website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">6. Links</h2>
                <p className="text-gray-700">
                  Challenger Classes has not reviewed all of the sites linked to its website and is not responsible for
                  the contents of any such linked site. The inclusion of any link does not imply endorsement by
                  Challenger Classes of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">7. Modifications</h2>
                <p className="text-gray-700">
                  Challenger Classes may revise these terms of service for its website at any time without notice. By
                  using this website, you are agreeing to be bound by the then current version of these terms of
                  service.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">8. Governing Law</h2>
                <p className="text-gray-700">
                  These terms and conditions are governed by and construed in accordance with the laws of India and you
                  irrevocably submit to the exclusive jurisdiction of the courts in New Delhi, India.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">9. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-2">
                  <p className="text-gray-700">Challenger Classes</p>
                  <p className="text-gray-700">123 Education Street, Knowledge Park</p>
                  <p className="text-gray-700">New Delhi - 110001</p>
                  <p className="text-gray-700">Email: legal@challengerclasses.com</p>
                  <p className="text-gray-700">Phone: +91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


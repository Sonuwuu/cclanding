import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-6">Last Updated: March 15, 2023</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
                <p className="text-gray-700">
                  Challenger Classes ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website, use
                  our services, or communicate with us.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
                <p className="text-gray-700 mb-3">
                  We may collect information about you in a variety of ways. The information we may collect includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Personal Data:</strong> Personally identifiable information, such as your name, address,
                    email address, telephone number, and demographic information that you voluntarily give to us when
                    you register with us or when you choose to participate in various activities related to our
                    services.
                  </li>
                  <li>
                    <strong>Derivative Data:</strong> Information our servers automatically collect when you access our
                    website, such as your IP address, browser type, operating system, access times, and the pages you
                    have viewed.
                  </li>
                  <li>
                    <strong>Financial Data:</strong> Financial information, such as data related to your payment method
                    (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase
                    our services.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-3">
                  We may use the information we collect about you for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To allow you to participate in interactive features of our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To fulfill any other purpose for which you provide it</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">4. Disclosure of Your Information</h2>
                <p className="text-gray-700 mb-3">
                  We may share information we have collected about you in certain situations. Your information may be
                  disclosed as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is
                    necessary to respond to legal process, to investigate or remedy potential violations of our
                    policies, or to protect the rights, property, and safety of others, we may share your information as
                    permitted or required by any applicable law, rule, or regulation.
                  </li>
                  <li>
                    <strong>Third-Party Service Providers:</strong> We may share your information with third parties
                    that perform services for us or on our behalf, including payment processing, data analysis, email
                    delivery, hosting services, customer service, and marketing assistance.
                  </li>
                  <li>
                    <strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to
                    withdraw consent, we may share your information with third parties for marketing purposes.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">5. Security of Your Information</h2>
                <p className="text-gray-700">
                  We use administrative, technical, and physical security measures to help protect your personal
                  information. While we have taken reasonable steps to secure the personal information you provide to
                  us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">6. Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-2">
                  <p className="text-gray-700">Challenger Classes</p>
                  <p className="text-gray-700">123 Education Street, Knowledge Park</p>
                  <p className="text-gray-700">New Delhi - 110001</p>
                  <p className="text-gray-700">Email: privacy@challengerclasses.com</p>
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


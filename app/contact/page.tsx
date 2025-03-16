import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
              <span className="block text-red-500 mt-2">We're Here to Help</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Have questions about our courses or want to schedule a visit? Our team is ready to assist you with any
              inquiries you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to us through any of the following channels. We strive to respond to all
                inquiries within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Education Street, Knowledge Park, New Delhi - 110001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600">info@challengerclasses.com</p>
                    <p className="text-gray-600">admissions@challengerclasses.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday to Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Our Campus" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you as soon as possible
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Enter message subject" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>

                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our campus to experience our state-of-the-art facilities and meet our faculty
            </p>
          </div>

          <div className="h-[400px] bg-gray-200 rounded-lg">
            {/* This would be replaced with an actual map component in a real implementation */}
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our courses, admissions, and facilities
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What are the admission requirements?",
                  answer:
                    "Admission requirements vary by grade level. Generally, we require previous academic records, an entrance assessment, and a personal interview.",
                },
                {
                  question: "Do you offer scholarships?",
                  answer:
                    "Yes, we offer merit-based scholarships for students who demonstrate exceptional academic performance or financial need.",
                },
                {
                  question: "What is the student-teacher ratio?",
                  answer:
                    "We maintain a low student-teacher ratio of 15:1 to ensure personalized attention for each student.",
                },
                {
                  question: "Do you provide transportation services?",
                  answer:
                    "Yes, we offer transportation services covering major areas of the city. Please contact our office for route details.",
                },
                {
                  question: "How can I track my child's progress?",
                  answer:
                    "We provide regular progress reports and conduct parent-teacher meetings to discuss student performance and areas for improvement.",
                },
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a campus visit or to learn more about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Schedule a Visit</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


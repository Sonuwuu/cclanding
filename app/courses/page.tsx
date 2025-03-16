import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="absolute inset-0 opacity-20">
          <Image src="/placeholder.svg?height=600&width=1600" alt="Courses Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Comprehensive Courses
              <span className="block text-red-500 mt-2">Tailored for Excellence</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Discover our wide range of CBSE curriculum courses designed to help students excel academically and build
              a strong foundation for their future.
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Academic Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Classes */}
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Primary Classes"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Primary Classes (1-5)</h3>
                <p className="text-gray-600 mb-4">
                  Building a strong foundation through interactive learning methods and personalized attention.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Foundation building in core subjects</li>
                  <li>• Interactive learning methods</li>
                  <li>• Regular progress monitoring</li>
                  <li>• Personality development</li>
                </ul>
                <Link href="/courses/primary">
                  <Button className="w-full">
                    Explore Primary Classes <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Middle School */}
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Middle School" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Middle School (6-10)</h3>
                <p className="text-gray-600 mb-4">
                  Preparing students for board exams with advanced concept building and exam strategies.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Advanced concept building</li>
                  <li>• Exam preparation</li>
                  <li>• Board exam readiness</li>
                  <li>• Career guidance</li>
                </ul>
                <Link href="/courses/middle">
                  <Button className="w-full">
                    Explore Middle School <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Senior Secondary */}
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Senior Secondary"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Senior Secondary (11-12)</h3>
                <p className="text-gray-600 mb-4">
                  Specialized streams with focused preparation for board exams and competitive entrances.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Science, Commerce & Arts streams</li>
                  <li>• Entrance exam preparation</li>
                  <li>• Specialized subject focus</li>
                  <li>• Career counseling</li>
                </ul>
                <div className="grid grid-cols-3 gap-2">
                  <Link href="/courses/science">
                    <Button variant="outline" size="sm" className="w-full">
                      Science
                    </Button>
                  </Link>
                  <Link href="/courses/commerce">
                    <Button variant="outline" size="sm" className="w-full">
                      Commerce
                    </Button>
                  </Link>
                  <Link href="/courses/arts">
                    <Button variant="outline" size="sm" className="w-full">
                      Arts
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Teaching Methodology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Challenger Classes, we follow a comprehensive approach to education that focuses on conceptual
              understanding and practical application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Conceptual Learning",
                description: "Focus on building strong conceptual foundations rather than rote memorization.",
              },
              {
                title: "Regular Assessment",
                description: "Continuous evaluation through tests and assignments to track progress.",
              },
              {
                title: "Personalized Attention",
                description: "Small batch sizes to ensure individual attention to each student.",
              },
              {
                title: "Technology Integration",
                description: "Use of digital tools and resources to enhance the learning experience.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What Makes Our Courses Special</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Faculty",
                    description: "Learn from experienced educators with proven track records.",
                  },
                  {
                    title: "Comprehensive Study Material",
                    description: "Access to well-structured notes, practice papers, and reference materials.",
                  },
                  {
                    title: "Regular Parent-Teacher Meetings",
                    description: "Stay updated on your child's progress through scheduled interactions.",
                  },
                  {
                    title: "Doubt Clearing Sessions",
                    description: "Dedicated sessions to address student queries and difficulties.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="h-10 w-10 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Course Features" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students who have experienced academic growth with our courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                class: "Class 12 Science",
                quote:
                  "The structured approach and personal attention from faculty helped me achieve my dream rank in JEE.",
              },
              {
                name: "Priya Patel",
                class: "Class 12 Science",
                quote: "The comprehensive study material and regular tests were crucial for my success in NEET.",
              },
              {
                name: "Amit Kumar",
                class: "Class 10",
                quote: "The foundation course built my analytical skills and prepared me for competitive exams.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.class}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join Challenger Classes today and take the first step towards academic excellence. Our expert faculty and
            comprehensive curriculum will guide you to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Enroll Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Schedule a Free Demo Class
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240717_172631.jpg-cdbWIhMp40XC3x7saSVX442LWR96XD.jpeg"
            alt="Challenger Classes Learning Environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Students Through Quality Education
              <span className="block text-red-500 mt-2">From Darkness to Brightness</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Comprehensive CBSE coaching for classes 1st to 12th. Specialized programs for Science, Commerce, and Arts
              streams with expert faculty and proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                  Explore Courses
                </Button>
              </Link>
              {/* <Button
                variant="outline"
                className="bg-white text-black border-white hover:bg-transparent hover:text-white transition-colors px-8 py-6 text-lg"
              >
                Book a Free Session
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Academic Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive CBSE curriculum coverage with specialized attention for all academic levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primary Section */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Primary Classes (1-5)</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Foundation building in core subjects</li>
                <li>• Interactive learning methods</li>
                <li>• Regular progress monitoring</li>
                <li>• Personality development</li>
              </ul>
              {/* <Button variant="outline" className="w-full">
                Learn More
              </Button> */}
            </Card>

            {/* Middle Section */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Middle School (6-10)</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Advanced concept building</li>
                <li>• Exam preparation</li>
                <li>• Board exam readiness</li>
                <li>• Career guidance</li>
              </ul>
              {/* <Button variant="outline" className="w-full">
                Learn More
              </Button> */}
            </Card>

            {/* Senior Section */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Senior Secondary (11-12)</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Science, Commerce & Arts streams</li>
                <li>• Entrance exam preparation</li>
                <li>• Specialized subject focus</li>
                <li>• Career counseling</li>
              </ul>
              {/* <Button variant="outline" className="w-full">
                Learn More
              </Button> */}
            </Card>
          </div>
        </div>
      </section>

      {/* Stream Specialization Section */}


      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students who transformed their academic journey with Challenger Classes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                achievement: "AIR 45 in JEE Advanced",
                quote: "The structured approach and personal attention from faculty helped me achieve my dream rank.",
              },
              {
                name: "Priya Patel",
                achievement: "NEET Top 100",
                quote: "The comprehensive study material and regular tests were crucial for my success in NEET.",
              },
              {
                name: "Amit Kumar",
                achievement: "Gold Medal in Science Olympiad",
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
                      <p className="text-red-600">{testimonial.achievement}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Faculty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from experienced educators who are passionate about student success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Mr. Shyam Maurya", expertise: "Mathematics Expert", details: "M.Sc. Mathematics (JMI) with 15+ years of teaching experience" },
              { name: "Mr. Udit Gupta", expertise: "Physics Expert", details: "M.Sc. Physics (University of Delhi) with 15+ years of teaching experience" },
              { name: "Dr. Madhur Singh", expertise: "Chemistry Expert", details: "Ph.D. in Organic Chemistry wtih 10+ years of experience" },
              { name: "Mr. Abhinav Gupta", expertise: "Social Science Expert", details: "M.sc. Social Science (Delhi University) with 10+ years of experience" }
            ].map((teacher, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">{teacher.name}</h3>
                <p className="text-blue-900">{teacher.expertise}</p>
                <p className="text-gray-600 mt-2">{teacher.details}</p>
              </div>
            ))}
          </div>


          <div className="text-center mt-12">
            <Link href='/faculty'><Button className="bg-blue-900 hover:bg-blue-800">View All Faculty Members</Button></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Learning Journey?</h2>
              <p className="text-gray-300 mb-8">
                Join Challenger Classes today and take the first step towards academic excellence. Our expert faculty
                and comprehensive curriculum will guide you from darkness to brightness.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Enroll Now</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule a Consultation
                </Button>
              </div> */}
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Upcoming Batches</h3>
              <ul className="space-y-4">
                {[
                  { course: "PCM Class 12", date: "Starting April 1, 2025" },
                  { course: "PCB Class 12", date: "Starting April 1, 2025" },
                  { course: "Foundation Course (Class 11)", date: "Starting April 5, 2025" },
                ].map((batch, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{batch.course}</p>
                      <p className="text-gray-300">{batch.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {/* <Button variant="link" className="text-yellow-500 mt-4 pl-0">
                View All Batches <ChevronRight className="ml-1 h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


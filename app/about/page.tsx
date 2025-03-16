import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Award, Target, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Challenger Classes
              <span className="block text-red-500 mt-2">Our Journey of Excellence</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Learn about our mission, vision, and commitment to providing quality education that transforms lives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Our Story" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Challenger Classes was founded in 2005 with a vision to provide quality education that empowers students
                to achieve academic excellence and personal growth. What started as a small coaching center with just 25
                students has now grown into a premier educational institution serving thousands of students across
                different academic levels.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been marked by the success of our students who have gone on to secure admissions in
                prestigious institutions and build successful careers. We take pride in our role in shaping the future
                of young minds and remain committed to our founding principles of excellence, integrity, and innovation
                in education.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-blue-900">15+</h3>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-blue-900">10,000+</h3>
                  <p className="text-gray-600">Students Taught</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-blue-900">50+</h3>
                  <p className="text-gray-600">Expert Faculty</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h3 className="text-3xl font-bold text-blue-900">95%</h3>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  To provide quality education that empowers students to achieve academic excellence, develop critical
                  thinking skills, and become responsible global citizens.
                </p>
                <ul className="space-y-2">
                  {[
                    "Deliver comprehensive and engaging educational programs",
                    "Foster a supportive learning environment",
                    "Provide personalized attention to each student",
                    "Continuously innovate our teaching methodologies",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-red-600 text-white rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  To be recognized as a leading educational institution that transforms lives through quality education
                  and holistic development.
                </p>
                <ul className="space-y-2">
                  {[
                    "Create a community of lifelong learners",
                    "Set new standards in educational excellence",
                    "Prepare students for future challenges",
                    "Make quality education accessible to all",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our approach to education and student development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from teaching methods to student support.",
                icon: Award,
              },
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of honesty, ethics, and transparency in all our interactions.",
                icon: Award,
              },
              {
                title: "Innovation",
                description:
                  "We continuously evolve our teaching methodologies to incorporate the latest educational practices.",
                icon: Award,
              },
              {
                title: "Empathy",
                description: "We understand and respect the unique needs and challenges of each student.",
                icon: Award,
              },
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the dedicated professionals who lead our institution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                position: "Founder & Director",
                bio: "Ph.D. in Education with over 25 years of experience in the education sector. Passionate about transforming education through innovative teaching methods.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mrs. Sunita Sharma",
                position: "Academic Director",
                bio: "M.Sc. in Mathematics with 20 years of teaching experience. Specializes in curriculum development and academic planning.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mr. Vikram Singh",
                position: "Administrative Head",
                bio: "MBA with 15 years of experience in educational administration. Ensures smooth operation of all administrative functions.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((leader, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-blue-900 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
              <p className="text-gray-600 mb-6">
                We provide state-of-the-art facilities to create an optimal learning environment for our students. Our
                infrastructure is designed to support both academic and extracurricular activities.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Modern classrooms with audio-visual equipment",
                  "Well-equipped science and computer labs",
                  "Comprehensive library with digital resources",
                  "Comfortable study areas for self-study",
                  "Recreation zones for relaxation between classes",
                  "Wi-Fi enabled campus",
                ].map((facility, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Schedule a Campus Tour</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=300" alt="Classroom" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=300" alt="Library" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=300" alt="Computer Lab" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=300" alt="Study Area" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Parents Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from parents who have entrusted their children's education to us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mrs. Sharma",
                relation: "Parent of Rahul, Class 12",
                quote:
                  "Challenger Classes has transformed my son's approach to studies. The faculty's dedication and personalized attention have helped him excel in his board exams.",
              },
              {
                name: "Mr. Patel",
                relation: "Parent of Priya, Class 10",
                quote:
                  "The quality of education and support provided by Challenger Classes is exceptional. My daughter's confidence and academic performance have improved significantly.",
              },
              {
                name: "Mrs. Gupta",
                relation: "Parent of Amit, Class 8",
                quote:
                  "What sets Challenger Classes apart is their holistic approach to education. They focus not just on academics but also on developing important life skills.",
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
                      <p className="text-gray-600">{testimonial.relation}</p>
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
          <h2 className="text-3xl font-bold mb-6">Join the Challenger Family</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Experience the difference that quality education and personalized attention can make in your child's
            academic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Apply for Admission</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, Linkedin, Award, BookOpen, Users } from "lucide-react"

export default function FacultyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Expert Faculty
              <span className="block text-red-500 mt-2">The Pillars of Excellence</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Our team of highly qualified and experienced educators are dedicated to helping students achieve academic
              excellence and realize their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Teaching Philosophy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Challenger Classes, our faculty members are not just teachers but mentors who guide students through
              their academic journey with dedication and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Expert Knowledge",
                description:
                  "Our teachers are subject matter experts with advanced degrees and years of teaching experience.",
                icon: Award,
              },
              {
                title: "Innovative Teaching",
                description: "We employ modern teaching methodologies that make learning engaging and effective.",
                icon: BookOpen,
              },
              {
                title: "Student-Centered Approach",
                description:
                  "We focus on understanding each student's unique learning style and adapting our teaching accordingly.",
                icon: Users,
              },
            ].map((philosophy, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <philosophy.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{philosophy.title}</h3>
                  <p className="text-gray-600">{philosophy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Distinguished Faculty</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Sharma",
                position: "Physics Expert",
                qualification: "Ph.D. in Physics, IIT Delhi",
                experience: "15+ years of teaching experience",
                specialization: "Mechanics, Electromagnetism",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mrs. Priya Verma",
                position: "Mathematics Expert",
                qualification: "M.Sc. in Mathematics, Delhi University",
                experience: "12+ years of teaching experience",
                specialization: "Calculus, Algebra",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mr. Amit Khanna",
                position: "Chemistry Expert",
                qualification: "M.Sc. in Chemistry, IIT Bombay",
                experience: "10+ years of teaching experience",
                specialization: "Organic Chemistry, Physical Chemistry",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Dr. Sunita Patel",
                position: "Biology Expert",
                qualification: "Ph.D. in Microbiology, AIIMS",
                experience: "14+ years of teaching experience",
                specialization: "Human Physiology, Genetics",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mr. Vikram Singh",
                position: "English Language Expert",
                qualification: "M.A. in English Literature, JNU",
                experience: "8+ years of teaching experience",
                specialization: "Grammar, Creative Writing",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mrs. Deepa Gupta",
                position: "Commerce Expert",
                qualification: "M.Com, CA",
                experience: "11+ years of teaching experience",
                specialization: "Accountancy, Business Studies",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((faculty, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{faculty.name}</h3>
                  <p className="text-blue-900 font-medium mb-3">{faculty.position}</p>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p>{faculty.qualification}</p>
                    <p>{faculty.experience}</p>
                    <p>Specialization: {faculty.specialization}</p>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Faculty Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our faculty members have been recognized for their exceptional contributions to education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Research Publications",
                count: "50+",
                description:
                  "Our faculty members have published research papers in prestigious national and international journals.",
              },
              {
                title: "Awards & Recognition",
                count: "25+",
                description:
                  "Our teachers have received various awards for their contributions to education and teaching excellence.",
              },
              {
                title: "Student Success Rate",
                count: "95%",
                description:
                  "Our faculty has consistently helped students achieve excellent results in board and competitive exams.",
              },
              {
                title: "Years of Combined Experience",
                count: "100+",
                description:
                  "Our faculty brings a wealth of teaching experience across different educational boards and systems.",
              },
            ].map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      {achievement.count}
                    </div>
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                  </div>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Teaching Team</h2>
              <p className="text-gray-600 mb-6">
                We are always looking for passionate educators to join our team. If you are dedicated to academic
                excellence and student success, we would love to hear from you.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Qualifications</h3>
                    <p className="text-gray-600">
                      Minimum Master's degree in relevant subject with teaching experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Skills</h3>
                    <p className="text-gray-600">
                      Excellent communication, patience, and ability to connect with students
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Benefits</h3>
                    <p className="text-gray-600">
                      Competitive salary, professional development opportunities, and supportive work environment
                    </p>
                  </div>
                </div>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Apply Now</Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Join Our Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Learn from the Best</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Experience the difference that expert guidance can make in your academic journey. Schedule a free
            consultation with our faculty today.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Schedule a Consultation</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}


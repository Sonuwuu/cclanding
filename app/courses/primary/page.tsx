import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, BookOpen, Clock, Calendar, Users, Award } from "lucide-react"

export default function PrimaryCoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Primary Classes (1-5)
              <span className="block text-red-500 mt-2">Building Strong Foundations</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Our primary education program focuses on developing core skills, fostering curiosity, and building a
              strong academic foundation for young learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Enroll Now</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Primary Classes" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-gray-600 mb-6">
                Our primary education program is designed to provide a strong foundation in core subjects while
                fostering creativity, critical thinking, and social skills. We follow the CBSE curriculum with
                additional enrichment activities to ensure holistic development.
              </p>
              <div className="space-y-4">
                {[
                  "Comprehensive coverage of CBSE curriculum",
                  "Focus on developing reading, writing, and numerical skills",
                  "Interactive learning methods using digital tools",
                  "Regular assessments and progress reports",
                  "Personality development activities",
                  "Small batch sizes for personalized attention",
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Covered */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Subjects Covered</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive curriculum covers all core subjects with a focus on building strong fundamentals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                subject: "English",
                description: "Developing reading, writing, speaking, and listening skills through engaging activities.",
                icon: BookOpen,
              },
              {
                subject: "Hindi",
                description: "Building proficiency in reading and writing Hindi with proper grammar and vocabulary.",
                icon: BookOpen,
              },
              {
                subject: "Mathematics",
                description:
                  "Developing number sense, basic operations, and problem-solving skills through interactive methods.",
                icon: BookOpen,
              },
              {
                subject: "Environmental Studies",
                description:
                  "Exploring the natural and social world through observation, inquiry, and hands-on activities.",
                icon: BookOpen,
              },
              {
                subject: "General Knowledge",
                description:
                  "Expanding awareness about the world through current affairs, facts, and general information.",
                icon: BookOpen,
              },
              {
                subject: "Computer Science",
                description:
                  "Introduction to basic computer skills and digital literacy appropriate for young learners.",
                icon: BookOpen,
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-blue-900 text-white rounded-full flex items-center justify-center mr-3">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">{item.subject}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Class Schedule</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                grade: "Class 1 & 2",
                days: "Monday, Wednesday, Friday",
                timing: "3:00 PM - 5:00 PM",
                icon: Clock,
              },
              {
                grade: "Class 3",
                days: "Monday, Wednesday, Friday",
                timing: "5:00 PM - 7:00 PM",
                icon: Clock,
              },
              {
                grade: "Class 4",
                days: "Tuesday, Thursday, Saturday",
                timing: "3:00 PM - 5:00 PM",
                icon: Clock,
              },
              {
                grade: "Class 5",
                days: "Tuesday, Thursday, Saturday",
                timing: "5:00 PM - 7:00 PM",
                icon: Clock,
              },
            ].map((schedule, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 bg-red-500 text-white rounded-full flex items-center justify-center mr-3">
                      <schedule.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">{schedule.grade}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">{schedule.days}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">{schedule.timing}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p>* Weekend batches are also available. Please contact us for more information.</p>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Teaching Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in making learning fun and engaging for young minds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Learning",
                description: "We use games, activities, and visual aids to make learning engaging and memorable.",
                icon: Users,
              },
              {
                title: "Personalized Attention",
                description: "Small batch sizes ensure that each child receives individual attention and guidance.",
                icon: Users,
              },
              {
                title: "Regular Assessment",
                description: "Continuous evaluation helps track progress and identify areas that need improvement.",
                icon: Award,
              },
            ].map((approach, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <approach.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                  <p className="text-gray-600">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fee Structure</h2>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="py-4 px-6 text-left">Class</th>
                        <th className="py-4 px-6 text-left">Monthly Fee</th>
                        <th className="py-4 px-6 text-left">Quarterly Fee</th>
                        <th className="py-4 px-6 text-left">Annual Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { class: "Class 1", monthly: "₹2,500", quarterly: "₹7,000", annual: "₹25,000" },
                        { class: "Class 2", monthly: "₹2,500", quarterly: "₹7,000", annual: "₹25,000" },
                        { class: "Class 3", monthly: "₹3,000", quarterly: "₹8,500", annual: "₹30,000" },
                        { class: "Class 4", monthly: "₹3,000", quarterly: "₹8,500", annual: "₹30,000" },
                        { class: "Class 5", monthly: "₹3,500", quarterly: "₹10,000", annual: "₹35,000" },
                      ].map((fee, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="py-4 px-6 border-b">{fee.class}</td>
                          <td className="py-4 px-6 border-b">{fee.monthly}</td>
                          <td className="py-4 px-6 border-b">{fee.quarterly}</td>
                          <td className="py-4 px-6 border-b">{fee.annual}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-gray-600 text-sm">
              <p>* Registration fee of ₹1,000 is applicable for new admissions.</p>
              <p>* Study materials are included in the fee.</p>
              <p>* Sibling discount of 10% is available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Give Your Child the Best Start</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Enroll your child in our primary classes program and watch them build a strong foundation for future
            academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Enroll Now</Button>
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


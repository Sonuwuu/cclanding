import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, BookOpen, Clock, Calendar, Users, Award } from "lucide-react"

export default function MiddleCoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Middle School (6-10)
              <span className="block text-red-500 mt-2">Building Strong Foundations</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Our middle school program focuses on developing advanced concepts, preparing students for board exams, and
              building a strong foundation for higher education.
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
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Middle School Classes"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-gray-600 mb-6">
                Our middle school program is designed to provide a strong foundation in core subjects while preparing
                students for board examinations. We follow the CBSE curriculum with additional focus on developing
                analytical thinking and problem-solving skills.
              </p>
              <div className="space-y-4">
                {[
                  "Comprehensive coverage of CBSE curriculum for classes 6-10",
                  "Special focus on Mathematics, Science, and English",
                  "Regular assessments and mock tests for board exam preparation",
                  "Personalized attention with small batch sizes",
                  "Regular parent-teacher meetings to track progress",
                  "Career guidance and counseling for future academic choices",
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
                subject: "Mathematics",
                description:
                  "Developing strong problem-solving skills and mathematical reasoning through comprehensive coverage of algebra, geometry, and arithmetic.",
                icon: BookOpen,
              },
              {
                subject: "Science",
                description:
                  "Building a strong foundation in Physics, Chemistry, and Biology with practical applications and experiments.",
                icon: BookOpen,
              },
              {
                subject: "English",
                description:
                  "Enhancing language skills through grammar, literature, and creative writing to improve communication abilities.",
                icon: BookOpen,
              },
              {
                subject: "Social Studies",
                description:
                  "Exploring history, geography, civics, and economics to develop a well-rounded understanding of society.",
                icon: BookOpen,
              },
              {
                subject: "Hindi",
                description:
                  "Developing proficiency in reading, writing, and speaking Hindi with proper grammar and vocabulary.",
                icon: BookOpen,
              },
              {
                subject: "Computer Science",
                description: "Introduction to programming concepts, digital literacy, and computer applications.",
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
                grade: "Class 6",
                days: "Monday, Wednesday, Friday",
                timing: "3:00 PM - 5:30 PM",
                icon: Clock,
              },
              {
                grade: "Class 7",
                days: "Monday, Wednesday, Friday",
                timing: "5:30 PM - 8:00 PM",
                icon: Clock,
              },
              {
                grade: "Class 8",
                days: "Tuesday, Thursday, Saturday",
                timing: "3:00 PM - 5:30 PM",
                icon: Clock,
              },
              {
                grade: "Class 9 & 10",
                days: "Tuesday, Thursday, Saturday, Sunday",
                timing: "5:30 PM - 8:30 PM",
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
            <p>* Special weekend batches are also available for students with extracurricular commitments.</p>
          </div>
        </div>
      </section>

      {/* Board Exam Preparation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Board Exam Preparation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our specialized program for Class 9 and 10 students to excel in CBSE board examinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Study Material",
                description:
                  "Well-structured notes, practice papers, and reference materials covering the entire CBSE syllabus.",
                icon: BookOpen,
              },
              {
                title: "Regular Mock Tests",
                description:
                  "Periodic assessments in board exam pattern to build exam temperament and time management skills.",
                icon: Award,
              },
              {
                title: "Doubt Clearing Sessions",
                description:
                  "Dedicated sessions to address student queries and difficulties in understanding concepts.",
                icon: Users,
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
                        { class: "Class 6", monthly: "₹3,500", quarterly: "₹10,000", annual: "₹35,000" },
                        { class: "Class 7", monthly: "₹3,500", quarterly: "₹10,000", annual: "₹35,000" },
                        { class: "Class 8", monthly: "₹4,000", quarterly: "₹11,500", annual: "₹40,000" },
                        { class: "Class 9", monthly: "₹4,500", quarterly: "₹13,000", annual: "₹45,000" },
                        { class: "Class 10", monthly: "₹5,000", quarterly: "₹14,500", annual: "₹50,000" },
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
              <p>* Registration fee of ₹1,500 is applicable for new admissions.</p>
              <p>* Study materials are included in the fee.</p>
              <p>* Additional fee for special board exam preparation modules for Class 9 and 10.</p>
              <p>* Sibling discount of 10% is available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prepare for Academic Success</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Enroll your child in our middle school program and help them build a strong foundation for future academic
            challenges.
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


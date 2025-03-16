import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, FileText, Video, Download, CheckCircle, ChevronRight } from "lucide-react"

export default function StudyMaterialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Study Materials
              <span className="block text-red-500 mt-2">For Academic Excellence</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Access our carefully crafted study materials designed to help students master concepts, practice
              effectively, and excel in their examinations.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Explore Materials</Button>
          </div>
        </div>
      </section>

      {/* Study Material Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Study Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a variety of learning resources to support different learning styles and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Textbooks & Notes",
                description:
                  "Comprehensive study notes and textbooks covering the entire CBSE curriculum with clear explanations and examples.",
                icon: BookOpen,
              },
              {
                title: "Practice Papers",
                description:
                  "Extensive collection of practice papers, previous year questions, and mock tests for exam preparation.",
                icon: FileText,
              },
              {
                title: "Video Lectures",
                description: "Recorded video lectures explaining complex concepts in a simple and engaging manner.",
                icon: Video,
              },
            ].map((resource, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class-wise Materials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Class-wise Study Materials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                level: "Primary (Class 1-5)",
                materials: ["Illustrated textbooks", "Activity worksheets", "Interactive learning kits"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                level: "Middle School (Class 6-10)",
                materials: ["Comprehensive notes", "Practice workbooks", "Exam preparation guides"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                level: "Science Stream (11-12)",
                materials: ["Subject-specific guides", "Lab manuals", "JEE/NEET preparation material"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                level: "Commerce Stream (11-12)",
                materials: ["Case studies", "Practical problem sets", "CA/CS foundation material"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                level: "Arts Stream (11-12)",
                materials: ["Subject compilations", "Essay guides", "Reference materials"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                level: "Competitive Exams",
                materials: ["Specialized preparation guides", "Mock test series", "Previous year papers"],
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.level}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{category.level}</h3>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    {category.materials.map((material, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    View Materials <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our most popular and highly-rated study materials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Complete Physics Formula Handbook",
                description:
                  "A comprehensive collection of all important physics formulas for Class 11 and 12 with examples and applications.",
                type: "PDF",
                size: "5.2 MB",
                downloads: "15,000+",
              },
              {
                title: "Mathematics Problem Solving Techniques",
                description:
                  "Learn effective strategies and shortcuts for solving complex mathematical problems quickly and accurately.",
                type: "PDF",
                size: "4.8 MB",
                downloads: "12,500+",
              },
              {
                title: "Chemistry Reaction Mechanisms",
                description:
                  "Detailed explanations of organic chemistry reaction mechanisms with step-by-step illustrations.",
                type: "PDF",
                size: "6.3 MB",
                downloads: "10,200+",
              },
              {
                title: "Biology Diagrams Collection",
                description: "High-quality labeled diagrams covering all important biological structures and systems.",
                type: "PDF",
                size: "8.5 MB",
                downloads: "9,800+",
              },
            ].map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-md text-center">
                      <p className="font-bold">{resource.type}</p>
                      <p className="text-sm text-gray-500">{resource.size}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">{resource.downloads} downloads</p>
                    <Button className="bg-blue-900 hover:bg-blue-800">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Learning Platform */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Digital Learning Platform"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Digital Learning Platform</h2>
              <p className="text-gray-600 mb-6">
                Access all our study materials anytime, anywhere through our digital learning platform. Our platform
                offers a seamless learning experience with interactive features and regular updates.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "24/7 access to all study materials and resources",
                  "Interactive quizzes and self-assessment tools",
                  "Video lectures with expert explanations",
                  "Progress tracking and performance analytics",
                  "Discussion forums for doubt clearing",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white">Access Digital Platform</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Study Material Subscription Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that best suits your learning needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Plan",
                price: "₹1,999",
                period: "per year",
                features: [
                  "Access to basic study notes",
                  "Monthly practice papers",
                  "Limited video lectures",
                  "Email support",
                ],
                recommended: false,
              },
              {
                title: "Premium Plan",
                price: "₹3,999",
                period: "per year",
                features: [
                  "Complete study materials",
                  "Weekly practice papers",
                  "Full access to video lectures",
                  "Doubt clearing sessions",
                  "Performance analytics",
                ],
                recommended: true,
              },
              {
                title: "Elite Plan",
                price: "₹5,999",
                period: "per year",
                features: [
                  "All Premium features",
                  "Personalized study plan",
                  "One-on-one mentoring",
                  "Mock tests with analysis",
                  "Competitive exam preparation",
                ],
                recommended: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-lg transition-all ${plan.recommended ? "border-2 border-blue-900 relative" : ""}`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-blue-900 text-white px-4 py-1 text-sm font-bold">
                    RECOMMENDED
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500"> {plan.period}</span>
                  </div>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.recommended ? "bg-blue-900 hover:bg-blue-800" : ""}`}>
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Enhance Your Learning Experience</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Access our comprehensive study materials and take your academic performance to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Subscribe Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Request Sample Materials
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


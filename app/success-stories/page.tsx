import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Quote, Award, TrendingUp, Star } from "lucide-react"

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
              <span className="block text-red-500 mt-2">Our Pride, Our Inspiration</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Discover the inspiring journeys of our students who have achieved remarkable success in academics and
              beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse of our students' remarkable accomplishments over the years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "JEE Advanced",
                count: "500+",
                description: "Students qualified for IITs",
                icon: Award,
              },
              {
                title: "NEET",
                count: "450+",
                description: "Students selected for medical colleges",
                icon: Award,
              },
              {
                title: "Board Exams",
                count: "1000+",
                description: "Students scored above 90%",
                icon: TrendingUp,
              },
              {
                title: "Olympiads",
                count: "200+",
                description: "National & international winners",
                icon: Star,
              },
            ].map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                  <p className="text-3xl font-bold text-red-600 mb-2">{achievement.count}</p>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Success Stories</h2>

          <div className="space-y-12">
            {[
              {
                name: "Rahul Sharma",
                achievement: "AIR 45 in JEE Advanced",
                year: "2023",
                college: "IIT Delhi - Computer Science Engineering",
                quote:
                  "The structured approach and personal attention from faculty at Challenger Classes helped me achieve my dream rank. The regular mock tests and problem-solving sessions were particularly helpful in building my confidence.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Priya Patel",
                achievement: "NEET Top 100",
                year: "2022",
                college: "AIIMS Delhi - MBBS",
                quote:
                  "The comprehensive study material and regular tests at Challenger Classes were crucial for my success in NEET. The faculty's guidance helped me develop effective study strategies and time management skills.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Amit Kumar",
                achievement: "Gold Medal in International Science Olympiad",
                year: "2023",
                college: "Class 10 student",
                quote:
                  "The foundation course at Challenger Classes built my analytical skills and prepared me for competitive exams. The emphasis on conceptual understanding rather than rote learning made all the difference.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-full min-h-[300px] md:min-h-0">
                    <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                  </div>
                  <div className="col-span-2 p-6">
                    <div className="flex flex-col h-full">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                        <p className="text-red-600 font-medium mb-1">{story.achievement}</p>
                        <p className="text-gray-600 mb-4">
                          {story.college} | {story.year}
                        </p>
                      </div>
                      <div className="flex mb-4">
                        <Quote className="h-8 w-8 text-blue-900 mr-2 flex-shrink-0" />
                        <p className="text-gray-600 italic">{story.quote}</p>
                      </div>
                      <div className="mt-auto">
                        <Button className="bg-blue-900 hover:bg-blue-800">Read Full Story</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Year-wise Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A timeline of our students' success over the years</p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2023",
                achievements: [
                  "45 students qualified for IITs",
                  "62 students selected for NITs",
                  "38 students cleared NEET",
                  "120+ students scored above 90% in board exams",
                ],
              },
              {
                year: "2022",
                achievements: [
                  "40 students qualified for IITs",
                  "55 students selected for NITs",
                  "35 students cleared NEET",
                  "110+ students scored above 90% in board exams",
                ],
              },
              {
                year: "2021",
                achievements: [
                  "38 students qualified for IITs",
                  "50 students selected for NITs",
                  "32 students cleared NEET",
                  "100+ students scored above 90% in board exams",
                ],
              },
            ].map((yearData, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      {yearData.year}
                    </div>
                    <h3 className="text-2xl font-bold">Academic Year {yearData.year}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {yearData.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <Award className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Achievers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear directly from our students about their experience at Challenger Classes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Vikram Singh",
                achievement: "IIT Bombay - Electrical Engineering",
                quote:
                  "The faculty at Challenger Classes not only helped me with academics but also with developing the right mindset for competitive exams.",
              },
              {
                name: "Neha Gupta",
                achievement: "AIIMS Delhi - MBBS",
                quote:
                  "The personalized attention and doubt-clearing sessions were instrumental in my NEET preparation. I couldn't have done it without Challenger Classes.",
              },
              {
                name: "Arjun Mehta",
                achievement: "CBSE Class 12 - 98.6%",
                quote:
                  "The study material and test series provided by Challenger Classes were comprehensive and helped me score well in my board exams.",
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

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Moments of celebration and achievement</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Success+Moment+${index + 1}`}
                  alt={`Success Moment ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-blue-900 hover:bg-blue-800">View More Photos</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Be Our Next Success Story</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join Challenger Classes and embark on your journey to academic excellence and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">Enroll Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


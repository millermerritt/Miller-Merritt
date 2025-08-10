import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    age: 26,
    location: "Los Angeles, CA",
    rating: 5,
    text: "I've tried everything for my acne, but nothing worked until I found Clerra. The combination of ClearRoot and ClearGel completely transformed my skin in just 6 weeks. I finally feel confident going makeup-free!",
    image: "/placeholder.svg?height=80&width=80",
    verified: true,
  },
  {
    id: 2,
    name: "David Chen",
    age: 29,
    location: "New York, NY",
    rating: 5,
    text: "As someone who struggled with adult acne, I was skeptical about supplements. But ClearRoot really works! My skin is clearer than it's been in years, and the ClearGlow supplement gives me that healthy glow.",
    image: "/placeholder.svg?height=80&width=80",
    verified: true,
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    age: 23,
    location: "Miami, FL",
    rating: 5,
    text: "The science behind Clerra's approach made sense to me. Treating acne from both inside and outside was exactly what my skin needed. My dermatologist even asked what I was using because the results were so impressive!",
    image: "/placeholder.svg?height=80&width=80",
    verified: true,
  },
  {
    id: 4,
    name: "Alex Johnson",
    age: 31,
    location: "Seattle, WA",
    rating: 5,
    text: "After years of harsh treatments that dried out my skin, Clerra's natural approach was a game-changer. My skin is not only clear but also healthy and glowing. I wish I had found this sooner!",
    image: "/placeholder.svg?height=80&width=80",
    verified: true,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their Clerra experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-2xl p-8 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-sage-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">"{testimonial.text}"</blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-sage-600 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    Age {testimonial.age} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-sage-100 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-sage-600 rounded-full border-2 border-white flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">★</span>
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-sage-700 ml-2">4.8/5 stars from 1,200+ verified reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

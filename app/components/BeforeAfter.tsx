"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const transformations = [
  {
    id: 1,
    name: "Sarah M.",
    age: 24,
    timeframe: "8 weeks",
    before: "/acne-before-treatment.png",
    after: "/clear-skin-after-treatment.png",
    story:
      "After struggling with hormonal acne for years, Clerra's complete system finally gave me the clear skin I've always wanted.",
  },
  {
    id: 2,
    name: "Michael R.",
    age: 28,
    timeframe: "6 weeks",
    before: "/male-acne-before.png",
    after: "/male-clear-skin-after.png",
    story: "The combination of internal and external treatment made all the difference. My confidence is back!",
  },
  {
    id: 3,
    name: "Jessica L.",
    age: 22,
    timeframe: "10 weeks",
    before: "/placeholder.svg?height=300&width=300",
    after: "/placeholder.svg?height=300&width=300",
    story: "Even my dermatologist was impressed with the results. Clerra exceeded all my expectations.",
  },
]

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  const currentTransformation = transformations[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sand-50 relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-sand-texture opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-sm">
            <Waves className="w-4 h-4 text-ocean-600" />
            <span className="text-sm font-medium text-ocean-700">Real Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Real Results from Real People</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the transformative power of our comprehensive acne treatment system, naturally effective like the
            ocean's healing touch.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-sand-50 via-cream-50 to-ocean-50 rounded-3xl p-8 lg:p-12 shadow-xl border border-sand-200">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Before/After Images */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Before</h4>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-sand-200">
                      <Image
                        src={currentTransformation.before || "/placeholder.svg"}
                        alt={`${currentTransformation.name} before treatment`}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-sage-600 mb-3 uppercase tracking-wide">After</h4>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-sage-300">
                      <Image
                        src={currentTransformation.after || "/placeholder.svg"}
                        alt={`${currentTransformation.name} after treatment`}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentTransformation.name}</h3>
                  <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
                    <span>Age {currentTransformation.age}</span>
                    <span>•</span>
                    <span className="bg-gradient-to-r from-sage-100 to-ocean-100 text-sage-700 px-3 py-1 rounded-full font-medium border border-sage-200">
                      {currentTransformation.timeframe}
                    </span>
                  </div>
                </div>

                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-8 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-sand-200">
                  "{currentTransformation.story}"
                </blockquote>

                {/* Navigation */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevSlide}
                    className="rounded-full w-10 h-10 p-0 bg-white/80 backdrop-blur-sm border-sand-300 hover:bg-sand-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  <div className="flex gap-2">
                    {transformations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-gradient-to-r from-sage-600 to-ocean-600 scale-125"
                            : "bg-sand-300 hover:bg-sand-400"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextSlide}
                    className="rounded-full w-10 h-10 p-0 bg-white/80 backdrop-blur-sm border-sand-300 hover:bg-sand-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

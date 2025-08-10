import { Button } from "@/components/ui/button"
import { ArrowRight, Waves } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-sand-50 via-cream-50 to-ocean-50 pt-20 pb-16 overflow-hidden">
      {/* Beach-inspired background elements */}
      <div className="absolute inset-0 bg-sand-texture opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-wave-pattern"></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-ocean-200 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 left-20 w-3 h-3 bg-sand-300 rounded-full animate-wave opacity-40"></div>
      <div className="absolute bottom-32 right-32 w-5 h-5 bg-sage-200 rounded-full animate-float opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <Waves className="w-4 h-4 text-ocean-600" />
              <span className="text-sm font-medium text-ocean-700">Natural • Clean • Effective</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Natural Acne Support
              <span className="block bg-gradient-to-r from-sage-600 to-ocean-600 bg-clip-text text-transparent">
                Clear Skin from Within
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl">
              Science-backed skincare solutions combining internal supplements with targeted topical treatments for
              comprehensive acne care, inspired by nature's purity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-ocean-400 text-ocean-700 hover:bg-ocean-50 px-8 py-3 text-lg bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Product Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sand-200 hover:border-sage-300">
                  <Image
                    src="/clearroot-product.png"
                    alt="ClearRoot Vitamin A Softgels"
                    width={150}
                    height={200}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-900">ClearRoot</h3>
                  <p className="text-sm text-gray-600">Vitamin A Softgels</p>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sand-200 hover:border-ocean-300">
                  <Image
                    src="/cleargel-product.png"
                    alt="ClearGel Adapalene Treatment"
                    width={150}
                    height={200}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-900">ClearGel</h3>
                  <p className="text-sm text-gray-600">Adapalene 0.1%</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-sand-200 hover:border-sage-300">
                  <Image
                    src="/clearglow-product.png"
                    alt="ClearGlow Skin Supplement"
                    width={150}
                    height={200}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="font-semibold text-gray-900">ClearGlow</h3>
                  <p className="text-sm text-gray-600">Skin Health Supplement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift, Waves, Shell } from "lucide-react"

export default function EmailSignup() {
  return (
    <section className="py-20 bg-gradient-to-br from-ocean-600 via-sage-600 to-ocean-700 relative overflow-hidden">
      {/* Beach-inspired background elements */}
      <div className="absolute inset-0 bg-wave-pattern opacity-20"></div>
      <div className="absolute top-10 left-10 opacity-30">
        <Shell className="w-12 h-12 text-white animate-float" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-30">
        <Waves className="w-16 h-16 text-white animate-wave" />
      </div>
      <div className="absolute top-32 right-32 opacity-20">
        <Shell className="w-8 h-8 text-white animate-float" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Join the Clear Skin Club</h2>
            <p className="text-xl text-white/90 mb-2">
              Get exclusive skincare tips, early access to new products, and special discounts
            </p>
            <p className="text-lg text-white/80">
              Like finding treasures on the beach, discover the secrets to naturally clear skin
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Gift className="w-5 h-5 text-sage-600" />
              <span className="text-sage-600 font-semibold">Get 15% off your first order</span>
            </div>

            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-12 text-lg border-sand-300 focus:border-sage-500 focus:ring-sage-500 bg-white/80 backdrop-blur-sm"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-sage-600 to-ocean-600 hover:from-sage-700 hover:to-ocean-700 text-white px-8 h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Now
                </Button>
              </div>
            </form>

            <p className="text-sm text-gray-600 mt-4">
              By subscribing, you agree to our privacy policy. Unsubscribe at any time.
            </p>

            <div className="flex items-center justify-center gap-8 mt-6 pt-6 border-t border-sand-200">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-sage-600 to-ocean-600 bg-clip-text text-transparent">
                  15K+
                </div>
                <div className="text-sm text-gray-600">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-sage-600 to-ocean-600 bg-clip-text text-transparent">
                  Weekly
                </div>
                <div className="text-sm text-gray-600">Tips & Advice</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-sage-600 to-ocean-600 bg-clip-text text-transparent">
                  Exclusive
                </div>
                <div className="text-sm text-gray-600">Offers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

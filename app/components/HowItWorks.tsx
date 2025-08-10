import { ArrowRight, Pill, Droplets, Sparkles, Shell } from "lucide-react"

const steps = [
  {
    icon: Pill,
    title: "Internal Support",
    description:
      "ClearRoot provides essential Vitamin A to regulate oil production and support healthy skin cell turnover from within.",
    color: "bg-gradient-to-br from-sage-100 to-sage-200 text-sage-700",
    borderColor: "border-sage-300",
  },
  {
    icon: Droplets,
    title: "External Treatment",
    description:
      "ClearGel delivers targeted adapalene treatment to unclog pores, prevent breakouts, and accelerate skin renewal.",
    color: "bg-gradient-to-br from-ocean-100 to-ocean-200 text-ocean-700",
    borderColor: "border-ocean-300",
  },
  {
    icon: Sparkles,
    title: "Enhanced Glow",
    description:
      "ClearGlow supplements provide antioxidants and nutrients to protect, nourish, and enhance your skin's natural radiance.",
    color: "bg-gradient-to-br from-sand-100 to-sand-200 text-sand-700",
    borderColor: "border-sand-300",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-sand-50 via-cream-50 to-ocean-50 relative overflow-hidden"
    >
      {/* Beach-inspired background elements */}
      <div className="absolute inset-0 bg-sand-texture opacity-30"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-wave-pattern transform rotate-180"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-wave-pattern"></div>

      {/* Floating shells */}
      <div className="absolute top-20 left-10 opacity-20">
        <Shell className="w-8 h-8 text-sand-400 animate-float" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-20">
        <Shell className="w-6 h-6 text-ocean-400 animate-wave" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-sm">
            <Shell className="w-4 h-4 text-ocean-600" />
            <span className="text-sm font-medium text-ocean-700">Natural Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-sage-700 mb-2 font-semibold">Internal + External = Clear Skin</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach targets acne from multiple angles for faster, more effective results, naturally
            inspired by the ocean's purity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${step.color} mb-6 shadow-lg border-2 ${step.borderColor}`}
                >
                  <step.icon className="w-10 h-10" />
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-sage-600 to-ocean-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-sand-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-6 lg:-right-8">
                  <ArrowRight className="w-6 h-6 text-sage-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-sand-200">
            <span className="text-sm font-medium text-gray-700">Results typically seen in</span>
            <span className="bg-gradient-to-r from-sage-600 to-ocean-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-sm">
              4-6 weeks
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

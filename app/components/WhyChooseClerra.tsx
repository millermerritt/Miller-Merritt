import { Shield, Microscope, Leaf, Award, Users, Clock } from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "FDA-Registered Manufacturing",
    description: "All products manufactured in FDA-registered facilities following strict quality standards.",
  },
  {
    icon: Microscope,
    title: "Science-Backed Formulas",
    description: "Every ingredient is clinically researched and proven effective for acne treatment.",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Clean, natural formulations without harsh chemicals or unnecessary additives.",
  },
  {
    icon: Award,
    title: "Dermatologist Approved",
    description: "Recommended by skincare professionals and dermatologists nationwide.",
  },
  {
    icon: Users,
    title: "10,000+ Happy Customers",
    description: "Join thousands who have transformed their skin with our proven system.",
  },
  {
    icon: Clock,
    title: "90-Day Money Back",
    description: "Try risk-free with our satisfaction guarantee. See results or get your money back.",
  },
]

export default function WhyChooseClerra() {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 to-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Clerra?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the highest quality, most effective acne solutions backed by science and
            trusted by professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-sage-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm">
            <Shield className="w-5 h-5 text-sage-600" />
            <span className="text-sm font-medium text-gray-700">Trusted by over 10,000 customers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}

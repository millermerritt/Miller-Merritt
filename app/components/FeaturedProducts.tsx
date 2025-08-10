import { Button } from "@/components/ui/button"
import { Star, Sparkles } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "ClearRoot",
    subtitle: "Vitamin A Softgels",
    description: "Natural Accutane alternative with bioavailable Vitamin A for clear skin from within.",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 324,
    image: "/clearroot-product.png", // Updated image property
    badge: "Best Seller",
    badgeColor: "bg-gradient-to-r from-sage-500 to-sage-600",
  },
  {
    id: 2,
    name: "ClearGel",
    subtitle: "Adapalene 0.1% Gel",
    description: "Prescription-strength retinoid treatment for targeted acne prevention and skin renewal.",
    price: 34.99,
    rating: 4.7,
    reviews: 189,
    image: "/cleargel-product.png",
    badge: "Dermatologist Recommended",
    badgeColor: "bg-gradient-to-r from-ocean-500 to-ocean-600",
  },
  {
    id: 3,
    name: "ClearGlow",
    subtitle: "Skin Health Supplement",
    description: "Comprehensive blend of vitamins, minerals, and antioxidants for radiant, healthy skin.",
    price: 39.99,
    rating: 4.6,
    reviews: 156,
    image: "/clearglow-product.png",
    badge: "New Formula",
    badgeColor: "bg-gradient-to-r from-sand-500 to-sand-600",
  },
]

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-sand-50 relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-sand-texture opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-sage-600" />
            <span className="text-sm font-medium text-sage-700">Our Complete System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our science-backed trio works together to target acne from multiple angles for comprehensive skin
            transformation, naturally and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl border border-sand-200 hover:border-sage-300 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className={`${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-br-2xl inline-block shadow-sm`}
                >
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="p-6 pb-4">
                <div className="relative bg-gradient-to-br from-sand-50 to-cream-50 rounded-2xl p-6 mb-4 group-hover:from-sage-50 group-hover:to-ocean-50 transition-all duration-500">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={250}
                    height={300}
                    className="w-full h-64 object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="px-6 pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-sand-400 text-sand-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sage-600 font-medium mb-2">{product.subtitle}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-sage-600 to-sage-700 hover:from-sage-700 hover:to-sage-800 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-ocean-400 text-ocean-700 hover:bg-ocean-50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}

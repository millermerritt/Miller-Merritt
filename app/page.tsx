import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import HowItWorks from "./components/HowItWorks"
import BeforeAfter from "./components/BeforeAfter"
import WhyChooseClerra from "./components/WhyChooseClerra"
import Testimonials from "./components/Testimonials"
import EmailSignup from "./components/EmailSignup"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      <BeforeAfter />
      <WhyChooseClerra />
      <Testimonials />
      <EmailSignup />
    </main>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clerra - Natural Acne Support | Clear Skin from Within",
  description:
    "Discover Clerra's science-backed acne solutions including ClearRoot, ClearGel, and ClearGlow. Natural ingredients for clear, healthy skin.",
  keywords: "acne treatment, natural skincare, vitamin A, adapalene, skin supplements",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { EnrollmentForm } from "@/components/enrollment-form"
import { CareersForm } from "@/components/careers-form"
import { Footer } from "@/components/footer"
import { Star, Heart, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      
      <div className="relative mx-auto my-10 max-w-[950px] rounded-[50px] border-8 border-[var(--logo-purple)] bg-gradient-to-br from-white via-[#f8faff] to-[#f0f8ff] p-6 shadow-[20px_20px_0px_var(--logo-teal)] md:p-10">
        {/* Decorative floating elements around the container */}
        <div className="pointer-events-none absolute -left-8 top-20 hidden lg:block">
          <div className="animate-float rounded-full bg-[var(--logo-yellow)] p-3 shadow-lg">
            <Star className="h-6 w-6 text-[var(--logo-navy)]" />
          </div>
        </div>
        <div className="pointer-events-none absolute -right-6 top-40 hidden lg:block">
          <div className="animate-float-reverse rounded-full bg-[var(--logo-orange)] p-3 shadow-lg">
            <Heart className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="pointer-events-none absolute -left-5 bottom-32 hidden lg:block">
          <div className="animate-sparkle rounded-full bg-[var(--logo-teal)] p-3 shadow-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </div>
        
        <AboutSection />
        
        <div className="my-10 flex items-center justify-center gap-4">
          <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-transparent via-[var(--logo-teal)] to-transparent" />
          <Star className="h-6 w-6 text-[var(--logo-yellow)]" />
          <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-transparent via-[var(--logo-teal)] to-transparent" />
        </div>
        
        <EnrollmentForm />
        
        <div className="my-10 flex items-center justify-center gap-4">
          <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-transparent via-[var(--logo-purple)] to-transparent" />
          <Heart className="h-6 w-6 text-[var(--logo-orange)]" />
          <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-transparent via-[var(--logo-purple)] to-transparent" />
        </div>
        
        <CareersForm />
      </div>
      
      <Footer />
    </div>
  )
}

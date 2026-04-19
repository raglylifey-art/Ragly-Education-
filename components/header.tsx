import Image from "next/image"
import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="relative overflow-hidden border-b-[10px] border-[var(--logo-teal)] bg-gradient-to-br from-white via-[#f0f8ff] to-[#e8f0ff] px-5 py-12 text-center md:py-16">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--logo-teal)]/10" />
        <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-[var(--logo-purple)]/10" />
        <div className="absolute -bottom-10 left-1/4 h-40 w-40 rounded-full bg-[var(--logo-yellow)]/15" />
        <div className="absolute bottom-20 right-10 h-24 w-24 rounded-full bg-[var(--logo-green)]/10" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="animate-pulse-glow mb-4 rounded-2xl bg-white p-3 shadow-xl">
          <Image
            src="/logo.png"
            alt="Ragly Education Center Logo"
            width={180}
            height={180}
            className="h-auto w-[140px] md:w-[180px]"
            priority
          />
        </div>
        
        <p className="mx-auto mt-2 max-w-md rounded-full bg-white/90 px-6 py-3 text-lg italic text-[var(--logo-navy)] shadow-md backdrop-blur-sm md:text-xl">
          {'"Where every child\'s story takes flight!"'}
        </p>
        
        <div className="mt-6 flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-[var(--logo-teal)]" />
          <span className="text-sm font-semibold text-[var(--logo-purple)]">Missouri Daycare Services</span>
          <Sparkles className="h-5 w-5 text-[var(--logo-teal)]" />
        </div>
      </div>
    </header>
  )
}

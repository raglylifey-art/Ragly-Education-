"use client"

import Link from "next/link"
import { Sparkles, Heart, Star, Rocket } from "lucide-react"

const navLinks = [
  { href: "#about", label: "Why Us?", icon: Sparkles, color: "bg-[var(--logo-purple)]" },
  { href: "#enroll", label: "Enrollment", icon: Rocket, color: "bg-[var(--logo-teal)]" },
  { href: "#careers", label: "Careers", icon: Star, color: "bg-[var(--logo-yellow)]" },
  { href: "#contact", label: "Contact", icon: Heart, color: "bg-[var(--logo-orange)]" },
]

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-3 bg-gradient-to-r from-[#e8f4ff] via-white to-[#f0e8ff] p-4 shadow-[0_4px_20px_rgba(74,44,122,0.12)] md:gap-4">
      {navLinks.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-center gap-2 rounded-full border-3 border-[var(--logo-purple)] bg-white px-4 py-2 font-[family-name:var(--font-cherry-bomb)] text-sm text-[var(--logo-purple)] shadow-[4px_4px_0px_var(--logo-teal)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[6px_6px_0px_var(--logo-yellow)] md:px-5 md:py-2.5 md:text-base"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className={`${link.color} rounded-full p-1.5 text-white transition-transform group-hover:rotate-12 group-hover:scale-110`}>
            <link.icon className="h-4 w-4" />
          </span>
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

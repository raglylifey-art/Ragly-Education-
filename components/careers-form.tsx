"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Star, User, Briefcase, MessageSquare, Sparkles } from "lucide-react"

export function CareersForm() {
  const [formData, setFormData] = useState({
    applicantName: "",
    position: "Lead_Teacher",
    experience: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Job Application - Ragly Education Center")
    const body = encodeURIComponent(
      `Applicant Name: ${formData.applicantName}\n` +
      `Position Desired: ${formData.position}\n` +
      `Experience with Children: ${formData.experience}`
    )
    window.location.href = `mailto:fransotaS.raglyEducation@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="careers"
      className="relative overflow-hidden rounded-[30px] border-4 border-[var(--logo-purple)] bg-gradient-to-br from-[#f0e8ff] via-[#f8f0ff] to-[#fff8e8] p-6 shadow-xl md:p-8"
    >
      {/* Decorative corner shapes */}
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--logo-purple)]/20" />
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[var(--logo-yellow)]/25" />
      
      <div className="relative z-10">
        <div className="mb-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--logo-yellow)] to-[var(--logo-orange)] px-4 py-2 text-white shadow-lg">
            <Star className="h-5 w-5" />
            <span className="font-bold">Be a Star Teacher</span>
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="mt-2 text-center font-[family-name:var(--font-cherry-bomb)] text-3xl text-[var(--logo-purple)] md:text-4xl">
            Join Our Team
          </h2>
          <p className="text-center text-[var(--logo-navy)]">
            Want to shape the future? We are hiring amazing people!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="group">
            <Label htmlFor="applicantName" className="mb-2 flex items-center gap-2 font-bold text-[var(--logo-navy)]">
              <User className="h-4 w-4 text-[var(--logo-purple)]" />
              Your Name
            </Label>
            <Input
              id="applicantName"
              type="text"
              required
              value={formData.applicantName}
              onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
              className="rounded-2xl border-2 border-[var(--logo-purple)]/30 bg-white p-4 text-base transition-all hover:border-[var(--logo-purple)]/50"
              placeholder="Enter your full name"
            />
          </div>

          <div className="group">
            <Label htmlFor="position" className="mb-2 flex items-center gap-2 font-bold text-[var(--logo-navy)]">
              <Briefcase className="h-4 w-4 text-[var(--logo-orange)]" />
              Position Desired
            </Label>
            <Select
              value={formData.position}
              onValueChange={(value) => setFormData({ ...formData, position: value })}
            >
              <SelectTrigger className="rounded-2xl border-2 border-[var(--logo-purple)]/30 bg-white p-4 text-base transition-all hover:border-[var(--logo-purple)]/50">
                <SelectValue placeholder="Select a position" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="Lead_Teacher">Lead Teacher</SelectItem>
                <SelectItem value="Assistant">Teacher Assistant</SelectItem>
                <SelectItem value="Part_Time">Part-Time Aide</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="group">
            <Label htmlFor="experience" className="mb-2 flex items-center gap-2 font-bold text-[var(--logo-navy)]">
              <MessageSquare className="h-4 w-4 text-[var(--logo-green)]" />
              Experience with Children
            </Label>
            <Textarea
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="rounded-2xl border-2 border-[var(--logo-purple)]/30 bg-white p-4 text-base transition-all hover:border-[var(--logo-purple)]/50"
              rows={4}
              placeholder="Tell us about your experience working with children..."
            />
          </div>

          <button
            type="submit"
            className="btn-bounce group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--logo-purple)] to-[var(--logo-deep-purple)] px-6 py-5 font-[family-name:var(--font-cherry-bomb)] text-xl text-white shadow-[0_6px_0px_#3a2060] transition-all hover:shadow-[0_8px_0px_#3a2060] md:text-2xl"
          >
            <Star className="h-6 w-6 transition-transform group-hover:rotate-180 group-hover:scale-110" />
            SUBMIT APPLICATION
          </button>
        </form>
      </div>
    </section>
  )
}

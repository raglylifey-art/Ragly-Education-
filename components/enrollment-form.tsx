"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Rocket, Baby, Calendar, Heart, Phone, Sparkles } from "lucide-react"

export function EnrollmentForm() {
  const [formData, setFormData] = useState({
    childName: "",
    dob: "",
    medical: "",
    emergencyContact: "",
    startDate: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Enrollment Application - Ragly Education Center")
    const body = encodeURIComponent(
      `Child's Full Name: ${formData.childName}\n` +
      `Date of Birth: ${formData.dob}\n` +
      `Medical/Allergies: ${formData.medical}\n` +
      `Emergency Contact: ${formData.emergencyContact}\n` +
      `Expected Start Date: ${formData.startDate}`
    )
    window.location.href = `mailto:fransotaS.raglyEducation@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="enroll"
      className="relative overflow-hidden rounded-[30px] border-4 border-[var(--logo-teal)] bg-gradient-to-br from-[#e0f5f8] via-[#f0f8ff] to-[#e8f0ff] p-6 shadow-xl md:p-8"
    >
      {/* Decorative corner shapes */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--logo-teal)]/20" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[var(--logo-yellow)]/20" />
      
      <div className="relative z-10">
        <div className="mb-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--logo-teal)] to-[var(--logo-purple)] px-4 py-2 text-white shadow-lg">
            <Rocket className="h-5 w-5" />
            <span className="font-bold">Start Your Journey</span>
          </div>
          <h2 className="mt-2 text-center font-[family-name:var(--font-cherry-bomb)] text-3xl text-[var(--logo-purple)] md:text-4xl">
            Official Enrollment
          </h2>
          <p className="text-center text-[var(--logo-navy)]">
            Complete these daycare-approved questions to begin.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="group">
            <Label htmlFor="childName" className="mb-2 flex items-center gap-2 font-bold text-[var(--logo-navy)]">
              <Baby className="h-4 w-4 text-[var(--logo-teal)]" />
              {"Child's Full Name"}
            </Label>
            <Input
              id="childName"
              type="text"
              required
              value={formData.childName}
              onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
              className="rounded-2xl border-2 border-[var(--logo-teal)]/30 bg-white p-4 text-base transition-all hover:border-[var(--logo-teal)]/50"
              placeholder="Enter your child's name"
            />
          </div>

          <div className="group">
            <Label htmlFor="dob" className="mb-2 flex items-center gap-2 font-bold text-[var(--logo-navy)]">
              <Calendar className="h-4 w-4 text-[var(--logo-teal)]" />
              Date of Birth
            </Label>
            <Input
              id="dob"
              type="date"
              required
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              className="rounded-2xl border-2 border-[var(--logo-teal)]/30 bg-white p-4 text-base transition-all hover:border-[var(--logo-teal)]/50"
            />
          </div>

          <div className="group">
            <Label htmlFor="medical" className="mb-2 flex items-center gap-2 font-bold text-[var(--logo-navy)]">
              <Heart className="h-4 w-4 text-[var(--logo-orange)]" />
              Allergies or Medical Conditions?
            </Label>
            <Textarea
              id="medical"
              placeholder="Please list any allergies or medical conditions..."
              value={formData.medical}
              onChange={(e) => setFormData({ ...formData, medical: e.target.value })}
              className="rounded-2xl border-2 border-[var(--logo-teal)]/30 bg-white p-4 text-base transition-all hover:border-[var(--logo-teal)]/50"
              rows={3}
            />
          </div>

          <div className="group">
            <Label htmlFor="emergencyContact" className="mb-2 flex items-center gap-2 font-bold text-[var(--logo-navy)]">
              <Phone className="h-4 w-4 text-[var(--logo-green)]" />
              Emergency Contact Name & Phone
            </Label>
            <Input
              id="emergencyContact"
              type="text"
              required
              value={formData.emergencyContact}
              onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
              className="rounded-2xl border-2 border-[var(--logo-teal)]/30 bg-white p-4 text-base transition-all hover:border-[var(--logo-teal)]/50"
              placeholder="Name and phone number"
            />
          </div>

          <div className="group">
            <Label htmlFor="startDate" className="mb-2 flex items-center gap-2 font-bold text-[var(--logo-navy)]">
              <Sparkles className="h-4 w-4 text-[var(--logo-yellow)]" />
              Expected Start Date
            </Label>
            <Input
              id="startDate"
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              className="rounded-2xl border-2 border-[var(--logo-teal)]/30 bg-white p-4 text-base transition-all hover:border-[var(--logo-teal)]/50"
            />
          </div>

          <button
            type="submit"
            className="btn-bounce group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--logo-teal)] to-[var(--logo-purple)] px-6 py-5 font-[family-name:var(--font-cherry-bomb)] text-xl text-white shadow-[0_6px_0px_#2a6070] transition-all hover:shadow-[0_8px_0px_#2a6070] md:text-2xl"
          >
            <Rocket className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:rotate-12" />
            SUBMIT ENROLLMENT
          </button>
        </form>
      </div>
    </section>
  )
}

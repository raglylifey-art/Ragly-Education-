import { Palette, BookOpen, School, Sparkles } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Themed Rooms",
    description: "Immersive play for all ages with magical themed environments.",
    bgColor: "bg-gradient-to-br from-[#f0e8ff] to-[#e0d4f8]",
    borderColor: "border-[var(--logo-purple)]",
    iconBg: "bg-[var(--logo-deep-purple)]",
  },
  {
    icon: BookOpen,
    title: "CDA Certified",
    description: "Professional, expert-led care from trained educators.",
    bgColor: "bg-gradient-to-br from-[#e0f5f8] to-[#c5e8ef]",
    borderColor: "border-[var(--logo-teal)]",
    iconBg: "bg-[var(--logo-teal)]",
  },
  {
    icon: School,
    title: "Before/After Care",
    description: "Safe transport, snacks, and supervised activities.",
    bgColor: "bg-gradient-to-br from-[#fff8e0] to-[#ffefc0]",
    borderColor: "border-[var(--logo-yellow)]",
    iconBg: "bg-[var(--logo-orange)]",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="mb-8 rounded-[30px] p-6 md:p-8">
      <div className="mb-8 flex items-center justify-center gap-3">
        <Sparkles className="h-8 w-8 animate-sparkle text-[var(--logo-yellow)]" />
        <h2 className="text-center font-[family-name:var(--font-cherry-bomb)] text-3xl text-[var(--logo-purple)] md:text-4xl">
          Why Choose Ragly?
        </h2>
        <Sparkles className="h-8 w-8 animate-sparkle text-[var(--logo-yellow)]" />
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`card-fun ${feature.bgColor} ${feature.borderColor} rounded-[25px] border-4 p-6 text-center shadow-lg transition-all duration-300`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`${feature.iconBg} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-md`}>
              <feature.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-[family-name:var(--font-cherry-bomb)] text-xl text-[var(--logo-purple)]">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--logo-navy)] md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

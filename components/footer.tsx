import { Phone, Mail, User, Heart, Star, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-br from-[var(--logo-navy)] via-[var(--logo-purple)] to-[var(--logo-deep-purple)] px-5 py-16 text-center text-white">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Star className="absolute left-[5%] top-[20%] h-6 w-6 animate-sparkle text-[var(--logo-yellow)] opacity-40" />
        <Heart className="absolute right-[10%] top-[30%] h-5 w-5 animate-float text-[var(--logo-orange)] opacity-40" />
        <Sparkles className="absolute left-[15%] bottom-[30%] h-7 w-7 animate-float-reverse text-[var(--logo-teal)] opacity-40" />
        <Star className="absolute right-[20%] bottom-[20%] h-5 w-5 animate-sparkle text-[var(--logo-yellow)] opacity-40" />
      </div>
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm">
          <Heart className="h-5 w-5 text-[var(--logo-orange)]" />
          <span className="font-bold">We Love to Hear From You</span>
          <Heart className="h-5 w-5 text-[var(--logo-orange)]" />
        </div>
        
        <h3 className="mb-8 font-[family-name:var(--font-cherry-bomb)] text-3xl text-[var(--logo-yellow)] drop-shadow-lg">
          Contact Us
        </h3>
        
        <div className="mx-auto max-w-md space-y-4">
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-sm transition-all hover:bg-white/20">
            <div className="rounded-full bg-[var(--logo-yellow)] p-2">
              <User className="h-5 w-5 text-[var(--logo-navy)]" />
            </div>
            <span className="text-lg">Director: Fransota Swopes</span>
          </div>
          
          <a 
            href="tel:6186005012"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/20"
          >
            <div className="rounded-full bg-[var(--logo-green)] p-2">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg">(618) 600-5012</span>
          </a>
          
          <a 
            href="mailto:fransotaS.raglyEducation@gmail.com"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/20"
          >
            <div className="rounded-full bg-[var(--logo-teal)] p-2">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm md:text-lg">fransotaS.raglyEducation@gmail.com</span>
          </a>
        </div>
        
        <div className="mt-10 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-4 w-4 fill-[var(--logo-yellow)] text-[var(--logo-yellow)]" 
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        
        <p className="mt-4 text-sm opacity-70">
          2026 Ragly Education Center | Missouri Daycare Services
        </p>
      </div>
    </footer>
  )
}

import { GraduationCap, MapPin, Award } from "lucide-react"

const badges = [
  { name: "ColorStack Fellow", color: "bg-primary/10 text-primary border-primary/20" },
  { name: "Rewriting the Code", color: "bg-accent/30 text-foreground border-accent" },
  { name: "Girls Who Code", color: "bg-secondary text-foreground border-border" },
  { name: "AWS AI/ML Scholar", color: "bg-primary/10 text-primary border-primary/20" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-8 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">About Me</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">01</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left column - Main content */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight text-balance">
              Passionate about creating{" "}
              <span className="text-gradient">impactful technology</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Computer Science student at Santa Clara University with a minor in Management Information Systems. My work focuses on creating meaningful solutions that bridge technology and real-world impact.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I&apos;m deeply involved in organizations like the National Society of Black Engineers, Society of Women Engineers, and ColorStack, where I advocate for diversity in tech.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {badges.map((badge) => (
                <span
                  key={badge.name}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${badge.color} transition-all duration-300 hover:scale-105`}
                >
                  <Award size={14} />
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right column - Info cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Education card */}
            <div className="card-elegant card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Education</p>
                  <h3 className="text-foreground font-medium">Santa Clara University</h3>
                  <p className="text-sm text-muted-foreground mt-1">B.S. Computer Science</p>
                  <p className="text-sm text-muted-foreground">Minor in MIS</p>
                  <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Expected June 2027
                  </div>
                </div>
              </div>
            </div>

            {/* Location card */}
            <div className="card-elegant card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                  <h3 className="text-foreground font-medium">Seattle, WA</h3>
                  <p className="text-sm text-muted-foreground mt-1">Also in Santa Clara, CA</p>
                  <p className="text-sm text-muted-foreground mt-2">Open to relocation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

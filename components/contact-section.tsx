import Link from "next/link"
import { ArrowUpRight, Mail, Phone, Linkedin, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative elements */}
      <div className="gradient-blob w-[400px] h-[400px] -bottom-48 -right-48 opacity-30" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Contact</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">06</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
              Let&apos;s create<br />
              <span className="text-gradient">something amazing</span><br />
              together.
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-md">
              I&apos;m always open to new opportunities, collaborations, and conversations about technology, business, and innovation.
            </p>

            <Link
              href="mailto:maryjoyiwuoha@gmail.com"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 group"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              Say Hello
            </Link>
          </div>

          {/* Right side - Contact cards */}
          <div className="space-y-4">
            {/* Email */}
            <Link
              href="mailto:maryjoyiwuoha@gmail.com"
              className="card-elegant card-hover p-6 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="text-foreground font-medium mt-1">maryjoyiwuoha@gmail.com</p>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors duration-300" size={20} />
            </Link>

            {/* Phone */}
            <Link
              href="tel:+14254269950"
              className="card-elegant card-hover p-6 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/30 flex items-center justify-center group-hover:bg-accent/50 transition-colors duration-300">
                <Phone className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                <p className="text-foreground font-medium mt-1">(425) 426-9950</p>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors duration-300" size={20} />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/mary-iwuoha/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-elegant card-hover p-6 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <Linkedin className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                <p className="text-foreground font-medium mt-1">mary-iwuoha</p>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors duration-300" size={20} />
            </Link>

            {/* Location */}
            <div className="card-elegant p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="text-foreground font-medium mt-1">Seattle, WA / Santa Clara, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { href: "https://linkedin.com/in/mary-iwuoha/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "mailto:maryjoyiwuoha@gmail.com", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative py-12 px-8 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-2xl font-serif text-foreground">
              Mary<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart size={12} className="text-primary fill-primary" /> in Seattle
            </p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Experience
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mary Iwuoha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

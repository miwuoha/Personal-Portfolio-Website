"use client"

import { ArrowDown, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 decorative-dots opacity-40" />
      <div className="gradient-blob w-[500px] h-[500px] -top-48 -right-48 opacity-40" />
      <div className="gradient-blob w-[400px] h-[400px] bottom-0 -left-48 opacity-30" />
      
      {/* Decorative shapes */}
      <div className="absolute top-32 right-20 w-24 h-24 border border-primary/20 rounded-full hidden lg:block" />
      <div className="absolute top-48 right-32 w-8 h-8 bg-accent/40 rounded-full hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-16 h-16 border border-primary/30 rotate-45 hidden lg:block" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground"> Aspiring Technical Product Manager & Cloud Engineer | CS + MIS @ Santa Clara University</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[0.95] tracking-tight">
            Hello, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Mary</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mt-8 leading-relaxed max-w-xl">
            Building technology that makes a difference, one line of code at a time.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Let&apos;s Connect
              <ArrowDown size={16} className="rotate-[-135deg]" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-foreground bg-card border border-border rounded-full hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View My Work
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <p className="text-3xl font-serif text-foreground">3+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Coding</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-foreground">6+</p>
              <p className="text-sm text-muted-foreground mt-1">Certifications</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-foreground">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll</span>
        <ArrowDown size={16} className="text-primary" />
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowUpRight, Database, Smartphone } from "lucide-react"

const projects = [
  {
    title: "Radiant Beauty",
    subtitle: "Database Design & Business Intelligence",
    description:
      "Designed an iterative database for a beauty retailer modeled after Sephora to track real-time sales, inventory, operations, and business performance. Created dashboards, queries, and views to simulate real-world scenarios.",
    tags: ["SQL", "Tableau", "Git"],
    icon: Database,
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "EatMoreFresh",
    subtitle: "iOS Application with Machine Learning",
    description:
      "Collaborated with ML researchers at Apple to build an iOS application that utilizes a trained AI model to identify food items and provide health benefits and optimal storage recommendations.",
    tags: ["XCode", "Swift", "CoreML"],
    icon: Smartphone,
    color: "from-accent/20 to-secondary",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Projects</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">03</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group card-elegant card-hover overflow-hidden"
            >
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 decorative-dots opacity-30" />
                <project.icon 
                  className="absolute bottom-4 right-4 text-primary/30" 
                  size={64} 
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-primary font-medium uppercase tracking-wider">{project.subtitle}</p>
                    <h3 className="text-2xl font-serif text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex-shrink-0"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                <p className="text-muted-foreground mt-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

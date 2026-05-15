import { Building2, Calendar, MapPin, Sparkles } from "lucide-react"

const experiences = [
  {
    title: "Cloud/DevOps Engineering Intern",
    company: "United Airlines",
    location: "Chicago, IL",
    date: "June 2026 - August 2026",
    description: ["Incoming Cloud/DevOps Engineering Intern"],
    upcoming: true,
  },
  {
    title: "Technical Product Management & Business Analyst Intern",
    company: "United Airlines",
    location: "Chicago, IL",
    date: "June 2025 - September 2025",
    description: [
      "Built and delivered an interactive, real-time business intelligence dashboard utilizing AWS Quicksight, SQL, and Python, querying data from AWS Aurora and RDS databases.",
      "Collaborated with stakeholders utilizing Agile, Jira, and Confluence to define and document product requirements.",
      "Developed a probability-based agentic AI model for standby travel predictions as part of an intern-led case study.",
    ],
  },
  {
    title: "Library Help Desk Assistant",
    company: "Santa Clara University Library",
    location: "Santa Clara, CA",
    date: "September 2024 - Present",
    description: [
      "Provided excellent customer service to 100+ library patrons daily.",
      "Educated students on how to use, find, and access library resources efficiently.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Experience</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">02</span>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`card-elegant card-hover p-8 relative ${exp.upcoming ? 'border-primary/30' : ''}`}
            >
              {exp.upcoming && (
                <div className="absolute -top-3 left-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    <Sparkles size={12} />
                    Upcoming
                  </span>
                </div>
              )}

              <div className="grid md:grid-cols-[280px_1fr] gap-8">
                {/* Left side - Company info */}
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                    <Building2 className="text-primary" size={24} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{exp.company}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {exp.date}
                    </div>
                  </div>
                </div>

                {/* Right side - Role details */}
                <div>
                  <h4 className="text-xl font-serif text-foreground">{exp.title}</h4>
                  
                  <ul className="mt-4 space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

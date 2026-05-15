import { Code2, Cloud, BarChart3, Award, Trophy } from "lucide-react"

const technicalSkills = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["C++", "Python", "SQL", "Swift", "Bash"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (Lambda, S3, EC2)", "CI/CD", "Docker", "Kubernetes", "Git"],
  },
  {
    category: "Data & Analytics",
    icon: BarChart3,
    skills: ["AWS Quicksight", "Tableau", "PowerBI", "Pandas", "NumPy", "CoreML"],
  },
]

const certifications = [
  "AWS Cloud Practitioner",
  "IBM Cloud Fundamentals",
  "IBM AI Fundamentals",
  "IBM PM Fundamentals",
  "IBM Data Fundamentals",
  "IBM Enterprise Design Thinking",
]

const awards = [
  "President's Award for Outstanding Academic Excellence - Gold Award",
  "NCWIT Aspirations in Computing - Western Washington Regional Award Winner",
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Skills & Achievements</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">04</span>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {technicalSkills.map((skillSet) => (
            <div key={skillSet.category} className="card-elegant card-hover p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <skillSet.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-4">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm bg-secondary text-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Awards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="card-elegant p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/30 flex items-center justify-center">
                <Award className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-medium text-foreground">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="card-elegant p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Trophy className="text-primary" size={20} />
              </div>
              <h3 className="text-lg font-medium text-foreground">Awards</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/10 border border-primary/10">
                  <p className="text-foreground leading-relaxed">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

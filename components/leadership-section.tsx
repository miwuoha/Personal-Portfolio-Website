import { Users, Heart, Briefcase, Palette } from "lucide-react"

const leadership = [
  {
    title: "Vice President / Finance Chair",
    organization: "National Society of Black Engineers - SCU",
    description:
      "Organized fundraising events, secured $5k+ in external funding, and built 10+ sponsorships with Bay Area companies.",
    icon: Briefcase,
  },
  {
    title: "Career Prep Fellow",
    organization: "Management Leadership for Tomorrow",
    description:
      "Selected for an 18-month professional development program for diverse high-achieving talent on the Software Engineering track.",
    icon: Users,
  },
  {
    title: "Secretary",
    organization: "African Students Association",
    description:
      "Managed meeting documentation and weekly newsletters for 90+ members. Assisted in planning and running club events.",
    icon: Users,
  },
  {
    title: "Ambassador",
    organization: "Justice for Black Girls",
    description:
      "Selected as one of 40 ambassadors nationwide. Led discussions on diversity, equity, and inclusion.",
    icon: Heart,
  },
]

const affiliations = [
  "National Society of Black Engineers",
  "Society of Women Engineers",
  "ACM - Women's Chapter",
  "Black Business Association",
  "SCU Women in Business",
  "African Student Association",
]

const interests = [
  { name: "Travel", icon: "✈️" },
  { name: "Volunteering", icon: "🤝" },
  { name: "Baking", icon: "🧁" },
  { name: "Photography", icon: "📷" },
  { name: "Painting", icon: "🎨" },
]

export function LeadershipSection() {
  return (
    <section className="relative py-32 px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Leadership & Involvement</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">05</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Leadership roles - takes 2 columns */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {leadership.map((item, index) => (
              <div key={index} className="card-elegant card-hover p-6 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-primary mt-1">{item.organization}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Sidebar - affiliations and interests */}
          <div className="space-y-6">
            {/* Affiliations */}
            <div className="card-elegant p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-primary" size={18} />
                <h3 className="font-medium text-foreground">Affiliations</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {affiliations.map((org, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-foreground border border-border"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card-elegant p-6">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="text-primary" size={18} />
                <h3 className="font-medium text-foreground">Interests</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <div 
                    key={interest.name} 
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    <span className="text-lg">{interest.icon}</span>
                    <span className="text-sm text-foreground">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

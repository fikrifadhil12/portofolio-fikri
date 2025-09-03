import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "QR Code Restaurant Ordering Website for Sale + Admin & Cashier Roles (Ready-to-Use for Café/Restaurant) for mobile ",
      description:
        "Upgrade your restaurant or café with a modern digital system!* I am selling a *ready-to-use website* for *food & beverage ordering via QR Code, complete with **Admin & Cashier roles",
      image: "/cofee.jpeg",
      role: "Full-Stack Developer",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "posgres", "mobile"],
      demoLink: "https://cofe-shop-git-main-fikrifadhil12s-projects.vercel.app/",
      githubLink: "https://github.com/your-repo/ecommerce",
    },
    {
      title: "Role kasir Ordering Website",
      description:
        "manajement pruduk Ready-to-Use for Café/Restaurant .",
      image: "/kasir.png",
      role: "Full-Stack Developer",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "posgres"],
      demoLink: "https://cofe-shop-kasir.vercel.app/orders",
      githubLink: "https://github.com/your-repo/task-app",
    },
    {
      title: "Design System",
      description:
        "Comprehensive design system with reusable components, documentation, and Figma integration for a fintech startup.",
      image: "/ecomme.png ",
      role: "Full-Stack Developer",
      techStack: ["Figma", "Storybook", "React", "Styled Components"],
      demoLink: "https://reactjs-ecommerce1.vercel.app/",
      githubLink: "https://github.com/your-repo/design-system",
    },
    {
      title: "Helpdesk",
      description:
        "Get Help When You Need It Most.",
      image: "/helpdesk.png",
      role: "Frontend Developer",
      techStack: ["Vue.js", "react.js", "taiwlind"],
      demoLink: "https://helpsdesk.vercel.app/",
     
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sebuah pameran karya dan kontribusi saya baru-baru ini
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border group hover:shadow-lg transition-all duration-300"
            >
              <div className="overflow-hidden aspect-[9/16] md:aspect-video">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {project.role}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border hover:bg-muted bg-transparent"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
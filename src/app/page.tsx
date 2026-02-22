import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import projects from "@/data/projects.json"

const badgeColors: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-300 hover:bg-blue-500/20",
  purple: "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20",
  pink: "bg-pink-500/10 text-pink-300 hover:bg-pink-500/20",
  indigo: "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20",
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[800px] w-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute left-[-10%] top-[-10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-purple-500/10 blur-[80px] md:blur-[100px]"></div>
        <div className="absolute right-[-10%] bottom-[-10%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-blue-500/10 blur-[80px] md:blur-[100px]"></div>
        <div className="absolute left-[20%] top-[20%] h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-indigo-500/10 blur-[80px] md:blur-[120px]"></div>
      </div>

      <main className="container mx-auto max-w-6xl px-6 py-24 md:py-32 relative z-10 transition-all duration-500 ease-in-out">
        {/* Hero Section */}
        <section className="mb-24 space-y-8 text-center md:text-left transition-all duration-500">
          <div className="space-y-6">

            <div className="inline-block border-b border-white/20 pb-4 mb-2 mx-auto md:mx-0">
              <h1 className="text-5xl font-light tracking-[0.2em] text-white uppercase md:text-7xl lg:text-8xl transition-all duration-500">
                Patrick Bogucki
              </h1>
            </div>
            <p className="max-w-[700px] mx-auto md:mx-0 text-lg text-gray-400 md:text-2xl leading-relaxed font-light">
              Finding problems and building solutions. Welcome to my corner of the web.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/patrick-bogucki-5095b81b/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-14 gap-3 rounded-full border-blue-500/20 bg-blue-500/10 px-8 text-lg text-blue-400 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-110 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]">
                <Linkedin className="h-6 w-6" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/patrickbogucki" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-14 gap-3 rounded-full border-purple-500/20 bg-purple-500/10 px-8 text-lg text-purple-400 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-purple-400/10 hover:text-purple-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]">
                <Github className="h-6 w-6" />
                GitHub
              </Button>
            </a>
            <a href="mailto:patrickbogucki@gmail.com">
              <Button variant="outline" size="lg" className="h-14 gap-3 rounded-full border-emerald-500/20 bg-emerald-500/10 px-8 text-lg text-emerald-400 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-110 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]">
                <Mail className="h-6 w-6" />
                Email
              </Button>
            </a>
          </div>
        </section>

        {/* Projects Heading with Line */}
        <div className="mb-12 flex items-center gap-4">
          <h3 className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase whitespace-nowrap">Selected Works</h3>
          <Separator className="flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:gap-10">
          {projects.map((project) => {
            const isExternal = project.url.startsWith("http")
            const card = (
              <Card className="group relative overflow-hidden rounded-3xl border-white/10 bg-white/5 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 cursor-pointer">
                <div className="relative p-8 h-full flex flex-col">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                    <CardDescription className="mt-3 text-lg text-gray-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-auto">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className={`${badgeColors[project.color] ?? badgeColors.blue} border-0 rounded-full px-4 py-1.5 text-sm transition-colors`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            )
            if (!project.url) return <div key={project.title}>{card}</div>
            if (isExternal) return <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" className="block">{card}</a>
            return <Link key={project.title} href={project.url} className="block">{card}</Link>
          })}
        </div>

      </main>
    </div>
  )
}

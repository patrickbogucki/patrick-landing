import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[800px] w-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]"></div>
        <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute left-[20%] top-[20%] h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[120px]"></div>
      </div>

      <main className="container mx-auto max-w-4xl px-6 py-24 md:py-32 relative z-10">
        {/* Hero Section */}
        <section className="mb-24 space-y-6">
          <div className="space-y-4">

            <div className="inline-block border-b border-white/20 pb-4 mb-2">
              <h1 className="text-4xl font-light tracking-[0.2em] text-white uppercase md:text-6xl">
                Patrick Bogucki
              </h1>
            </div>
            <p className="max-w-[600px] text-lg text-gray-400 md:text-xl leading-relaxed">
              Finding problems and building solutions. Welcome to my corner of the web.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="https://ca.linkedin.com/in/patrick-bogucki-5095b81b" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-12 gap-3 rounded-full border-blue-500/20 bg-blue-500/10 px-6 text-base text-blue-400 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/patrickbogucki" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-12 gap-3 rounded-full border-purple-500/20 bg-purple-500/10 px-6 text-base text-purple-400 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-105 hover:border-purple-400/50 hover:bg-purple-400/10 hover:text-purple-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]">
                <Github className="h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a href="mailto:patrickbogucki@gmail.com">
              <Button variant="outline" size="lg" className="h-12 gap-3 rounded-full border-emerald-500/20 bg-emerald-500/10 px-6 text-base text-emerald-400 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]">
                <Mail className="h-5 w-5" />
                Email
              </Button>
            </a>
          </div>
        </section>

        {/* Projects Heading with Line */}
        <div className="mb-12 flex items-center gap-4">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">Projects</h3>
          <Separator className="flex-1 bg-white/10" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          <Card className="group relative overflow-hidden rounded-2xl border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="relative p-6 sm:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Project Alpha</CardTitle>
                <CardDescription className="mt-2 text-base text-gray-400 line-clamp-2">
                  A full-stack web application built with modern technologies and clean architecture. Focused on scalability and performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 border-0 rounded-md px-3 py-1">React</Badge>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 border-0 rounded-md px-3 py-1">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 border-0 rounded-md px-3 py-1">Node.js</Badge>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="relative p-6 sm:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Project Beta</CardTitle>
                <CardDescription className="mt-2 text-base text-gray-400 line-clamp-2">
                  An open-source tool that simplifies developer workflows and boosts productivity. Downloaded by over 10k developers.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border-0 rounded-md px-3 py-1">Python</Badge>
                  <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border-0 rounded-md px-3 py-1">CLI</Badge>
                  <Badge variant="secondary" className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border-0 rounded-md px-3 py-1">Open Source</Badge>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="relative p-6 sm:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Project Gamma</CardTitle>
                <CardDescription className="mt-2 text-base text-gray-400 line-clamp-2">
                  Mobile-first design system with reusable components and comprehensive documentation.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-pink-500/10 text-pink-300 hover:bg-pink-500/20 border-0 rounded-md px-3 py-1">Design System</Badge>
                  <Badge variant="secondary" className="bg-pink-500/10 text-pink-300 hover:bg-pink-500/20 border-0 rounded-md px-3 py-1">Figma</Badge>
                  <Badge variant="secondary" className="bg-pink-500/10 text-pink-300 hover:bg-pink-500/20 border-0 rounded-md px-3 py-1">CSS</Badge>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="relative p-6 sm:p-8">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Project Delta</CardTitle>
                <CardDescription className="mt-2 text-base text-gray-400 line-clamp-2">
                  Data visualization dashboard with real-time analytics and interactive charts.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 border-0 rounded-md px-3 py-1">D3.js</Badge>
                  <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 border-0 rounded-md px-3 py-1">API</Badge>
                  <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 border-0 rounded-md px-3 py-1">Dashboard</Badge>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

      </main>
    </div>
  )
}

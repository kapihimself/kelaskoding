import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cpu, ArrowRight, Sparkles, Brain, Trophy, Zap } from "lucide-react";
import ProfileStats from "@/components/ProfileStats";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/10">
      {/* Navbar Simple */}
      <nav className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">K</div>
          <span className="text-lg font-bold tracking-tighter">KodeLokal</span>
        </div>
        <ProfileStats />
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full -z-10" />

        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-white/80">Platform Belajar Koding #1 di Indonesia</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Kuasai Teknologi <br /> dari Rumah.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Satu-satunya platform belajar koding interaktif dengan AI Tutor, Kuis Pintar, dan Sistem Gamifikasi yang bikin ketagihan belajar.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-16 opacity-60">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">AI Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium">Sertifikat Digital</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">XP & Badges</span>
            </div>
          </div>
        </div>
      </section>

      {/* Track Selection */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Software Engineer Track */}
            <Card className="glass group hover:bg-white/[0.08] transition-all duration-500 border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-24 h-24" />
              </div>
              <CardHeader className="pt-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">Software Engineer</CardTitle>
                <CardDescription className="text-zinc-400 text-base">
                  Bangun website modern dan aplikasi interaktif menggunakan HTML, CSS, dan JavaScript.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Dasar Web (HTML & CSS)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Interaktivitas dengan JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Responsive Design
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pb-10">
                <Link href="/belajar/software_engineer/se-1" className="w-full">
                  <Button className="w-full h-12 bg-white text-black hover:bg-zinc-200 group/btn font-semibold">
                    Mulai Jadi Software Engineer
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* AI Engineer Track */}
            <Card className="glass group hover:bg-white/[0.08] transition-all duration-500 border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-24 h-24" />
              </div>
              <CardHeader className="pt-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 border border-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                  <Cpu className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-white">AI Engineer</CardTitle>
                <CardDescription className="text-zinc-400 text-base">
                  Pelajari dasar kecerdasan buatan, Python, dan cara membuat mesin yang bisa berfikir.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Sintaks Python Dasar
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Logika Pemrograman AI
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Prompt Engineering
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pb-10">
                <Link href="/belajar/ai_engineer/ai-1" className="w-full">
                  <Button className="w-full h-12 bg-white text-black hover:bg-zinc-200 group/btn font-semibold">
                    Mulai Jadi AI Engineer
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-12 border-t border-white/5 text-center text-zinc-600 text-sm">
        <p>© 2025 KodeLokal. Dibuat dengan ❤️ untuk Indonesia.</p>
      </footer>
    </div>
  );
}

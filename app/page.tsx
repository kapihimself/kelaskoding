import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Bot } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-zinc-950 text-slate-50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 max-w-5xl w-full flex flex-col items-center text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Kode<span className="text-indigo-500">Lokal</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
            Platform belajar koding interaktif untuk kamu yang ingin mulai karir di dunia teknologi. 100% Bahasa Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Software Engineer Card */}
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-indigo-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-2xl text-white">Software Engineer</CardTitle>
              <CardDescription className="text-slate-400 text-base">
                Belajar membangun website interaktif dari nol menggunakan HTML, CSS, dan JavaScript.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/learn/software_engineer/se-1" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg h-12">
                  Mulai Jadi Software Engineer
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* AI Engineer Card */}
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-indigo-500/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-emerald-400" />
              </div>
              <CardTitle className="text-2xl text-white">AI Engineer</CardTitle>
              <CardDescription className="text-slate-400 text-base">
                Pahami dasar Python dan logika AI untuk berkomunikasi dengan mesin masa depan.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/learn/ai_engineer/ai-1" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-lg h-12">
                  Mulai Jadi AI Engineer
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
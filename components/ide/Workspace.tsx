import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Play, RefreshCw, ChevronRight } from "lucide-react";
import React from "react";

interface WorkspaceProps {
    title: string;
    description: string;
    contentHtml: string;
    editorComponent: React.ReactNode;
    previewComponent: React.ReactNode;
    onRun: () => void;
    onReset: () => void;
    onNext?: () => void;
    isSuccess: boolean;
    progressPercentage: number;
}

export function Workspace({
    title,
    description,
    contentHtml,
    editorComponent,
    previewComponent,
    onRun,
    onReset,
    onNext,
    isSuccess,
    progressPercentage,
}: WorkspaceProps) {
    return (
        <div className="flex flex-col h-screen bg-zinc-950 text-slate-50 font-sans overflow-hidden">
            {/* Header / Topbar */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold tracking-tight text-white">Kode<span className="text-indigo-500">Lokal</span></h1>
                    <div className="w-px h-6 bg-zinc-800 mx-2" />
                    <h2 className="text-lg text-slate-300 font-medium">{title}</h2>
                </div>
                <div className="flex items-center gap-6 w-1/3 justify-end">
                    <div className="flex flex-col w-full max-w-[200px] gap-1.5">
                        <div className="flex justify-between text-xs text-slate-400 font-medium">
                            <span>Progress Modul</span>
                            <span>{progressPercentage}% Selesai</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2 bg-zinc-800" />
                    </div>
                </div>
            </header>

            {/* Main Content (3 Panes) */}
            <main className="flex-1 overflow-hidden">
                <ResizablePanelGroup direction="horizontal" className="h-full w-full">
                    {/* Pane 1: Materi & Instruksi */}
                    <ResizablePanel defaultSize={30} minSize={20} className="bg-zinc-950/80">
                        <ScrollArea className="h-full border-r border-zinc-800">
                            <div className="p-6 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-3 text-white">Materi Belajar</h2>
                                    <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>
                                    <div
                                        className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed marker:text-indigo-400 prose-code:text-indigo-400 prose-code:bg-indigo-950/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono"
                                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                                    />
                                </div>
                            </div>
                        </ScrollArea>
                    </ResizablePanel>

                    <ResizableHandle className="w-1 bg-zinc-800 hover:bg-indigo-500 transition-colors" />

                    {/* Pane 2: Editor */}
                    <ResizablePanel defaultSize={40} minSize={30} className="bg-[#1e1e1e] flex flex-col relative">
                        <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4">
                            <span className="text-xs font-mono text-slate-400">Editor</span>
                        </div>
                        <div className="flex-1 relative">
                            {editorComponent}
                        </div>
                    </ResizablePanel>

                    <ResizableHandle className="w-1 bg-zinc-800 hover:bg-indigo-500 transition-colors" />

                    {/* Pane 3: Preview / Output */}
                    <ResizablePanel defaultSize={30} minSize={20} className="bg-zinc-950 flex flex-col relative">
                        <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 justify-between">
                            <span className="text-xs font-mono text-slate-400">Canvas Hasil</span>
                            {isSuccess && (
                                <span className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                                    <CheckCircle2 className="w-3 h-3 mr-1" /> Mantap! Benar
                                </span>
                            )}
                        </div>
                        <div className="flex-1 overflow-auto bg-white/5 relative">
                            {previewComponent}
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </main>

            {/* Bottom Action Bar */}
            <footer className="h-16 border-t border-zinc-800 bg-zinc-950 px-6 flex items-center justify-between shrink-0">
                <Button variant="ghost" onClick={onReset} className="text-slate-400 hover:text-white hover:bg-zinc-800">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset Kode
                </Button>

                <div className="flex items-center gap-4">
                    <Button
                        onClick={onRun}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                        size="lg"
                    >
                        <Play className="w-4 h-4 mr-2 fill-current" />
                        Jalankan
                    </Button>

                    {isSuccess && onNext && (
                        <Button
                            onClick={onNext}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium animate-in fade-in zoom-in"
                            size="lg"
                        >
                            Lanjut Modul
                            <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    )}
                </div>
            </footer>
        </div>
    );
}
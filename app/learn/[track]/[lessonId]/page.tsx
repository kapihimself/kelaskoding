"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { curriculum } from "@/data/curriculum";
import { useProgressStore } from "@/store/progressStore";
import { validateHtml, validatePython } from "@/lib/validator";
import { Workspace } from "@/components/ide/Workspace";
import { PythonEditor, TerminalPreview } from "@/components/ide/PythonEditor";
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, useSandpack } from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";

function CodeExtractor({ onChange }: { onChange: (code: string) => void }) {
    const { sandpack } = useSandpack();
    const { files, activeFile } = sandpack;

    useEffect(() => {
        const currentCode = files[activeFile]?.code;
        if (currentCode !== undefined) {
            onChange(currentCode);
        }
    }, [files, activeFile, onChange]);

    return null;
}

export default function LessonPage() {
    const params = useParams();
    const router = useRouter();
    const trackId = params.track as string;
    const lessonId = params.lessonId as string;

    const [mounted, setMounted] = useState(false);
    const { completeLesson, isLessonComplete, completedLessons } = useProgressStore();

    const lessonData = useMemo(() => {
        const trackData = curriculum[trackId as keyof typeof curriculum] || [];
        return trackData.find(l => l.id === lessonId);
    }, [trackId, lessonId]);

    const trackLessons = useMemo(() => curriculum[trackId as keyof typeof curriculum] || [], [trackId]);
    const lessonIndex = trackLessons.findIndex(l => l.id === lessonId);
    const nextLesson = trackLessons[lessonIndex + 1];

    const progressPercentage = trackLessons.length > 0
        ? Math.round((completedLessons.filter(id => trackLessons.some(l => l.id === id)).length / trackLessons.length) * 100)
        : 0;

    const [currentCode, setCurrentCode] = useState("");
    const [simulatedOutput, setSimulatedOutput] = useState("");
    const [, setErrorMsg] = useState<string | null>(null);

    const isSuccess = isLessonComplete(lessonId);

    useEffect(() => {
        setMounted(true);
        if (lessonData) {
            setCurrentCode(lessonData.initialCode);
            setSimulatedOutput("");
            setErrorMsg(null);
        }
    }, [lessonData]);

    if (!mounted || !lessonData) return null;

    const handleRun = () => {
        setErrorMsg(null);
        setSimulatedOutput("");

        if (lessonData.previewMode === "html") {
             const result = validateHtml(currentCode, lessonData.validationRules);
             if (result.success) {
                 completeLesson(lessonId);
             } else {
                 setErrorMsg(result.message || "Gagal memvalidasi");
                 alert(`Gagal: ${result.message}`); // Simple UI for error MVP
             }
        } else if (lessonData.previewMode === "terminal") {
            const result = validatePython(currentCode, lessonData.validationRules);
            if (result.success) {
                setSimulatedOutput(result.simulatedOutput || "Berhasil dijalankan.\n");
                completeLesson(lessonId);
            } else {
                 setSimulatedOutput(result.simulatedOutput || "Error: Periksa kembali sintaksis.\n");
                 setErrorMsg(result.message || "Gagal memvalidasi");
                 alert(`Gagal: ${result.message}`);
            }
        }
    };

    const handleReset = () => {
        setCurrentCode(lessonData.initialCode);
        setSimulatedOutput("");
        setErrorMsg(null);
    };

    const handleNext = () => {
        if (nextLesson) {
            router.push(`/learn/${trackId}/${nextLesson.id}`);
        } else {
            router.push("/");
        }
    };

    return (
        <>
            {lessonData.previewMode === "html" ? (
                <SandpackProvider
                    template="vanilla"
                    theme={atomDark}
                    files={{
                        "/index.html": {
                            code: lessonData.initialCode,
                            active: true,
                        },
                        "/index.js": {
                            code: "",
                            active: false,
                        }
                    }}
                    options={{
                        classes: {
                            "sp-layout": "h-full w-full bg-transparent border-none",
                            "sp-wrapper": "h-full w-full",
                        }
                    }}
                >
                    <CodeExtractor onChange={setCurrentCode} />
                    <Workspace
                        title={lessonData.title}
                        description={lessonData.description}
                        contentHtml={lessonData.content}
                        editorComponent={
                             <SandpackLayout className="h-full rounded-none border-none bg-transparent">
                                 <SandpackCodeEditor
                                     showTabs={false}
                                     showLineNumbers
                                     className="h-full rounded-none border-none bg-transparent"
                                     style={{ height: '100%' }}
                                 />
                             </SandpackLayout>
                        }
                        previewComponent={
                             <SandpackLayout className="h-full rounded-none border-none bg-transparent">
                                  <SandpackPreview
                                      showNavigator={false}
                                      showRefreshButton={false}
                                      showOpenInCodeSandbox={false}
                                      className="h-full bg-zinc-950 rounded-none border-none w-full"
                                  />
                             </SandpackLayout>
                        }
                        onRun={handleRun}
                        onReset={handleReset}
                        onNext={nextLesson ? handleNext : () => router.push("/")}
                        isSuccess={isSuccess}
                        progressPercentage={progressPercentage}
                    />
                </SandpackProvider>
            ) : (
                <Workspace
                    title={lessonData.title}
                    description={lessonData.description}
                    contentHtml={lessonData.content}
                    editorComponent={
                        <PythonEditor
                            value={currentCode}
                            onChange={setCurrentCode}
                        />
                    }
                    previewComponent={
                        <TerminalPreview output={simulatedOutput} />
                    }
                    onRun={handleRun}
                    onReset={handleReset}
                    onNext={nextLesson ? handleNext : () => router.push("/")}
                    isSuccess={isSuccess}
                    progressPercentage={progressPercentage}
                />
            )}
        </>
    );
}
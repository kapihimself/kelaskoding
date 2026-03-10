"use client";

import Editor from "@monaco-editor/react";

interface PythonEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export function PythonEditor({ value, onChange }: PythonEditorProps) {
    return (
        <Editor
            height="100%"
            defaultLanguage="python"
            theme="vs-dark"
            value={value}
            onChange={(val) => onChange(val || "")}
            options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "var(--font-geist-mono), monospace",
                padding: { top: 16 },
                scrollBeyondLastLine: false,
                wordWrap: "on",
                lineNumbers: "on",
                glyphMargin: false,
                folding: false,
                lineDecorationsWidth: 10,
                lineNumbersMinChars: 3,
                renderLineHighlight: "none",
                scrollbar: {
                    vertical: "hidden",
                    horizontal: "hidden"
                }
            }}
        />
    );
}

export function TerminalPreview({ output }: { output: string }) {
    return (
        <div className="p-4 font-mono text-sm text-green-400 whitespace-pre-wrap h-full w-full overflow-auto break-words bg-zinc-950">
            {output ? (
                <>
                    <div className="text-zinc-600 mb-2">$ python main.py</div>
                    {output}
                </>
            ) : (
                <div className="text-zinc-600 italic">Terminal siap. Tekan &quot;Jalankan&quot; untuk melihat hasil.</div>
            )}
        </div>
    );
}
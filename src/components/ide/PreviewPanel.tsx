"use client";

import React, { useEffect, useState } from 'react';
import { Terminal, Globe } from 'lucide-react';

interface PreviewPanelProps {
  code: string;
  mode: 'html' | 'terminal';
  output: string;
}

export default function PreviewPanel({ code, mode, output }: PreviewPanelProps) {
  const [doc, setDoc] = useState('');

  useEffect(() => {
    if (mode === 'html') {
      // Internal setTimeout debouncing was removed because Workspace parent
      // now passes a deferredCode prop, which handles throttling natively.
      setDoc(`
        <html>
          <head>
            <style>
              body {
                font-family: sans-serif;
                color: white;
                padding: 20px;
                background: transparent;
              }
              h1 { color: #3b82f6; }
              button {
                padding: 8px 16px;
                background: #3b82f6;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
              }
            </style>
          </head>
          <body>${code}</body>
        </html>
      `);
    }
  }, [code, mode]);

  return (
    <div className="h-full flex flex-col bg-zinc-950">
      <div className="h-10 px-4 flex items-center bg-zinc-900 border-b border-white/5 gap-2">
        {mode === 'html' ? (
          <>
            <Globe className="w-3 h-3 text-zinc-500" />
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Live Preview</span>
          </>
        ) : (
          <>
            <Terminal className="w-3 h-3 text-zinc-500" />
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Terminal Output</span>
          </>
        )}
      </div>

      <div className="flex-1 bg-zinc-950 overflow-hidden relative">
        {mode === 'html' ? (
          <iframe
            title="preview"
            srcDoc={doc}
            className="w-full h-full border-none bg-zinc-950"
            sandbox="allow-scripts"
          />
        ) : (
          <div className="p-6 font-mono text-sm space-y-2">
            {output ? (
              <pre className="text-zinc-300 animate-in fade-in slide-in-from-left-2 duration-300">
                {output}
              </pre>
            ) : (
              <p className="text-zinc-600 italic">Klik "Jalankan" untuk melihat hasil...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { memo } from 'react';
import Editor from '@monaco-editor/react';

interface EditorPanelProps {
  code: string;
  onChange: (value: string) => void;
  language: 'html' | 'python';
}

/**
 * EditorPanel is memoized to ensure it only re-renders when code or language changes.
 * Even though it re-renders during typing, memoization protects it from unrelated
 * parent re-renders.
 */
const EditorPanel = memo(function EditorPanel({ code, onChange, language }: EditorPanelProps) {
  return (
    <div className="h-full flex flex-col bg-[#1e1e1e]">
      <div className="h-10 px-4 flex items-center bg-zinc-900 border-b border-white/5">
        <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
          Editor — {language === 'html' ? 'index.html' : 'main.py'}
        </span>
      </div>

      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage={language}
          theme="vs-dark"
          value={code}
          onChange={(value) => onChange(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 16 }
          }}
        />
      </div>
    </div>
  );
});

export default EditorPanel;

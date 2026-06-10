"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { executeCommand } from "@/lib/terminal/commands";
import type { Project } from "@/types/portfolio";

interface TerminalProps {
  projects: Project[];
}

interface TerminalLine {
  type: "input" | "output";
  text: string;
}

export function Terminal({ projects }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: "Portfolio CLI v1.0 — Escribe 'help' para comenzar." },
    { type: "output", text: `Proyectos cargados: ${projects.map((p) => p.slug).join(", ")}` },
  ]);
  const [input, setInput] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const runCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setLines((prev) => [...prev, { type: "input", text: `$ ${trimmed}` }]);

    const output = executeCommand(trimmed);
    if (output[0] === "__CLEAR__") {
      setLines([]);
      return;
    }

    setLines((prev) => [
      ...prev,
      ...output.map((text) => ({ type: "output" as const, text })),
    ]);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <div
      className="font-sans rounded-lg border border-neutral-800 bg-neutral-950 text-green-400 text-sm overflow-hidden cursor-text"
      onClick={() => inputRef.current?.focus()}
      role="region"
      aria-label="Terminal interactiva"
    >
      <div className="flex items-center gap-2 border-b border-neutral-800 px-3 py-2 bg-neutral-900">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-neutral-500">portfolio-cli</span>
      </div>
      <div ref={scrollContainerRef} className="h-48 overflow-y-auto p-3 space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap break-words ${
              line.type === "input" ? "text-neutral-300" : "text-green-400/90"
            }`}
          >
            {line.text}
          </div>
        ))}
        <div className="flex items-center gap-1">
          <span className="text-neutral-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
            aria-label="Comando de terminal"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="terminal-cursor text-green-400">▋</span>
        </div>
      </div>
    </div>
  );
}

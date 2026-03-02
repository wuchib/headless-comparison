import { useState } from 'react';
import { Code, Layout } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CompareCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  codeSnippet: string;
}

export function CompareCard({ title, description, children, codeSnippet }: CompareCardProps) {
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[500px]">
      <div className="px-5 py-4 border-b border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="font-semibold text-zinc-900">{title}</h3>
          {description && <p className="text-sm text-zinc-500 mt-0.5 min-h-[20px]">{description}</p>}
        </div>
        <div className="flex bg-zinc-100 p-1 rounded-lg border border-zinc-200/60 shrink-0">
          <button
            onClick={() => setViewMode('preview')}
            className={cn(
              "px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-all",
              viewMode === 'preview' ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200" : "text-zinc-500 hover:text-zinc-700"
            )}
          >
            <Layout className="w-4 h-4" /> Preview
          </button>
          <button
            onClick={() => setViewMode('code')}
            className={cn(
              "px-3 py-1.5 text-sm font-medium rounded-md flex items-center gap-2 transition-all",
              viewMode === 'code' ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200" : "text-zinc-500 hover:text-zinc-700"
            )}
          >
            <Code className="w-4 h-4" /> Code
          </button>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-zinc-50/30">
        {viewMode === 'preview' ? (
          <div className="absolute inset-0 p-8 flex flex-col items-center justify-center overflow-auto">
            {children}
          </div>
        ) : (
          <div className="absolute inset-0 bg-zinc-950 text-zinc-100 p-4 overflow-auto text-sm font-mono leading-relaxed">
            <pre><code>{codeSnippet}</code></pre>
          </div>
        )}
      </div>
    </div>
  );
}

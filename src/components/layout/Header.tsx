import { motion } from 'motion/react';
import { Github, Home, Layout } from 'lucide-react';

interface HeaderProps {
  view: string;
  setView: (view: any) => void;
}

export default function Header({ view, setView }: HeaderProps) {
  return (
    <header className="border-b border-[#30363d] bg-[#161b22] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setView('home')}
            className="flex items-center gap-3 text-[#f0f6fc] hover:text-white transition-colors"
          >
            <Github className="w-8 h-8" />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold tracking-tight">GitHub Helper</h1>
            </div>
          </button>
          
          <nav className="hidden md:flex items-center gap-1 ml-4">
            <button
              onClick={() => setView('home')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${view === 'home' ? 'bg-[#21262d] text-[#f0f6fc]' : 'text-[#8b949e] hover:bg-[#21262d] hover:text-[#f0f6fc]'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setView('markdown')}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${view === 'markdown' ? 'bg-[#21262d] text-[#f0f6fc]' : 'text-[#8b949e] hover:bg-[#21262d] hover:text-[#f0f6fc]'}`}
            >
              Converter
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {view !== 'home' && (
            <button
              onClick={() => setView('home')}
              className="p-2 text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] rounded-md transition-all"
              title="Home"
            >
              <Home className="w-5 h-5" />
            </button>
          )}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] rounded-md transition-all"
          >
            <Layout className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

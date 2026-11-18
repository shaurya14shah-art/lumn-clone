import type { FC, ReactNode } from 'react';

interface MacBookFrameProps {
  children: ReactNode;
}

export const MacBookFrame: FC<MacBookFrameProps> = ({ children }) => {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Ambient glow behind the laptop */}
      <div className="absolute inset-0 bg-ambient-glow -z-10 blur-3xl opacity-50 animate-pulse-slow"></div>
      
      {/* Laptop Screen / Frame */}
      <div className="relative rounded-t-2xl rounded-b-md bg-[#1c1c1c] p-2 ring-1 ring-white/10 shadow-2xl shadow-black/50">
        {/* Top Camera bezel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#111] ring-1 ring-white/10 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-blue-900/50" />
          </div>
        </div>
        
        {/* Screen Content Area */}
        <div className="relative overflow-hidden rounded-xl bg-black border border-white/5 aspect-[16/10]">
          {children}
        </div>
      </div>
      
      {/* Laptop Base */}
      <div className="relative h-6 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-3xl border-t border-white/10 mx-[-2px] flex justify-center">
        {/* Trackpad indentation mock */}
        <div className="w-32 h-full bg-[#111] rounded-t-lg mx-auto shadow-inner opacity-50" />
      </div>
    </div>
  );
};

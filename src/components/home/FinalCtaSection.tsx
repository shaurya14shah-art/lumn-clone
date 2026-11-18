import { Button } from "../ui/Button";
import { Download, Sparkles } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Intense central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-ambient-glow opacity-50 pointer-events-none rounded-full blur-3xl mix-blend-screen animate-pulse-slow"></div>

      <div className="relative max-w-4xl mx-auto glass-card p-12 md:p-20 text-center shadow-ambient lumn-rise">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
          Ready to illuminate your <br className="hidden md:block" />
          <span className="text-brand-gradient">workspace?</span>
        </h2>
        
        <p className="text-xl text-content-secondary mb-10 max-w-2xl mx-auto">
          Join thousands of creators, developers, and night owls who have upgraded their display experience with Lumn.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" className="w-full sm:w-auto h-14 px-8 text-lg group">
            <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            Download for macOS
          </Button>
          <Button variant="glass" className="w-full sm:w-auto h-14 px-8 text-lg group">
            <Sparkles className="mr-2 h-5 w-5 text-brand-light group-hover:rotate-12 transition-transform" />
            View Pro Features
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-content-tertiary">
          Requires macOS 12.0 or later. Free trial included.
        </p>
      </div>
    </section>
  );
}

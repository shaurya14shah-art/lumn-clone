import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Background ambient shift */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ambient-glow rounded-full blur-[100px] opacity-30 animate-ambient-shift -z-10" />
      
      <div className="max-w-4xl mx-auto text-center lumn-rise">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-sm font-medium text-white/80 mb-8">
          <Sparkles className="w-4 h-4 text-brand-light" />
          <span>Introducing Lumn AI Analytics</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          See your data in a <br className="hidden md:block" />
          <span className="text-brand-gradient">whole new light.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-content-secondary mb-10 max-w-2xl mx-auto">
          Lumn connects to your databases and instantly generates beautiful, 
          interactive dashboards using ambient intelligence. No SQL required.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="primary-button group w-full sm:w-auto">
            Start building for free
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="glass-button w-full sm:w-auto">
            Book a demo
          </button>
        </div>
        
        <p className="mt-6 text-sm text-content-tertiary">
          No credit card required • Free 14-day trial
        </p>
      </div>
    </section>
  );
};

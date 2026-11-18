import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { installStepsData } from "../../data/installStepsData";

export function InstallSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="relative max-w-5xl mx-auto lumn-rise">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
            Get started in <span className="text-brand-gradient">seconds</span>
          </h2>
          <p className="text-content-secondary text-lg">
            Install via command line or download the binary directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {installStepsData.map((step, index) => (
            <div key={index} className="glass-card flex flex-col p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/5 rounded-full blur-2xl group-hover:bg-brand-light/10 transition-colors duration-500 -translate-y-1/2 translate-x-1/2" />
              
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 mb-6 font-display font-bold text-xl text-white">
                {step.step}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-content-secondary mb-8 flex-grow">
                {step.description}
              </p>
              
              <div className="relative mt-auto">
                <div className="flex items-center justify-between bg-black/60 rounded-xl p-4 ring-1 ring-white/10 font-mono text-sm text-content-secondary overflow-x-auto">
                  <div className="flex items-center gap-3 min-w-0 pr-4">
                    <Terminal size={16} className="text-brand-light shrink-0" />
                    <code className="whitespace-pre truncate">{step.code}</code>
                  </div>
                  <button
                    onClick={() => handleCopy(step.code, index)}
                    className="shrink-0 p-2 hover:bg-white/10 rounded-md transition-colors text-white/70 hover:text-white"
                    aria-label="Copy to clipboard"
                  >
                    {copiedIndex === index ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

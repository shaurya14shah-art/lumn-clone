import { ArrowRight } from 'lucide-react';

export const Banner = () => {
  return (
    <div className="w-full bg-brand-light/10 text-white py-2.5 px-4 text-center text-sm flex items-center justify-center gap-2 border-b border-brand-light/20 relative z-50">
      <span className="font-medium">Lumn has been acquired by Google.</span>
      <a href="#" className="flex items-center gap-1 font-semibold text-brand-light hover:text-white transition-colors">
        Read the announcement <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

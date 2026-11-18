
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Lumn</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-content-secondary">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">Demo</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm font-semibold text-content-secondary hover:text-white transition-colors">
            Log in
          </a>
          <button className="primary-button !px-4 !py-2 !text-sm">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

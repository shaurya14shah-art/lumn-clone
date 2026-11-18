
export const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-24 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-md bg-brand-gradient flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">Lumn</span>
          </div>
          <p className="text-content-secondary text-sm max-w-sm">
            Illuminating your data with ambient intelligence and beautiful visualizations.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-white mb-4">Product</h3>
          <ul className="space-y-3 text-sm text-content-tertiary">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-content-tertiary">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-content-tertiary">
        <p>&copy; {new Date().getFullYear()} Lumn Inc. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

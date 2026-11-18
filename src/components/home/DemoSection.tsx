import { MacBookFrame } from '../ui/MacBookFrame';

export const DemoSection = () => {
  return (
    <section id="demo" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lumn-rise" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Interactive at the speed of thought.
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto text-lg">
            Experience dashboards that react to your questions in real-time. 
            Powered by our proprietary ambient intelligence engine.
          </p>
        </div>
        
        <div className="lumn-rise" style={{ animationDelay: '0.4s' }}>
          <MacBookFrame>
            {/* Inner Dashboard Mock */}
            <div className="w-full h-full bg-[#0a0a0a] flex flex-col">
              {/* Fake Dashboard Header */}
              <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-content-tertiary font-medium">app.lumn.xyz/dashboard/revenue</div>
                <div className="w-16" /> {/* Spacer */}
              </div>
              
              {/* Fake Dashboard Content */}
              <div className="flex-1 p-8 flex gap-6 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-light/10 via-transparent to-transparent">
                {/* Sidebar */}
                <div className="w-48 flex flex-col gap-4">
                  <div className="h-8 rounded-md bg-white/10 w-full" />
                  <div className="h-8 rounded-md bg-white/5 w-3/4" />
                  <div className="h-8 rounded-md bg-white/5 w-5/6" />
                </div>
                
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col gap-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="h-32 glass-card p-4 flex flex-col justify-end">
                      <div className="h-2 w-1/2 bg-white/20 rounded-full mb-2" />
                      <div className="h-8 w-3/4 bg-white/80 rounded-lg" />
                    </div>
                    <div className="h-32 glass-card p-4 flex flex-col justify-end">
                      <div className="h-2 w-1/2 bg-white/20 rounded-full mb-2" />
                      <div className="h-8 w-2/3 bg-white/80 rounded-lg" />
                    </div>
                    <div className="h-32 glass-card p-4 flex flex-col justify-end">
                      <div className="h-2 w-1/2 bg-white/20 rounded-full mb-2" />
                      <div className="h-8 w-4/5 bg-white/80 rounded-lg" />
                    </div>
                  </div>
                  
                  {/* Big Chart Area */}
                  <div className="flex-1 glass-card p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-light/5 opacity-50" />
                    <div className="h-full w-full border-b border-l border-white/20 relative">
                      {/* Fake Chart Lines */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path 
                          d="M0,100 Q50,80 100,50 T200,60 T300,20 T400,40 T500,10" 
                          fill="none" 
                          stroke="url(#brandGradient)" 
                          strokeWidth="3" 
                          vectorEffect="non-scaling-stroke"
                        />
                        <defs>
                          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f95482" />
                            <stop offset="100%" stopColor="#b33e60" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MacBookFrame>
        </div>
      </div>
    </section>
  );
};

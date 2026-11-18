import { motion } from 'framer-motion';
import { SettingsMockup } from './SettingsMockup';
import { MagneticButton } from './MagneticButton';
import { Zap, Shield, Sparkles, MoveRight } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="text-brand-light w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Built on modern architecture for millisecond response times and instant interactions.'
    },
    {
      icon: <Shield className="text-brand-light w-6 h-6" />,
      title: 'Secure by Design',
      description: 'Enterprise-grade security built directly into the core foundation of our platform.'
    },
    {
      icon: <Sparkles className="text-brand-light w-6 h-6" />,
      title: 'Ambient Interface',
      description: 'A beautiful glassmorphic UI that adapts to your environment and interactions.'
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ambient-glow opacity-30 pointer-events-none rounded-full blur-3xl z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 lumn-rise">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Everything you need, <br />
            <span className="text-brand-gradient">beautifully designed.</span>
          </h2>
          <p className="text-lg text-content-secondary">
            Experience a new standard of software design where form meets function in perfect harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          <div className="lg:col-span-5 space-y-8 lumn-rise" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-light/30 group-hover:bg-brand-light/10 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-content-secondary leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
            
            <div className="pt-4">
              <MagneticButton>
                <button className="flex items-center gap-2 text-white font-medium hover:text-brand-light transition-colors group">
                  Explore all features
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticButton>
            </div>
          </div>

          <div className="lg:col-span-7 lumn-rise" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Decorative elements around mockup */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-light/30 to-brand-dark/30 rounded-2xl blur-xl opacity-50" />
              <SettingsMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

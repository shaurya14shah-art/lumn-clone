import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Moon, Sun, Monitor, Lock, Key, Smartphone, ChevronRight } from 'lucide-react';

export function SettingsMockup() {
  const [activeTab, setActiveTab] = useState('notifications');
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(true);
  const [theme, setTheme] = useState('system');

  const tabs = [
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'appearance', label: 'Appearance', icon: Sun },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  return (
    <div className="glass-card w-full max-w-2xl mx-auto overflow-hidden flex flex-col md:flex-row shadow-ambient h-[450px]">
      {/* Sidebar */}
      <div className="w-full md:w-64 glass-panel border-r border-b-0 border-white/10 p-6 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-content-tertiary uppercase tracking-wider mb-2">Settings</h3>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${
                isActive 
                  ? 'bg-white/12 text-white' 
                  : 'text-content-secondary hover:bg-surface-hover hover:text-white'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-brand-light' : 'text-content-tertiary'} />
              {tab.label}
              {isActive && (
                <motion.div 
                  layoutId="activeTabIndicator" 
                  className="absolute left-0 w-1 h-6 bg-brand-light rounded-r-full"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto bg-black/40">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-display font-semibold text-white mb-1">Notification Preferences</h2>
                <p className="text-sm text-content-tertiary">Manage how we communicate with you.</p>
              </div>

              <div className="space-y-4">
                <ToggleItem 
                  icon={Smartphone}
                  title="Push Notifications" 
                  description="Receive notifications on your device."
                  enabled={pushEnabled}
                  onToggle={() => setPushEnabled(!pushEnabled)}
                />
                <div className="h-px w-full bg-white/5" />
                <ToggleItem 
                  title="Email Updates" 
                  description="Get weekly summaries and updates."
                  enabled={emailEnabled}
                  onToggle={() => setEmailEnabled(!emailEnabled)}
                />
                <div className="h-px w-full bg-white/5" />
                <ToggleItem 
                  title="Marketing Emails" 
                  description="Receive offers and product news."
                  enabled={marketingEnabled}
                  onToggle={() => setMarketingEnabled(!marketingEnabled)}
                />
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-display font-semibold text-white mb-1">Theme</h2>
                <p className="text-sm text-content-tertiary">Customize the interface look.</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <ThemeOption 
                  id="light" 
                  label="Light" 
                  icon={Sun} 
                  active={theme === 'light'} 
                  onClick={() => setTheme('light')} 
                />
                <ThemeOption 
                  id="dark" 
                  label="Dark" 
                  icon={Moon} 
                  active={theme === 'dark'} 
                  onClick={() => setTheme('dark')} 
                />
                <ThemeOption 
                  id="system" 
                  label="System" 
                  icon={Monitor} 
                  active={theme === 'system'} 
                  onClick={() => setTheme('system')} 
                />
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-display font-semibold text-white mb-1">Security Settings</h2>
                <p className="text-sm text-content-tertiary">Keep your account secure.</p>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-surface-hover transition-colors group border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-content-secondary group-hover:text-white transition-colors">
                      <Lock size={20} />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-white">Change Password</div>
                      <div className="text-xs text-content-tertiary">Last changed 3 months ago</div>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-content-tertiary group-hover:text-white transition-colors" />
                </button>

                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-surface hover:bg-surface-hover transition-colors group border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white/5 rounded-lg text-content-secondary group-hover:text-white transition-colors">
                      <Key size={20} />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-white">Two-Factor Authentication</div>
                      <div className="text-xs text-brand-light">Currently disabled</div>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-content-tertiary group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function ToggleItem({ title, description, enabled, onToggle, icon: Icon }: any) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {Icon && <Icon size={20} className="text-content-tertiary" />}
        <div>
          <div className="font-medium text-white text-sm">{title}</div>
          <div className="text-xs text-content-tertiary mt-0.5">{description}</div>
        </div>
      </div>
      <button 
        onClick={onToggle}
        role="switch"
        aria-checked={enabled}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-offset-2 focus:ring-offset-black ${
          enabled ? 'bg-brand' : 'bg-surface-panel'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

function ThemeOption({ label, icon: Icon, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${
        active 
          ? 'bg-white/10 border-brand-light/50 text-white shadow-[0_0_15px_rgba(249,84,130,0.15)]' 
          : 'bg-surface border-white/5 text-content-secondary hover:bg-surface-hover hover:border-white/10'
      }`}
    >
      <Icon size={24} className={active ? 'text-brand-light' : ''} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

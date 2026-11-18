import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core background and surface colors
        background: "#000000",
        surface: {
          DEFAULT: "rgba(255, 255, 255, 0.08)", // bg-white/8
          hover: "rgba(255, 255, 255, 0.12)",
          glass: "rgba(0, 0, 0, 0.85)", // bg-black/85
          panel: "rgba(0, 0, 0, 0.72)", // bg-black/72
        },
        // Typography colors mapping to zinc scale
        content: {
          primary: "#ffffff",
          secondary: "#d4d4d8", // text-zinc-300
          tertiary: "#71717a", // text-zinc-500
          inverse: "#18181b", // text-zinc-900
        },
        // Brand/ambient light colors
        brand: {
          light: "#f95482",
          DEFAULT: "#dc4a74",
          dark: "#b33e60",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.10)", // border-white/10
          strong: "rgba(255, 255, 255, 0.18)", // ring-white/18
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(180deg, #f95482 0%, #ec4f7c 30%, #dc4a74 55%, #ca456b 80%, #b33e60 100%)',
        'ambient-glow': 'radial-gradient(circle at 50% 50%, rgba(249, 84, 130, 0.15), transparent 70%)',
      },
      boxShadow: {
        'glass-ring': '0 0 0 1px rgba(255, 255, 255, 0.18)',
        'glass-ring-sm': '0 0 0 1px rgba(255, 255, 255, 0.10)',
        'ambient': '0 0 40px -10px rgba(249, 84, 130, 0.3)',
      },
      backdropBlur: {
        'xl': '24px',
      },
      animation: {
        'rise': 'rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ambient-shift': 'ambient-shift 10s ease-in-out infinite alternate',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ambient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      },
    },
  },
  plugins: [],
};

export default config;

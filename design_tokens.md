# Design Tokens & Tailwind Configuration

This document defines the core design tokens, Tailwind configuration, and global CSS required to replicate the dark, glassmorphic, ambient-light aesthetic of the Lumn website.

## 1. Tailwind Configuration (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
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
```

## 2. Global CSS (`globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-display: 'Bricolage Grotesque', sans-serif;
    --font-sans: 'Instrument Sans', sans-serif;
    
    /* Layout variable found in source */
    --lumn-chrome: 4rem; 
  }

  body {
    @apply bg-black text-white antialiased min-h-screen selection:bg-brand-light/30;
  }
  
  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  /* Reusable glassmorphic panels */
  .glass-panel {
    @apply bg-black/85 backdrop-blur-xl border-b border-white/10;
  }
  
  .glass-card {
    @apply bg-white/8 ring-1 ring-white/18 backdrop-blur-xl rounded-2xl;
  }
  
  .glass-button {
    @apply flex items-center justify-center rounded-full bg-white/8 px-7 py-3.5 text-[16px] font-semibold text-white ring-1 ring-white/18 backdrop-blur-xl hover:bg-white/12 transition-colors;
  }
  
  .primary-button {
    @apply flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[16px] font-bold text-zinc-900 hover:bg-zinc-200 transition-colors;
  }

  /* Text gradient utility */
  .text-brand-gradient {
    @apply bg-brand-gradient bg-clip-text text-transparent;
  }

  /* Animation utilities from original */
  .lumn-rise {
    @apply opacity-0 animate-rise;
  }
}

/* Base custom font configuration fallback */
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Sans:wght@400;500;600;700&display=swap');
```

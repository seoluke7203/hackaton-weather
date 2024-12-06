import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation:{
        'infinite-scroll': 'infinite-scroll 450s linear infinite',
        'appear-in': 'fadeIn 0.5s ease-in forwards',
        'appear-out': 'fadeOut 1s ease-out forwards',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fadeOut': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  daisyui: {
    themes: [ 'light' ],
  },
  plugins: [ daisyui ],
} satisfies Config

/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      primary: colors.zinc,
      accent: colors.blue
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      dmsans: ['DM+Sans', 'sans-serif']
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
      'hero': ['11rem', '10rem']
    },
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'fade-in': 'fade-in 3s ease-in-out forwards',
        title: 'title 3s ease-out forwards',
        'fade-left': 'fade-left 3s ease-in-out forwards',
        'fade-right': 'fade-right 3s ease-in-out forwards'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0%'
          },
          '75%': {
            opacity: '0%'
          },
          '100%': {
            opacity: '100%'
          }
        },
        'fade-left': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0%'
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%'
          },
          '100%': {
            opacity: '0%'
          }
        },
        'fade-right': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0%'
          },

          '30%': {
            transform: 'translateX(0%)',
            opacity: '100%'
          },
          '100%': {
            opacity: '0%'
          }
        },
        title: {
          '0%': {
            'line-height': '0%',
            'letter-spacing': '0.25em',
            opacity: '0'
          },
          '25%': {
            'line-height': '0%',
            opacity: '0%'
          },
          '80%': {
            opacity: '100%'
          },

          '100%': {
            'line-height': '100%',
            opacity: '100%'
          }
        }
      }
    }
  }
};

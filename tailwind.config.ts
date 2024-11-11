import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      lightblue: '#8ecaed',
      blue: '#4E93BC',
      darkblue: '#232638',
      redlight: '#DA6666',
      reddark: '#9C4E4E',
      graydark: '#434343',
      gray: '#595959',
      black: '#232638',
      graylight: '#FFFFFF',
      placeholder: '#D9D9D9',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      rokkitt: ['var(--font-rokkitt)', 'serif'], // Fonte Rokkitt
      poppins: ['var(--font-poppins)', 'sans-serif'], // Fonte Poppins
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'office-work': "url('/img/photo-1542744095-fcf48d80b0fd.avif')",
      },
    },
  },
}

export default config

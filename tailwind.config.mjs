/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'tertiary-fixed': '#e3e2e2',
        'secondary-fixed': '#e7e3ca',
        'on-secondary-fixed': '#1d1c0d',
        'surface-container-high': '#e9e9dd',
        'on-secondary-container': '#65634f',
        'on-tertiary-fixed': '#1b1c1c',
        'on-background': '#1b1c15',
        'secondary': '#615f4b',
        'inverse-surface': '#303129',
        'on-error': '#ffffff',
        'on-error-container': '#93000a',
        'background': '#fbfaee',
        'secondary-fixed-dim': '#cac7af',
        'tertiary-container': '#faf9f9',
        'on-primary-container': '#856e5c',
        'surface-container': '#efeee3',
        'outline-variant': '#cac6bb',
        'on-primary': '#ffffff',
        'error-container': '#ffdad6',
        'on-surface': '#1b1c15',
        'surface-container-low': '#f5f4e8',
        'surface-tint': '#705a4a',
        'on-secondary-fixed-variant': '#494835',
        'on-primary-fixed': '#27180b',
        'outline': '#79776d',
        'on-tertiary-fixed-variant': '#464747',
        'on-tertiary-container': '#727272',
        'surface-variant': '#e4e3d7',
        'primary-fixed-dim': '#dec1ad',
        'surface-bright': '#fbfaee',
        'on-primary-fixed-variant': '#574333',
        'on-secondary': '#ffffff',
        'on-surface-variant': '#48473e',
        'surface-container-highest': '#e4e3d7',
        'inverse-on-surface': '#f2f1e5',
        'surface-dim': '#dbdbcf',
        'error': '#ba1a1a',
        'secondary-container': '#e4e0c7',
        'primary': '#705a4a',
        'on-tertiary': '#ffffff',
        'inverse-primary': '#dec1ad',
        'tertiary-fixed-dim': '#c7c6c6',
        'primary-container': '#fff8f5',
        'surface-container-lowest': '#ffffff',
        'primary-fixed': '#fbddc8',
        'surface': '#fbfaee',
        'tertiary': '#5e5e5e'
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Space Grotesk', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0px',
        lg: '0px',
        xl: '0px',
        full: '9999px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
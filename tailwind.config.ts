import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'ipm': {'min': '768px', 'max': '800px'},
        'ipA': {'min': '912px', 'max': '950px'},
        'nx': {'min': '1024px', 'max': '1050px'},
        'pro':'912px',
        'fs':{'min':'280px', 'max':'300px'},
        'mg':'375px',
        'gs':{'min':'360px', 'max':'460px',},
        'ipa': {'min': '820px', 'max': '840px',},
        'ipad': '820px',

      }
        
      
    },
  },
  plugins: [],
};
export default config;

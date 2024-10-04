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
<<<<<<< HEAD
      screens: {
        nesthub: { max: "1024px" }, 
        nesthubmax: { max: "1280px" }, 
      },
=======
      screens:{
        'ipm': {'min': '1024px', 'max': '1050px'},
        'ipa':{'min':'1280px', 'max':'1300px'},
      
        
      }
>>>>>>> ae0a171228c7b2008e3e06941301e75e193c7e5b
    },
  },
  plugins: [],
};
<<<<<<< HEAD

export default config;
=======
export default config;
>>>>>>> ae0a171228c7b2008e3e06941301e75e193c7e5b

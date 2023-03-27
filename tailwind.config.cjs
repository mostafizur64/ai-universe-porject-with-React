/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#bf46fc",
        
"secondary": "#db4cbe",
        
"accent": "#9a0cc9",
        
"neutral": "#2B1C31",
        
"base-100": "#FAFAFA",
        
"info": "#79AAE7",
        
"success": "#196740",
        
"warning": "#EB7805",
        
"error": "#EB6A5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

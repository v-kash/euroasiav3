/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-navy": "#002152",
        "secondary-navy": "#001a42",
        "deep-navy": "#001233",
        accent: "#82c8e5",
        "accent-dark": "#2a9bc7",
        "accent-text": "#1a7a9e",
        "accent-light": "#a8daf0",
        "light-bg": "#F4F7FC",
        "lighter-bg": "#EEF2FF",
        "text-dark": "#1A1A1A",
        "text-muted": "#4B5563",
        "silver-grey": "#A9AEB7",
        "border-color": "#E5E7EB",
        "success-green": "#10B981",
        "warning-yellow": "#F59E0B",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        heading: ["Bebas Neue", "sans-serif"],
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "1.1", fontWeight: "900" }],
        h2: ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.9rem", { lineHeight: "1.5" }],
        label: [
          "0.75rem",
          { lineHeight: "1", fontWeight: "600", letterSpacing: "0.1em" },
        ],
        price: ["1.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        amount: ["2rem", { lineHeight: "1.1", fontWeight: "800" }],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #001233 0%, #002152 60%, #003366 100%)",
        "cta-gradient": "linear-gradient(135deg, #002152 0%, #003366 100%)",
        "accent-gradient": "linear-gradient(135deg, #82c8e5 0%, #5fb8d9 100%)",
        "light-gradient": "linear-gradient(135deg, #F4F7FC 0%, #EEF2FF 100%)",
        "navy-texture":
          "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(60px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "slide-in-right":
          "slide-in-right 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        dashboard: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

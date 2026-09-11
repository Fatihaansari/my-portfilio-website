import altawakal from "@/assets/portfolio/altawakal.png";
import butterfly from "@/assets/portfolio/butterfly.png";
import amazon from "@/assets/portfolio/amazon.png";
import project3 from "@/assets/portfolio/project3.png";
import project4 from "@/assets/portfolio/project4.png";
import project5 from "@/assets/portfolio/project5.png";
import project6 from "@/assets/portfolio/project6.png";
import project7 from "@/assets/portfolio/project7.png";
import project9 from "@/assets/portfolio/project9.png";
import cureThumb from "@/assets/portfolio/cure-thumbnail.png.asset.json";
import neuraThumb from "@/assets/portfolio/neura-thumbnail.png.asset.json";
import supportGenieThumb from "@/assets/portfolio/support-genie-thumbnail.png.asset.json";

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  live?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Cure Dental Care",
    description:
      "Modern dental care landing page for a Karachi-based clinic — appointment CTAs, service highlights, social proof and contact integration.",
    image: cureThumb.url,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive"],
    features: ["Hero with CTA", "Services section", "Call / WhatsApp buttons", "Google Reviews", "Social links"],
    live: "https://curedentalcarecom.vercel.app",
  },
  {
    title: "Al Tawakal Restaurant",
    description:
      "Premium restaurant landing page for a beloved Karachi eatery — hero with reviews, menu highlights, gallery and contact CTA.",
    image: altawakal,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive"],
    features: ["Hero with live status", "Gallery", "Reviews", "Menu section"],
    live: "https://lnkd.in/dT8r2AbA",
  },
  {
    title: "Butterfly Maxi — Brand Campaign",
    description:
      "Dark, modern campaign page celebrating Pakistani women in every role, with animated role cards and product highlights.",
    image: butterfly,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    features: ["Animated cards", "Role grid", "Brand storytelling"],
    live: "https://lnkd.in/dHPw8hak",
  },
  {
    title: "Amazon Landing Clone",
    description:
      "Pixel-accurate Amazon landing page clone with responsive category grid, hero banner and top navigation.",
    image: amazon,
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    features: ["Category grid", "Sticky nav", "Hero banner"],
  },
  {
    title: "myTunes — Music Landing",
    description:
      "Dark, cinematic landing page for a music streaming concept with hero, pricing and device showcase.",
    image: project6,
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: ["Cinematic hero", "Pricing tiers", "Device mockups"],
  },
  {
    title: "Foodie — Restaurant Menu",
    description:
      "Clean, appetite-driven restaurant page with menu explorer, promo bar and reservation call-to-actions.",
    image: project5,
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    features: ["Menu grid", "Promo bar", "Reservation CTA"],
  },
  {
    title: "Full-Stack Developer Portfolio",
    description:
      "Dark hero portfolio with strong typographic hierarchy and service cards for a developer persona.",
    image: project4,
    tech: ["HTML5", "CSS3", "JavaScript"],
    features: ["Bold hero", "Service cards", "About section"],
  },
  {
    title: "Parallax Nature Site",
    description:
      "Immersive parallax scrolling website exploring nature with layered depth and section reveals.",
    image: project3,
    tech: ["HTML5", "CSS3", "JavaScript", "Parallax"],
    features: ["Parallax effects", "Section reveals", "Cinematic imagery"],
  },
  {
    title: "GreatZone — Blog / Magazine",
    description:
      "Minimal blog and magazine layout focused on readable typography and story-first cards.",
    image: project9,
    tech: ["HTML5", "CSS3", "Responsive"],
    features: ["Article grid", "Featured post", "Clean typography"],
  },
  {
    title: "YouTube Grid Clone",
    description:
      "Faithful YouTube channel grid clone practicing responsive card layouts and dark UI systems.",
    image: project7,
    tech: ["HTML5", "CSS3", "Flexbox", "Grid"],
    features: ["Responsive grid", "Dark theme", "Sidebar nav"],
  },
];

export const stack = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS",
  "Bootstrap", "Git", "GitHub", "REST API", "Responsive Design",
  "SEO", "Accessibility", "Performance",
];

export const tools = [
  "VS Code", "Git", "GitHub", "Lovable", "Cloud Platforms", "Figma",
  "Chrome DevTools", "Postman", "Vite", "npm", "Canva", "CapCut",
  "ChatGPT", "GitHub Copilot",
];

export const services = [
  "Custom Landing Pages",
  "Responsive Business Websites",
  "Portfolio Websites",
  "Restaurant Websites",
  "Digital Menu Pages",
  "AI Chatbot Integration",
  "Contact Forms",
  "Lead Generation Forms",
  "Modern React Websites",
  "Tailwind CSS Development",
  "Website Redesign",
  "Performance Optimization",
  "SEO-Friendly Front-End",
  "Resume & CV Design",
  "Poster Design",
  "Social Media Design",
  "Email Templates",
  "Bug Fixes",
  "Website Deployment",
];

export const socials = [
  { name: "GitHub", href: "https://github.com/Fatihaansari", brand: "github" as const },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/fatiha-ansari-88967b3a7/", brand: "linkedin" as const },
  { name: "Freelancer", href: "https://www.freelancer.com/u/fatihaansari?frm=fatihaansari&sb=t", brand: "freelancer" as const },
  { name: "Contra", href: "https://contra.com/fatiha_ansari_0nylahht?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=fatiha_ansari_0nylahht", brand: "contra" as const },
  { name: "Gumroad", href: "https://gumroad.com/", brand: "gumroad" as const },
  { name: "Email", href: "mailto:fatihaansari786@gmail.com", brand: "email" as const },
];

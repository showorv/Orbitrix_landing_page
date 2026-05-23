export type Project = {
    id: string;
    title: string;
    tagline: string;
    image: string;          // put images in /public/projects/
    tags: string[];         // tech stack
    category: string;
    year: string;
    problem: string;
    solution: string;
    results: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
  
  export const projects: Project[] = [
    {
      id: "nexacloud",
      title: "NexaCloud Dashboard",
      tagline: "SaaS analytics platform for cloud infrastructure teams",
      image: "/projects/nexacloud.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind", "Recharts", "Supabase"],
      category: "SaaS · Web App",
      year: "2024",
      problem:
        "The client's DevOps team was managing cloud costs across 4 providers using spreadsheets and disconnected tools. There was no single view of spend, no alerting, and billing surprises every month.",
      solution:
        "We designed and built a unified dashboard that aggregates data from AWS, GCP, Azure, and DigitalOcean in real time. Custom alert rules, exportable reports, and a role-based access system gave the team full visibility and control.",
      results: [
        "42% reduction in cloud overspend within 3 months",
        "Onboarded 6 enterprise clients in the first quarter",
        "Dashboard loads under 1.2s on cold start",
        "Zero critical bugs in first 90 days post-launch",
      ],
      liveUrl: "https://nexacloud.io",
    },
    {
      id: "luxvault",
      title: "LuxVault Store",
      tagline: "Premium e-commerce experience for a luxury accessories brand",
      image: "/projects/luxvault.jpg",
      tags: ["Next.js", "Shopify API", "Framer Motion", "Tailwind", "Stripe"],
      category: "E-commerce · Brand",
      year: "2024",
      problem:
        "LuxVault had great products but a Shopify theme that felt generic and cheap — inconsistent with their $300+ price point. Cart abandonment was over 70% and their bounce rate was climbing.",
      solution:
        "We rebuilt the storefront from scratch using the Shopify Storefront API with a fully custom Next.js frontend. Micro-animations, a curated product presentation flow, and a one-page checkout reduced friction at every step.",
      results: [
        "Cart abandonment dropped from 71% to 38%",
        "Average session duration increased by 2.4×",
        "Revenue up 60% in first 60 days post-launch",
        "Page speed score improved from 54 to 97",
      ],
      liveUrl: "https://luxvault.store",
    },
    {
      id: "vesta",
      title: "Vesta Finance",
      tagline: "Brand identity and marketing site for a fintech startup",
      image: "/projects/vesta.jpg",
      tags: ["Next.js", "TypeScript", "Framer Motion", "Figma", "Resend"],
      category: "Fintech · Identity",
      year: "2025",
      problem:
        "Vesta were raising their seed round and needed a brand and website that could hold a room. Their existing presence was a single-page placeholder that looked like a template — not a company worth investing in.",
      solution:
        "We built the full brand system (logo, color, type, tone of voice) and translated it into a high-motion marketing site. An investor-focused case study section and a waitlist funnel were built to support the raise.",
      results: [
        "Secured $1.2M seed round within 8 weeks of launch",
        "Waitlist grew to 3,400 signups in first month",
        "Featured in two fintech newsletters",
        "Pitch deck redesigned using the new brand system",
      ],
      liveUrl: "https://vestafinance.io",
    },
  ];
  
  export function getProject(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
  }
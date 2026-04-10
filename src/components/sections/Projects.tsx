"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Target, Lightbulb } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce UI Demo",
    problem: "Standard e-commerce templates often lack the premium feel and smooth performance required for high-end brands.",
    solution: "A high-performance, animated storefront built with Next.js, focusing on visual excellence and micro-interactions.",
    features: ["Smooth Transitions", "Dynamic Filtering", "Optimized Checkout"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    demo: "https://modern-clothing-store.vercel.app",
    github: "https://github.com/rightaswanth/modern-clothing-store",
  },
  {
    title: "Business Landing Page",
    problem: "Modern enterprises require conversion-focused landing pages that load instantly and look professional.",
    solution: "A SEO-optimized, highly responsive landing page with a modern design system and clean architecture.",
    features: ["Conversion Optimized", "SEO Ready", "Modern UI/UX"],
    tech: ["React", "Vite", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    demo: "https://modern-bussiness-web.vercel.app",
    github: "https://github.com/rightaswanth/modern-bussiness-web",
  },
  {
    title: "Photography Portfolio",
    problem: "Creatives need a unique way to showcase their work that emphasizes visual storytelling and brand identity.",
    solution: "A minimalist, cinematic portfolio template designed for photographers and artists to showcase high-res projects.",
    features: ["Cinematic Gallery", "Minimalist Design", "Smooth Scrolling"],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=800&auto=format&fit=crop",
    demo: "https://robinbr-photography.vercel.app",
    github: "https://github.com/rightaswanth/robinbbr-photography",
  },
];


export default function Projects() {
  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Real-world case studies demonstrating problem-solving and technical expertise."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-dark rounded-3xl overflow-hidden border border-white/5 group flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx < 2}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 glass rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>


            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                {project.title}
              </h3>
              
              <div className="space-y-4 mb-6 flex-1">
                <div className="flex gap-3">
                  <Target size={18} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Problem</p>
                    <p className="text-sm text-gray-300">{project.problem}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Lightbulb size={18} className="text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Solution</p>
                    <p className="text-sm text-gray-300">{project.solution}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Layers size={18} className="text-gray-400 shrink-0 mt-1" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Key Features</p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {project.features.map((f, i) => (
                        <li key={i} className="text-xs text-gray-400">• {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demo}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 transition-all border border-white/5"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                <a
                  href={project.github}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 transition-all border border-white/5"
                >
                  GitHub <GithubIcon size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

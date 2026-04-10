"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Monitor, Smartphone, ShoppingCart, BrainCircuit, Database } from "lucide-react";

const services = [
  {
    title: "Modern Business Websites",
    description: "High-performance websites tailored for corporate and small businesses to establish a strong online presence.",
    audience: "SMEs, Corporations, Startups",
    benefits: "Faster load times, SEO optimization, responsive layout.",
    icon: <Monitor className="w-10 h-10 text-primary" />,
  },
  {
    title: "Portfolio Websites",
    description: "Personal branding websites designed to showcase your work and skills with a premium touch.",
    audience: "Freelancers, Artists, Photographers",
    benefits: "Visual excellence, micro-animations, personal brand building.",
    icon: <Smartphone className="w-10 h-10 text-accent" />,
  },
  {
    title: "E-commerce Solutions",
    description: "Scalable online stores with seamless checkout, inventory management, and high conversion design.",
    audience: "Retailers, Digital Product Sellers",
    benefits: "Payment integration, secure transactions, user-friendly CMS.",
    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
  },
  {
    title: "AI Automation Tools",
    description: "Custom AI scripts and automated workflows using LLMs to save time and increase productivity.",
    audience: "Operations Teams, Tech Companies",
    benefits: "Cost reduction, error minimization, task acceleration.",
    icon: <BrainCircuit className="w-10 h-10 text-accent" />,
  },
  {
    title: "Python Backend Development",
    description: "Robust, secure, and lightning-fast APIs and backends built with Python, FastAPI, or Django.",
    audience: "Mobile Apps, Complex Web Platforms",
    benefits: "High scalability, secure data handling, fast performance.",
    icon: <Database className="w-10 h-10 text-primary" />,
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      title="Professional Services"
      subtitle="Crafting digital solutions that drive results. From front-end design to complex AI-driven backends."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className={`glass-dark p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group ${
              idx === 4 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-6 line-clamp-3">
              {service.description}
            </p>
            
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Target Audience:</span>
                <p className="text-sm text-gray-300">{service.audience}</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Key Benefits:</span>
                <p className="text-sm text-gray-300">{service.benefits}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Search, PenTool, Code, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    title: "Requirement Analysis",
    description: "Deep dive into your business goals and user needs to define the project scope.",
    icon: <Search className="w-8 h-8 text-primary" />,
  },
  {
    title: "Planning & Design",
    description: "Creating wireframes and modern UI designs that align with your brand identity.",
    icon: <PenTool className="w-8 h-8 text-accent" />,
  },
  {
    title: "Development",
    description: "Writing clean, scalable, and efficient code with the latest technologies.",
    icon: <Code className="w-8 h-8 text-primary" />,
  },
  {
    title: "Testing",
    description: "Rigorous testing across browsers and devices to ensure a bug-free experience.",
    icon: <CheckCircle className="w-8 h-8 text-accent" />,
  },
  {
    title: "Delivery",
    description: "Deploying your solution to production and providing post-launch support.",
    icon: <Rocket className="w-8 h-8 text-primary" />,
  },
];

export default function Process() {
  return (
    <Section
      id="process"
      title="How I Work"
      subtitle="A tried and tested workflow to turn your ideas into reality."
      className="bg-card"
    >
      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl glass mb-6 flex items-center justify-center shadow-lg group hover:scale-110 transition-transform">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-4 border-background">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

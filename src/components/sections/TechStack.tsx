"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const groups = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Python", "FastAPI", "Django", "Node.js", "RESTful APIs"],
  },
  {
    name: "AI & Tools",
    skills: ["OpenAI API", "LangChain", "Automation", "Git / GitHub", "Docker"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Superbase", "Prisma"],
  },
];

export default function TechStack() {
  return (
    <Section
      id="tech"
      title="The Engine Room"
      subtitle="The cutting-edge technologies I use to build high-performance applications."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {groups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-dark p-8 rounded-2xl border border-white/5"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">{group.name}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

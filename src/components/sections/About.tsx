"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { User, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="The person behind the code and design."
      className="bg-card"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative px-6"
        >
          <div className="aspect-square glass-dark rounded-3xl overflow-hidden border border-white/5 relative z-10 flex items-center justify-center">
            <img 
              src="/images/profile.png" 
              alt="Aswanth P V" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center p-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">3+</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 blur-3xl rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Bridging the gap between <span className="text-primary">Business Problems</span> and <span className="text-accent">Technical Solutions</span>.
          </h3>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            I am a Software Engineer with <span className="text-white font-semibold">3 years of experience</span> in building scalable applications and modern web experiences. With deep expertise in <span className="text-white font-semibold">Python</span> and modern frontend frameworks, I specialize in creating intelligent automation and fast, reliable software systems.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                <Target className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Problem-Solving Mindset</h4>
                <p className="text-sm text-gray-400">I don't just write code; I design solutions that help businesses grow and automate repetitive tasks.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                <Zap className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">AI-First Approach</h4>
                <p className="text-sm text-gray-400">Leveraging the power of LLMs and automation to build next-generation tools for the modern era.</p>
              </div>
            </div>
          </div>

          <motion.div 
            className="mt-10 p-6 glass-dark border-l-4 border-primary rounded-r-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <p className="italic text-gray-300">
              "My goal is to deliver high-quality products that provide exceptional user experiences and measurable business value."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

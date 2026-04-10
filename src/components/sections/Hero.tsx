"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-background overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/15 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">3 Years Experience Software Engineer</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-gradient">Aswanth P V</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Specialized in <span className="text-white font-medium">Python Development</span>, <span className="text-white font-medium">Modern Websites</span>, and <span className="text-white font-medium">AI Automation</span>. Solving complex problems through clean code and smart logic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
            >
              View Projects <ArrowRight size={20} />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 glass text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:bg-white/10"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-dark rounded-2xl p-8 border border-white/10 shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
            {/* Visual element representing backend/AI */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { icon: <Terminal className="text-primary" />, label: "Python Development", value: "95%" },
                { icon: <Code2 className="text-accent" />, label: "Modern Websites", value: "90%" },
                { icon: <Sparkles className="text-yellow-400" />, label: "AI Automation", value: "85%" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="glass p-4 rounded-xl border border-white/5"
                >
                  <div className="mb-2">{item.icon}</div>
                  <div className="text-sm font-semibold">{item.label}</div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full mt-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: item.value }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Geometric backgrounds */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-[60px] rounded-full" />
          </div>
          
          {/* Decorative rings */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full" />
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}

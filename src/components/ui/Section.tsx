"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({
  children,
  id,
  className = "",
  containerClassName = "",
  title,
  subtitle,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className={`max-w-7xl mx-auto ${containerClassName}`}>
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

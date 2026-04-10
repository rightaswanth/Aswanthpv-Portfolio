"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";

import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2d376956-1cc4-45ea-9fc1-535877fc3d65",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error connection to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section
      id="contact"
      title="Let's Build Your Project"
      subtitle="Ready to start your next big thing? Get in touch and let's make it happen."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="glass-dark p-8 rounded-2xl border border-white/5 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-8 text-gradient">Contact Information</h3>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Email</p>
                  <p className="text-lg font-medium text-gray-200">writetoaswanthpv@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Phone</p>
                  <p className="text-lg font-medium text-gray-200">+91 9746405636</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Location</p>
                  <p className="text-lg font-medium text-gray-200">Kerala, Kochi (Remote Friendly)</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-xs text-gray-500 font-bold uppercase mb-4">Social Profiles</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/aswanthpv" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-primary hover:border-primary transition-all group" title="LinkedIn">
                  <LinkedinIcon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/rightaswanth" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-primary hover:border-primary transition-all group" title="GitHub">
                  <GithubIcon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.instagram.com/aswanthp.v/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-primary hover:border-primary transition-all group" title="Instagram">
                  <InstagramIcon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/919746405636"
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-900/20"
              >
                <MessageCircle size={24} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-dark p-12 rounded-3xl border border-primary/20 text-center h-full flex flex-col justify-center items-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Send size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
              <p className="text-gray-400 mb-8 max-w-sm">
                Thank you for reaching out. I've received your message and will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 font-bold transition-all"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-dark p-8 rounded-3xl border border-white/5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary outline-none transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary outline-none transition-colors text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary outline-none transition-colors text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-primary outline-none transition-colors text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20 ${isSubmitting ? 'opacity-70 cursor-not-allowed scale-95' : 'hover:scale-[1.02] active:scale-95'}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={20} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}


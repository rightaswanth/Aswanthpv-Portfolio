"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
            ASWANTH <span className="text-primary italic">P V</span>
          </Link>
          <p className="text-gray-400 max-w-sm mb-6">
            Building modern web experiences and AI-driven solutions that help businesses scale and succeed in the digital age.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/rightaswanth" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:text-primary transition-colors" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aswanthpv" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:text-primary transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://www.instagram.com/aswanthp.v/" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:text-primary transition-colors" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="mailto:writetoaswanthpv@gmail.com" className="p-2 glass rounded-lg hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="#process" className="hover:text-white transition-colors">Process</Link></li>
            <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Aswanth P V. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm flex items-center">
          Designed & Built with <span className="text-red-500 mx-1">❤</span> using Next.js
        </p>
      </div>
    </footer>
  );
}

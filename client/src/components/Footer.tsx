import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, X, Mail, Phone } from "lucide-react";

import logoPng from "@/assets/logo.png";

export function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none"
    >
      <motion.div
        onClick={() => setIsHovered(!isHovered)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          width: isHovered ? (isMobile ? "94%" : "92%") : "220px",
          height: isHovered ? "auto" : "50px",
          y: isHovered ? -10 : -20,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="pointer-events-auto bg-foreground/95 backdrop-blur-lg text-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 mx-4 mb-4 md:mb-6"
      >
        {!isHovered ? (
          <div className="h-full flex items-center justify-center space-x-2 cursor-pointer">
            <span className="font-display font-semibold">Connect with us</span>
            <ArrowUpRight size={16} />
          </div>
        ) : (
          <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div className="flex justify-between items-center md:block">
                <img src={logoPng} alt="10xGrowth" className="h-7 w-auto brightness-0 invert" />
                {isMobile && <X size={20} className="text-white/40" onClick={(e) => { e.stopPropagation(); setIsHovered(false); }} />}
              </div>
              <p className="text-white/60 text-xs md:text-sm max-w-[240px]">
                Your partner in sustainable, scalable B2B growth.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[hsl(var(--yellow-highlight))]">Explore</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Why Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[hsl(var(--yellow-highlight))]">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[hsl(var(--yellow-highlight))]">Contact</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-[hsl(var(--yellow-highlight))]" />
                  <a href="mailto:info@10xgrowth.com" className="hover:text-white transition-colors">info@10xgrowth.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-[hsl(var(--yellow-highlight))]" />
                  <a href="tel:+919820020753" className="hover:text-white transition-colors">+91 982 002 0753</a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-4 text-[hsl(var(--yellow-highlight))]">Social</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/10xgrowth-linkedin/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="md:col-span-4 border-t border-white/10 pt-4 text-center text-xs text-white/40">
              © {new Date().getFullYear()} 10xGrowth Inc. All rights reserved.
            </div>
          </div>
        )}
      </motion.div>
    </footer>
  );
}

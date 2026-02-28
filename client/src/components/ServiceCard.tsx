import { motion } from "framer-motion";
import { type LucideIcon, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay: number;
  href?: string;
}

export function ServiceCard({ title, description, icon: Icon, color, delay, href }: ServiceCardProps) {
  const [, setLocation] = useLocation();

  const handleClick = () => {
    if (!href) return;
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      setLocation(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: `0 20px 25px -5px ${color}20, 0 10px 10px -5px ${color}10`,
        transition: { duration: 0.2 }
      }}
      onClick={handleClick}
      className={`group relative bg-white rounded-3xl p-8 border border-border transition-all overflow-hidden ${href ? 'cursor-pointer' : ''}`}
    >
      {/* Decorative background blob */}
      <div
        className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 blur-3xl transition-transform group-hover:scale-150 duration-500"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          <Icon size={28} strokeWidth={1.5} />
        </div>

        <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {href && (
          <div className="flex items-center text-sm font-semibold mt-auto group-hover:translate-x-2 transition-transform duration-300" style={{ color }}>
            Learn More <ArrowRight size={16} className="ml-1" />
          </div>
        )}
      </div>

      {/* Bottom border highlight */}
      <div
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

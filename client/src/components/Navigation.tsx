import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logoPng from "@/assets/logo.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { scrollY } = useScroll();
  const [location, setLocation] = useLocation();

  const darkHeroPages = [
    "/services/continuous-innovation-framework",
    "/services/growth-operating-system",
    "/services/zoho-business-operating-system",
    "/services/growth-studio",
    "/services/performance-marketing"
  ];
  const isDarkHeroPage = darkHeroPages.includes(location);

  useEffect(() => {
    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setLocation("/");
  };

  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  const headerBackdrop = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 4px 6px -1px rgba(0, 0, 0, 0.05)"]
  );

  const navLinks = [
    { name: "Home", href: "/", type: "route" },
    { name: "Services", href: "/#services", type: "hash" },
    { name: "Process", href: "/#process", type: "hash" },
    { name: "Why Us", href: "/#why-us", type: "hash" },
    { name: "Team", href: "/#team", type: "hash" },
    { name: "Our Vision", href: "/our-vision", type: "route" },
    { name: "About Us", href: "/about", type: "route" },
  ];

  const handleNavClick = (href: string, type: string) => {
    setIsMobileOpen(false);

    if (type === "route") {
      setLocation(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // It's a hash link
      if (location !== "/") {
        setLocation("/");
        // Wait for navigation then scroll
        setTimeout(() => {
          const id = href.replace("/", "");
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const id = href.replace("/", "");
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        backdropFilter: headerBackdrop,
        boxShadow: headerShadow
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setLocation("/")}>
            <img src={logoPng} alt="10xGrowth" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.type)}
                className={`relative text-sm font-medium transition-colors group ${location === link.href
                  ? "text-[hsl(var(--blue-tech))]"
                  : (isScrolled || !isDarkHeroPage ? "text-foreground/80 hover:text-[hsl(var(--blue-tech))]" : "text-white hover:text-[hsl(var(--blue-tech))]")
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[hsl(var(--blue-tech))] transition-all ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>
            ))}

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-slate-50 border border-slate-200 p-0 overflow-hidden hover:bg-slate-100">
                    <User size={20} className="text-slate-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal border-b pb-2">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.user_metadata?.full_name || "Profile"}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => setLocation("/login")}
                className="bg-[hsl(var(--orange-action))] hover:bg-[hsl(var(--orange-action))/90] text-white rounded-full px-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`${isScrolled || !isDarkHeroPage ? "text-foreground" : "text-white"} p-2`}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b border-border absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.type)}
                  className={`block w-full text-left px-3 py-4 text-base font-medium hover:bg-muted rounded-lg ${location === link.href ? "text-[hsl(var(--blue-tech))]" : "text-foreground"}`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                {user ? (
                  <Button
                    onClick={handleLogout}
                    className="w-full bg-slate-100 text-slate-700 rounded-full"
                  >
                    Log Out
                  </Button>
                ) : (
                  <Button
                    onClick={() => { setLocation("/login"); setIsMobileOpen(false); }}
                    className="w-full bg-[hsl(var(--orange-action))] text-white rounded-full"
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

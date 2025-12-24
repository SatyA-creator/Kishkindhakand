import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Info,
  Sparkles,
  Image,
  Download,
  BookOpen,
  Users,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Features", href: "#features", icon: Sparkles },
  { name: "Media", href: "#media", icon: Image },
  { name: "Steam", href: "#steam", icon: Download },
  { name: "Devlog", href: "#devlog", icon: BookOpen },
  { name: "Join", href: "#join", icon: Users },
  { name: "Support", href: "#support", icon: Heart },
];

export default function Sidebar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
      navLinks.forEach((link) => {
        const el = document.getElementById(link.href.substring(1));
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(link.href.substring(1));
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between h-16 px-4 bg-background/90 backdrop-blur border-b">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-12 h-12" />
        </div>
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-2 hover:bg-jungle-emerald/10 rounded-lg transition-colors"
        >
          <Menu className="w-7 h-7 text-jungle-emerald" />
        </button>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside
        className={`group hidden md:flex fixed top-0 left-0 h-screen z-40
        w-20 hover:w-72 transition-all duration-500 ease-in-out
        flex-col justify-between py-8
        ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-r border-jungle-emerald/20"
            : "bg-background/85 backdrop-blur-lg border-r border-border/30"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center justify-center group-hover:justify-start group-hover:px-6 mb-10 transition-all duration-500">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 shrink-0" />
        </div>

        {/* NAV LINKS */}
        <nav className="flex-1 flex flex-col gap-3 px-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);

            return (
              <a
                key={link.name}
                href={link.href}
                className="relative flex items-center group gap-3"
              >
                {/* Wood‑effect icon container */}
                <div
                  className={`
                    relative overflow-hidden
                    flex items-center justify-center
                    w-11 h-11 rounded-xl
                    text-amber-100
                    bg-[linear-gradient(135deg,#3b1f0e,#5a2e16,#3b1f0e)]
                    shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_8px_18px_rgba(0,0,0,0.45)]
                    border border-amber-700/40
                    transition-all duration-300
                    group-hover:scale-105
                    ${isActive ? "ring-2 ring-amber-400/70" : "group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]"}
                  `}
                >
                  {/* Wood grain overlay */}
                  <span
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 6px)",
                    }}
                  />

                  {/* Glow on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-300/20 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <Icon className="relative z-10 w-5 h-5" />
                </div>

                {/* Label */}
                <span
                  className={`
                    ml-1 font-body text-sm font-medium whitespace-nowrap
                    opacity-0 max-w-0 overflow-hidden
                    group-hover:opacity-100 group-hover:max-w-xs
                    transition-all duration-500
                    ${isActive ? "text-jungle-emerald" : "text-muted-foreground group-hover:text-amber-100"}
                  `}
                >
                  {link.name}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setIsMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed top-0 left-0 z-50 h-full w-80 bg-background p-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <img src="/logo.png" className="w-12 h-12" />
                  <span className="font-display font-bold text-lg">
                    <span className="text-jungle-emerald">Kishkindha</span>{" "}
                    <span>Kand</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 hover:bg-jungle-emerald/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-jungle-emerald" />
                </button>
              </div>

              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href.substring(1);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-4 py-3"
                  >
                    {/* Wood‑effect icon for mobile */}
                    <div
                      className={`
                        relative overflow-hidden
                        flex items-center justify-center
                        w-10 h-10 rounded-xl
                        text-amber-100
                        bg-[linear-gradient(135deg,#3b1f0e,#5a2e16,#3b1f0e)]
                        shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_8px_18px_rgba(0,0,0,0.45)]
                        border border-amber-700/40
                        transition-all duration-300
                        ${isActive ? "ring-2 ring-amber-400/70" : "hover:scale-105 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]"}
                      `}
                    >
                      <span
                        className="absolute inset-0 opacity-30 pointer-events-none"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 6px)",
                        }}
                      />
                      <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-300/20 to-amber-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <Icon className="relative z-10 w-5 h-5" />
                    </div>

                    <span
                      className={`font-body text-base ${
                        isActive ? "text-jungle-emerald" : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

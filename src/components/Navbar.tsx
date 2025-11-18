import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Accueil", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Notre Réalisation", href: "#gallery", id: "gallery" },
  { label: "Processus", href: "#process", id: "process" },
  { label: "Témoignages", href: "#testimonials", id: "testimonials" },
  { label: "Notre Équipe", href: "#team", id: "team" },
  { label: "Vidéos", href: "#videos", id: "videos" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 20);

          // Calculate scroll progress
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const maxScroll = documentHeight - windowHeight;
          const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
          setScrollProgress(progress);

          // Handle navbar visibility based on scroll direction
          const scrollDifference = scrollTop - lastScrollY.current;
          const scrollThreshold = 5; // Minimum scroll amount to trigger hide/show

          if (scrollTop < 10) {
            // Always show at very top (first 10px)
            setIsVisible(true);
          } else if (scrollDifference > scrollThreshold) {
            // Scrolling down - hide navbar
            setIsVisible(false);
          } else if (scrollDifference < -scrollThreshold) {
            // Scrolling up - show navbar
            setIsVisible(true);
          }
          
          lastScrollY.current = scrollTop;

          // Update active section based on scroll position
          const sections = navItems.map((item) => item.id);
          const scrollPosition = scrollTop + 150;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
              const offsetTop = section.offsetTop;
              if (scrollPosition >= offsetTop) {
                setActiveSection(sections[i]);
                break;
              }
            }
          }

          // If at top, set home as active
          if (scrollTop < 100) {
            setActiveSection("home");
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      // Store the target section to scroll to after navigation
      sessionStorage.setItem("scrollToSection", href);
      navigate("/");
      // Scroll to top immediately for clean transition
      window.scrollTo({ top: 0, behavior: "instant" });
      // The Index component's useEffect will handle the scrolling
      // This is just a backup in case the component takes longer to mount
      setTimeout(() => {
        const scrollToTarget = sessionStorage.getItem("scrollToSection");
        if (scrollToTarget) {
          const element = document.querySelector(scrollToTarget);
          if (element) {
            // Use requestAnimationFrame for smoother scrolling
            requestAnimationFrame(() => {
              const offset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
              // Remove after successful scroll
              sessionStorage.removeItem("scrollToSection");
            });
          } else {
            // If element not found, try again after a bit more time
            setTimeout(() => {
              const retryElement = document.querySelector(scrollToTarget);
              if (retryElement) {
                const offset = 80;
                const elementPosition = retryElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
                // Remove after successful scroll
                sessionStorage.removeItem("scrollToSection");
              }
            }, 300);
          }
        }
      }, 250);
    } else {
      // We're already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md border-b border-gray-200"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <img
                  src={logo}
                  alt="Wall Dream Logo"
                  className="relative h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900">
                  Wall
                </span>
                <span className="text-xl font-bold text-accent">Dream</span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(1).map((item, index) => {
              // Check if this is the Contact item (last item)
              const isContact = item.id === "contact";
              
              if (isContact) {
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                  >
                    <Button
                      type="button"
                      onClick={() => scrollToSection(item.href)}
                      className="group relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                    >
                      <Phone className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                      <span>{item.label}</span>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </Button>
                  </motion.div>
                );
              }
              
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
                    activeSection === item.id
                      ? "text-accent"
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-accent/10 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-3">

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                    <img
                      src={logo}
                      alt="Wall Dream Logo"
                      className="h-10 w-10 object-contain"
                    />
                    <div>
                      <span className="text-xl font-bold text-gray-900">Wall</span>
                      <span className="text-xl font-bold text-accent">Dream</span>
                    </div>
                  </div>

                  {/* Mobile Navigation Items */}
                  <nav className="flex flex-col gap-2 flex-1">
                    {navItems.map((item, index) => {
                      const isContact = item.id === "contact";
                      
                      if (isContact) {
                        return (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="pt-6 border-t border-gray-200"
                          >
                            <Button
                              type="button"
                              onClick={() => scrollToSection(item.href)}
                              className="w-full group relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300"
                              size="lg"
                            >
                              <Phone className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                              {item.label}
                              <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                              />
                            </Button>
                          </motion.div>
                        );
                      }
                      
                      return (
                        <motion.a
                          key={item.id}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.href);
                          }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={cn(
                            "relative px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200",
                            activeSection === item.id
                              ? "text-accent bg-accent/10"
                              : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                          )}
                        >
                          {item.label}
                          {activeSection === item.id && (
                            <motion.div
                              layoutId="mobileActiveSection"
                              className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full"
                              initial={false}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </motion.a>
                      );
                    })}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent via-accent/70 to-accent origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrollProgress }}
          transition={{ duration: 0.1 }}
          style={{ width: "100%" }}
        />
      )}
    </motion.nav>
  );
};


import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const ContactInfo = () => {
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "walldream2025@gmail.com",
      href: "mailto:walldream2025@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "France",
      value: "07 74 59 86 27",
      href: "tel:0774598627",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Phone,
      label: "Suisse",
      value: "+41 77 808 32 70",
      href: "tel:+41778083270",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const handleWhatsAppClick = (country: "france" | "suisse") => {
    const numbers = {
      france: "33774598627",
      suisse: "41778083270",
    };
    window.open(`https://wa.me/${numbers[country]}`, "_blank");
    setShowWhatsAppDialog(false);
  };

  return (
    <>
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.05) 0%, transparent 70%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <MessageCircle className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Contactez-nous</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Parlons de Votre{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Projet</span>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Notre équipe est à votre disposition pour transformer vos espaces
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative h-full"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-card shadow-elegant hover:shadow-glow transition-all duration-500 p-8 h-full flex flex-col items-center text-center min-h-[280px]">
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg flex-shrink-0`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Label */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {item.label}
                    </h3>

                    {/* Value */}
                    <p className="text-lg text-muted-foreground font-medium">
                      {item.value}
                    </p>

                    {/* Decorative gradient border */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.button
        type="button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowWhatsAppDialog(true)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center group"
        aria-label="Ouvrir WhatsApp"
      >
        <motion.div
          className="absolute inset-0 bg-[#25D366] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
      </motion.button>

      {/* WhatsApp Country Selection Dialog */}
      <Dialog open={showWhatsAppDialog} onOpenChange={setShowWhatsAppDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Choisissez votre pays
            </DialogTitle>
            <DialogDescription className="text-center">
              Sélectionnez le numéro WhatsApp à contacter
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 mt-6">
            <Button
              type="button"
              onClick={() => handleWhatsAppClick("france")}
              className="h-20 text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <div className="text-left">
                  <div>France</div>
                  <div className="text-sm opacity-90">07 74 59 86 27</div>
                </div>
              </div>
            </Button>
            <Button
              type="button"
              onClick={() => handleWhatsAppClick("suisse")}
              className="h-20 text-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                <div className="text-left">
                  <div>Suisse</div>
                  <div className="text-sm opacity-90">+41 77 808 32 70</div>
                </div>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSuccess(true);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
        setIsSuccess(false);
      }, 2000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative py-24 overflow-hidden bg-muted/30">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-4 text-4xl font-bold text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-accent bg-clip-text text-transparent">Contactez</span>-nous
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Vous avez un projet ? Parlons-en ensemble. Notre équipe est à votre écoute pour
            concrétiser vos idées.
          </motion.p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 text-2xl font-bold text-foreground"
              >
                Nos coordonnées
              </motion.h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Téléphone France",
                    content: "07 74 59 86 27",
                    href: "tel:+33774598627",
                    delay: 0.3,
                  },
                  {
                    icon: Phone,
                    title: "Téléphone Suisse",
                    content: "+41 77 808 32 70",
                    href: "tel:+41778083270",
                    delay: 0.35,
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "walldream2025@gmail.com",
                    href: "mailto:walldream2025@gmail.com",
                    delay: 0.4,
                  },
                  {
                    icon: MapPin,
                    title: "Zones d'intervention",
                    content: "France & Suisse",
                    href: null,
                    delay: 0.5,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: item.delay }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      className="rounded-full bg-accent/10 p-3 group-hover:bg-accent/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="h-6 w-6 text-accent" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-lg bg-gradient-accent p-8 text-accent-foreground shadow-glow"
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">
                <motion.h4
                  className="mb-4 text-xl font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Devis gratuit
                </motion.h4>
                <motion.p
                  className="mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Obtenez une estimation gratuite et sans engagement pour votre projet
                  d'impression murale.
                </motion.p>
                <motion.p
                  className="text-sm opacity-90"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  ⚡ Réponse garantie sous 24h ouvrées
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-accent/5 rounded-2xl blur-xl"
              animate={{
                opacity: isInView ? [0.3, 0.6, 0.3] : 0.3,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <form onSubmit={handleSubmit} className="relative space-y-6 bg-card rounded-xl p-8 shadow-elegant border border-border/50">
              {[
                {
                  id: "name",
                  label: "Nom complet *",
                  type: "text",
                  placeholder: "Votre nom",
                  delay: 0.2,
                },
                {
                  id: "email",
                  label: "Email *",
                  type: "email",
                  placeholder: "votre@email.com",
                  delay: 0.3,
                },
                {
                  id: "phone",
                  label: "Téléphone",
                  type: "tel",
                  placeholder: "+33 6 00 00 00 00",
                  delay: 0.4,
                  required: false,
                },
              ].map((field) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: field.delay }}
                >
                  <Label htmlFor={field.id} className="text-foreground font-medium">
                    {field.label}
                  </Label>
                  <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                    <Input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required !== false}
                      placeholder={field.placeholder}
                      className="mt-2 border-border/50 focus:border-accent transition-all"
                    />
                  </motion.div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Label htmlFor="message" className="text-foreground font-medium">
                  Message *
                </Label>
                <motion.div whileFocus={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre projet..."
                    className="mt-2 min-h-[150px] border-border/50 focus:border-accent transition-all resize-none"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  <motion.span
                    className="flex items-center justify-center gap-2"
                    animate={isSuccess ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {isSuccess ? (
                      <>
                        <CheckCircle2 className="h-5 w-5" />
                        Message envoyé !
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-5 w-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.span>
                  
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
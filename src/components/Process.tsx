import { motion } from "framer-motion";
import { Phone, Palette, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Consultation",
    description: "Échange initial pour comprendre vos besoins et votre vision. Nous analysons votre espace et définissons les objectifs du projet.",
  },
  {
    icon: Palette,
    title: "Conception",
    description: "Notre équipe créative développe des concepts personnalisés adaptés à votre identité de marque et à vos contraintes techniques.",
  },
  {
    icon: Settings,
    title: "Production",
    description: "Impression haute qualité avec des technologies de pointe.",
  },
  {
    icon: CheckCircle,
    title: "Installation",
    description: "Pose professionnelle réalisée par nos équipes expérimentées, avec un contrôle qualité rigoureux à chaque étape.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
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
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent">Comment ça marche</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Notre{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Processus
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            De l'idée à la réalisation, un accompagnement sur mesure à chaque étape
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative h-full"
                >
                  <div className="rounded-2xl bg-card p-8 shadow-elegant transition-all duration-500 hover:shadow-glow h-full flex flex-col">
                    {/* Step number badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                      className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg shadow-glow"
                    >
                      {index + 1}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="mb-6 inline-flex rounded-2xl bg-accent/10 p-4 w-fit"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-8 w-8 text-accent" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur" />
                </motion.div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.15 + 0.6, duration: 0.8 }}
                    className="absolute right-0 top-1/2 hidden lg:block w-8 h-0.5 translate-x-full -translate-y-1/2 bg-gradient-accent origin-left"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

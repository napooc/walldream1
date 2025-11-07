import { motion } from "framer-motion";
import { Building2, ShoppingBag, Coffee, Calendar, ArrowRight } from "lucide-react";

const applications = [
  {
    icon: Building2,
    title: "Espaces de bureau",
    description: "Transformez vos bureaux en espaces inspirants qui reflètent votre culture d'entreprise. Idéal pour les halls d'entrée, salles de réunion, open spaces et zones de détente.",
    examples: ["Halls d'accueil", "Salles de conférence", "Espaces collaboratifs", "Zones de pause"],
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    iconBg: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingBag,
    title: "Commerçants",
    description: "Attire l'attention des passants, augmente le flux de clients et renforce la mémorisation de la marque. Elle transforme un simple mur en support publicitaire permanent, sans coût récurrent, et crée une ambiance qui incite à entrer, acheter ou revenir.",
    examples: ["Vitrines commerciales", "Murs d'exposition", "Zones de produits", "Caisses"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    iconBg: "from-emerald-500 to-teal-500",
  },
  {
    icon: Coffee,
    title: "Hôtellerie & Restauration",
    description: "Développez une ambiance unique qui fait revenir vos clients. Idéal pour créer une atmosphère cohérente avec votre concept culinaire ou hôtelier.",
    examples: ["Restaurants", "Cafés", "Hôtels", "Bars"],
    gradient: "from-orange-500 via-red-500 to-pink-500",
    iconBg: "from-orange-500 to-red-500",
  },
  {
    icon: Calendar,
    title: "Événementiel",
    description: "Marquez les esprits lors de vos événements avec des installations temporaires ou permanentes qui créent un impact visuel fort et mémorable.",
    examples: ["Salons professionnels", "Stands d'exposition", "Événements corporate", "Lancements"],
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    iconBg: "from-purple-500 to-indigo-500",
  },
];

export const Applications = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-muted/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-accent">Nos secteurs d'intervention</span>
          </motion.div>
          <h2 className="mb-6 text-5xl md:text-7xl font-bold text-foreground">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Applications</span> et
            secteurs
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-3xl text-xl text-muted-foreground"
          >
            Nos solutions d'impression murale s'adaptent à tous les environnements professionnels
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
          {applications.map((application, index) => {
            const Icon = application.icon;
            return (
              <motion.div
                key={application.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative h-full"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative h-full"
                >
                  {/* Main Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-card p-8 shadow-elegant hover:shadow-glow transition-all duration-500 h-full flex flex-col border border-border/50 backdrop-blur-sm">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${application.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Icon with elegant design */}
                    <motion.div
                      className="relative mb-6 flex items-start justify-between"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative">
                        <motion.div
                          className={`inline-flex rounded-2xl bg-gradient-to-br ${application.iconBg} p-4 shadow-lg shadow-accent/20`}
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </motion.div>
                        {/* Glow effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${application.iconBg} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                        />
                      </div>
                      {/* Arrow indicator */}
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-6 w-6 text-accent" />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="mb-4 text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {application.title}
                    </h3>
                    <p className="mb-6 text-muted-foreground leading-relaxed flex-1">
                      {application.description}
                    </p>

                    {/* Examples with elegant tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {application.examples.map((example, exampleIndex) => (
                        <motion.span
                          key={example}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + exampleIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="relative rounded-full bg-gradient-to-r from-accent/10 to-accent/5 px-4 py-2 text-sm font-medium text-accent border border-accent/20 backdrop-blur-sm group-hover:border-accent/40 transition-all duration-300"
                        >
                          <span className="relative z-10">{example}</span>
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${application.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                          />
                        </motion.span>
                      ))}
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${application.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Decorative gradient border */}
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${application.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
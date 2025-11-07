import { motion } from "framer-motion";
import { TrendingUp, Award, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Booster visuel",
    description: "Nos prestations valorisent vos espaces, renforcent votre image de marque et augmentent votre visibilité auprès de vos clients.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Qualité garantie",
    description: "Nous utilisons des technologies d’impression de pointe afin d’assurer un rendu exceptionnel et durable.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Installation rapide",
    description: "Notre équipe expérimentée assure une installation professionnelle et rapide, minimisant l'impact sur votre activité quotidienne tout en respectant les délais convenus.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Accompagnement complet",
    description: "De la conception initiale à l'installation finale, notre équipe vous accompagne à chaque étape pour garantir que votre vision devienne réalité.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export const Benefits = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative blobs */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
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
            <Award className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">Nos avantages</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Pourquoi choisir{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">Wall Dream</span> ?
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Une expertise reconnue au service de votre réussite visuelle
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative h-full"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative h-full"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-card p-8 shadow-elegant hover:shadow-glow transition-all duration-500 h-full flex flex-col">
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Icon container */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`inline-flex rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 relative">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed relative flex-1">
                      {benefit.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${benefit.gradient} rounded-full transition-all duration-500`}
                    />
                  </div>

                  {/* Decorative border */}
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

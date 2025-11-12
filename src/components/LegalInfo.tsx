import { Shield, Wrench, Camera } from "lucide-react";
import { motion } from "framer-motion";

export const LegalInfo = () => {
  const legalItems = [
    {
      icon: Shield,
      title: "Mentions légales et droits d'image",
      content: "Le client garantit détenir les droits d'exploitation sur les visuels fournis. Wall Dream ne peut être tenue responsable en cas d'utilisation d'images non libres de droits.",
      gradient: "from-primary/20 via-primary/10 to-transparent",
      iconColor: "text-primary",
      glowColor: "shadow-primary/20",
    },
    {
      icon: Wrench,
      title: "Conditions techniques",
      content: "Le mur doit être propre, sec et compatible avec l'impression directe.",
      gradient: "from-accent/20 via-accent/10 to-transparent",
      iconColor: "text-accent",
      glowColor: "shadow-accent/20",
    },
    {
      icon: Camera,
      title: "Utilisation promotionnelle",
      content: "Sauf refus écrit, le client autorise WALL DREAM à utiliser les photos du résultat final dans sa communication (site, réseaux, catalogue).",
      gradient: "from-primary/30 via-accent/20 to-transparent",
      iconColor: "text-primary",
      glowColor: "shadow-primary/30",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Informations Importantes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparence et engagement pour une collaboration sereine
          </p>
        </motion.div>

        {/* Legal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {legalItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className={`relative h-full p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl ${item.glowColor}`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                    </div>
                    {/* Decorative corner accent */}
                    <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${item.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.content}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm italic">
            Votre satisfaction et votre confiance sont notre priorité
          </p>
        </motion.div>
      </div>
    </section>
  );
};

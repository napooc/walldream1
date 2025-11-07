import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import claireImage from "@/assets/team-claire-martin.jpg";
import antoineImage from "@/assets/team-antoine-dupont.jpg";
import sophieImage from "@/assets/team-sophie-lambert.jpg";
import thomasImage from "@/assets/team-thomas-leroy.jpg";
import julienImage from "@/assets/team-julien-morel.jpg";

const teamMembers = [
  {
    name: "Claire Martin",
    role: "Assistante de direction",
    image: claireImage,
    quote: "Rejoindre WALL DREAM, c'est participer à une aventure ambitieuse et inspirante. J'apprécie particulièrement la rigueur et la créativité de l'équipe. Chaque journée me permet de mettre mes compétences organisationnelles au service d'un projet qui a du sens.",
  },
  {
    name: "Antoine Dupont",
    role: "Directeur commercial",
    image: antoineImage,
    quote: "Rejoindre WALL DREAM a été une belle opportunité de contribuer à la croissance d'une entreprise dynamique. J'aime le challenge de développer nos ventes et d'élargir notre portefeuille clients. L'esprit d'équipe est au cœur de notre succès collectif.",
  },
  {
    name: "Sophie Lambert",
    role: "Commerciale",
    image: sophieImage,
    quote: "Je suis ravie d'avoir intégré WALL DREAM. C'est une entreprise qui place vraiment le client au centre de ses préoccupations. J'apprécie la diversité des projets et la satisfaction de nos clients est une grande source de motivation.",
  },
  {
    name: "Thomas Leroy",
    role: "Graphiste",
    image: thomasImage,
    quote: "Travailler chez WALL DREAM, c'est donner vie aux espaces par l'image. J'aime transformer une idée en création visuelle concrète, alliant esthétisme et technique. L'esprit d'équipe et la liberté artistique que j'ai trouvés ici stimulent ma créativité chaque jour.",
  },
  {
    name: "Julien Morel",
    role: "Technicien d'installation",
    image: julienImage,
    quote: "Ce que j'aime dans mon métier, c'est voir le résultat concret de notre travail sur les murs de nos clients. Chaque projet est unique et demande précision, méthode et sens du détail. Chez WALL DREAM, nous partageons la même exigence de qualité et la fierté du travail bien fait.",
  },
];

export const Team = () => {
  return (
    <section id="team" className="relative py-24 overflow-hidden bg-background">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--primary)) 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Notre{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Équipe
            </span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Des professionnels passionnés au service de votre projet
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-card border border-border/50 shadow-elegant flex flex-col">
                {/* Decorative gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Image container with creative clip */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"
                    initial={false}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Creative overlay shape */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4 flex-1 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                      {member.role}
                    </p>
                  </motion.div>

                  <motion.div
                    className="relative flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-accent/20" />
                    <p className="relative text-sm text-muted-foreground leading-relaxed pl-6 italic">
                      {member.quote}
                    </p>
                  </motion.div>

                  {/* Decorative bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

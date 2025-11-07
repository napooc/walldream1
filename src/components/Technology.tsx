import { motion } from "framer-motion";

export const Technology = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2,
              duration: 0.6
            }}
            className="rounded-lg bg-gradient-accent p-8 text-center text-accent-foreground"
          >
            <h3 className="mb-4 text-2xl font-bold">Expertise</h3>
            <p className="mx-auto max-w-2xl text-lg">
              Notre équipe de professionnels passionnés met son savoir-faire au service de votre
              projet pour créer des installations murales qui dépassent vos attentes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
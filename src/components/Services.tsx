import { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { ServiceModal } from "./ServiceModal";
import test1 from "@/assets/test1.jpg";
import test2 from "@/assets/img.jpg";
import test3 from "@/assets/test.jpg";
import test4 from "@/assets/comm.jpg";
import test5 from "@/assets/inve.jpg";
import test6 from "@/assets/vis.jpg";

const services = [
  {
    title: "Impact visuel immédiat",
    description: "Créez une première impression mémorable avec des impressions murales qui captivent instantanément l'attention de vos visiteurs.",
    fullDescription: `Nos solutions d'impression murale grand format transforment vos espaces en véritables expériences visuelles. Chaque projet est conçu pour maximiser l'impact dès le premier regard.

Nous utilisons des technologies d'impression de pointe pour garantir des couleurs éclatantes et une netteté parfaite, même sur de très grandes surfaces. Que ce soit pour votre hall d'entrée, votre salle de réunion ou votre showroom, nous créons des décors qui marquent les esprits.

Notre expertise couvre tous les secteurs : bureaux d'entreprise, commerces de détail, restaurants, hôtels, et espaces événementiels. Chaque installation est réalisée avec le plus grand soin pour assurer un résultat impeccable.`,
    image: test1,
  },
  {
    title: "Image de marque forte",
    description: "Renforcez votre identité visuelle et véhiculez vos valeurs d'entreprise à travers des installations murales personnalisées et cohérentes.",
    fullDescription: `Votre identité de marque mérite d'être mise en valeur de façon exceptionnelle. Nos impressions murales deviennent des ambassadeurs permanents de votre entreprise, communiquant vos valeurs et votre histoire à chaque instant.

Nous travaillons en étroite collaboration avec vous pour intégrer harmonieusement votre charte graphique, vos couleurs et vos messages clés. Chaque élément est pensé pour créer une cohérence parfaite avec votre identité globale.

De la conception à l'installation, nous assurons que chaque détail reflète l'excellence de votre marque. Nos solutions s'adaptent à tous les espaces : bureaux, points de vente, espaces d'accueil, et zones de passage stratégiques.`,
    image: test2,
  },
  {
    title: "Effet captivant ",
    description: "Exploiter avec nos solutions qui créent des ambiances uniques et mémorables.",
    fullDescription: `Nos impressions murales transforment vos espaces en créant des effets visuels spectaculaires et mettent en lumière vos décors, en ajoutant profondeur et dimension à vos installations.

Cette technologie permet de mettre en valeur une visibilité optimale .L'effet crée une atmosphère sophistiquée moderne qui ne laisse personne indifférent.

Idéal pour les showroom boutique de luxe restaurant haut de gamme et espace d'exposition de solutions offre un retour sur investissement exceptionnel en attirant naturellement le regard est en créant une expérience immersive`,
    image: test3,
  },
  {
    title: "Communication silencieuse",
    description: "Transmettez vos messages et valeurs d'entreprise de manière subtile mais efficace, créant un environnement qui parle de lui-même.",
    fullDescription: `La communication la plus puissante est souvent celle qui ne se remarque pas immédiatement. Nos impressions murales communiquent vos valeurs, votre culture d'entreprise et vos messages clés de façon naturelle et non intrusive.

Cette approche subtile permet à vos collaborateurs et visiteurs d'assimiler progressivement votre identité et vos objectifs, créant un environnement de travail inspirant et motivant. Les messages visuels renforcent naturellement l'adhésion à votre culture d'entreprise.

Particulièrement efficace dans les espaces de travail collaboratifs, les zones de détente et les couloirs, cette forme de communication crée une atmosphère cohérente qui inspire et engage sans surcharger l'espace visuel.`,
    image: test4,
  },
  {
    title: "Investissement durable",
    description: "Bénéficiez d'une solution pérenne avec des matériaux de qualité supérieure conçus pour résister à l'épreuve du temps.",
    fullDescription: `La qualité qui se voit. La durabilité qui se sent.

Pensé pour durer, conçu pour séduire.

Ne changez plus vos murs. Sublimez-les.`,
    image: test5,
  },
  {
    title: "Visibilité accrue",
    description: "Maximisez votre présence et attirez l'attention de votre cible avec des installations murales qui se démarquent de la concurrence.",
    fullDescription: `Dans un monde saturé de messages publicitaires, nos impressions murales grand format vous permettent de vous démarquer efficacement. Leur taille imposante et leur qualité visuelle exceptionnelle garantissent une visibilité maximale.

Que ce soit en façade, dans vos espaces de vente ou lors d'événements, nos installations créent un impact visuel qui génère du trafic et augmente la notoriété de votre marque. L'effet "wow" attire naturellement l'attention et encourage l'engagement.

Nos solutions sont particulièrement efficaces pour les lancements de produits, les campagnes promotionnelles et le renforcement de la présence de marque. Elles créent des opportunités de communication uniques qui génèrent buzz et recommandations.`,
    image: test6,
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Nos <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Impression murale professionnelle : création et pose de décors grand format pour
            entreprises et commerces.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              onClick={() => setSelectedService(service)}
              index={index}
            />
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          {...selectedService}
        />
      )}
    </section>
  );
};
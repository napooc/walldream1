import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getCountryFromDomain } from "@/lib/utils";
import { getAlternateUrls, getBaseUrl } from "@/lib/seo";
import { motion } from "framer-motion";
import { FileText, Shield, Scale, Info } from "lucide-react";
import { Helmet } from "react-helmet";

const CGV = () => {
  const country = getCountryFromDomain();
  const baseUrl = getBaseUrl();
  const alternateUrls = getAlternateUrls('/cgv');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoConfig = country === 'france'
    ? {
        title: "CGV France - Wall Dream - Conditions Générales de Vente",
        description: "Conditions générales de vente et mentions légales de Wall Dream France. Prestations d'impression murale professionnelle en France.",
        canonical: `${baseUrl}/cgv`
      }
    : country === 'suisse'
    ? {
        title: "CGV Suisse - Wall Dream - Conditions Générales de Vente",
        description: "Conditions générales de vente et mentions légales de Wall Dream Suisse. Prestations d'impression murale professionnelle en Suisse.",
        canonical: `${baseUrl}/cgv`
      }
    : {
        title: "CGV - Wall Dream - Conditions Générales de Vente",
        description: "Conditions générales de vente et mentions légales de Wall Dream. Prestations d'impression murale professionnelle.",
        canonical: `${baseUrl}/cgv`
      };

  const contentFrance = {
    title: "MENTIONS LÉGALES & CGV FRANCE",
    subtitle: "Wall Dream France - En vigueur au 01/01/2025",
    sections: [
      {
        icon: Info,
        title: "1. MENTIONS LÉGALES",
        content: `Éditeur du site

Site édité à titre personnel.
Les informations d'identification de l'éditeur sont conservées par l'hébergeur conformément aux exigences légales françaises (LCEN) et suisses (LPD – transparence).
Email de contact : walldream2025@gmail.com

Hébergeur

OVH SAS
2 rue Kellermann
59100 Roubaix – France
Site : www.ovh.com

Propriété intellectuelle

L'ensemble des contenus du site (textes, images, photos, éléments graphiques, logos) est protégé par le droit d'auteur français (CPI) et suisse (LDA).
Toute reproduction, diffusion ou modification sans accord écrit est interdite.

Données personnelles

Les données transmises via le formulaire de contact sont utilisées uniquement pour répondre aux demandes.
Aucune donnée n'est vendue ou transférée à des tiers non autorisés.
Conformément au RGPD (France) et à la LPD (Suisse), toute demande d'accès, de rectification ou de suppression peut être adressée à :
walldream2025@gmail.com`
      },
      {
        icon: FileText,
        title: "2. CONDITIONS GÉNÉRALES DE VENTE (CGV) – IMPRESSION MURALE",
        content: `1. Objet

Les présentes CGV définissent les conditions applicables aux prestations d'impression murale personnalisée réalisées en France ou en Suisse.

2. Conditions d'intervention

Le client garantit :
– un mur propre, sec, lisse et compatible avec l'impression,
– un accès suffisant pour le matériel.
Le prestataire n'est pas responsable des défauts liés à l'état du support (humidité, fissures, peinture fragile, irrégularités, etc.).

3. Tarifs et paiement

Les tarifs sont annoncés avant intervention.
Le paiement est dû le jour de la prestation, sauf accord écrit contraire.
Un acompte peut être demandé selon le projet.

4. Annulation

Toute annulation à moins de 48 h peut entraîner la facturation des frais engagés.

5. Responsabilité

Le prestataire garantit une impression conforme au fichier validé par le client.
Sa responsabilité ne peut être engagée en cas :
– de défauts du mur ou de conditions défavorables (humidité, surface irrégulière),
– de modifications demandées après validation du visuel,
– de dégradations ultérieures (chocs, nettoyage inadapté, frottements, chaleur, etc.).

6. Droits d'image

Le client confirme détenir les droits d'utilisation du visuel fourni.
Des photos de la réalisation peuvent être utilisées avec l'accord du client à des fins de communication.`
      },
      {
        icon: Scale,
        title: "3. DROIT APPLICABLE",
        content: `– Pour les clients situés en France : application du droit français.
– Pour les clients situés en Suisse : application du droit suisse.
En cas de litige, les tribunaux du pays de résidence du prestataire sont compétents.`
      }
    ]
  };

  const contentSuisse = {
    title: "MENTIONS LÉGALES & CGV SUISSE",
    subtitle: "Wall Dream Suisse - En vigueur au 01/01/2025",
    sections: [
      {
        icon: Info,
        title: "1. MENTIONS LÉGALES",
        content: `Éditeur du site

Site édité à titre personnel.
Les informations d'identification de l'éditeur sont conservées par l'hébergeur conformément aux exigences légales françaises (LCEN) et suisses (LPD – transparence).
Email de contact : walldream2025@gmail.com

Hébergeur

OVH SAS
2 rue Kellermann
59100 Roubaix – France
Site : www.ovh.com

Propriété intellectuelle

L'ensemble des contenus du site (textes, images, photos, éléments graphiques, logos) est protégé par le droit d'auteur français (CPI) et suisse (LDA).
Toute reproduction, diffusion ou modification sans accord écrit est interdite.

Données personnelles

Les données transmises via le formulaire de contact sont utilisées uniquement pour répondre aux demandes.
Aucune donnée n'est vendue ou transférée à des tiers non autorisés.
Conformément au RGPD (France) et à la LPD (Suisse), toute demande d'accès, de rectification ou de suppression peut être adressée à :
walldream2025@gmail.com`
      },
      {
        icon: FileText,
        title: "2. CONDITIONS GÉNÉRALES DE VENTE (CGV) – IMPRESSION MURALE",
        content: `1. Objet

Les présentes CGV définissent les conditions applicables aux prestations d'impression murale personnalisée réalisées en France ou en Suisse.

2. Conditions d'intervention

Le client garantit :
– un mur propre, sec, lisse et compatible avec l'impression,
– un accès suffisant pour le matériel.
Le prestataire n'est pas responsable des défauts liés à l'état du support (humidité, fissures, peinture fragile, irrégularités, etc.).

3. Tarifs et paiement

Les tarifs sont annoncés avant intervention.
Le paiement est dû le jour de la prestation, sauf accord écrit contraire.
Un acompte peut être demandé selon le projet.

4. Annulation

Toute annulation à moins de 48 h peut entraîner la facturation des frais engagés.

5. Responsabilité

Le prestataire garantit une impression conforme au fichier validé par le client.
Sa responsabilité ne peut être engagée en cas :
– de défauts du mur ou de conditions défavorables (humidité, surface irrégulière),
– de modifications demandées après validation du visuel,
– de dégradations ultérieures (chocs, nettoyage inadapté, frottements, chaleur, etc.).

6. Droits d'image

Le client confirme détenir les droits d'utilisation du visuel fourni.
Des photos de la réalisation peuvent être utilisées avec l'accord du client à des fins de communication.`
      },
      {
        icon: Scale,
        title: "3. DROIT APPLICABLE",
        content: `– Pour les clients situés en France : application du droit français.
– Pour les clients situés en Suisse : application du droit suisse.
En cas de litige, les tribunaux du pays de résidence du prestataire sont compétents.`
      }
    ]
  };

  const content = country === 'suisse' ? contentSuisse : contentFrance;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <link rel="canonical" href={seoConfig.canonical} />
        
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="fr-FR" href={alternateUrls['fr-FR']} />
        <link rel="alternate" hrefLang="fr-CH" href={alternateUrls['fr-CH']} />
        <link rel="alternate" hrefLang="x-default" href={alternateUrls['x-default']} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.canonical} />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <Scale className="w-16 h-16 text-accent mx-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              {content.title}
            </h1>
            <p className="text-muted-foreground text-lg">{content.subtitle}</p>
          </motion.div>

          {/* CGV Sections */}
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <section.icon className="w-6 h-6 text-accent flex-shrink-0" />
                  <span>{section.title}</span>
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent rounded-2xl p-8 border border-accent/20"
          >
            <h3 className="text-xl font-bold mb-4">Des Questions ?</h3>
            <p className="text-muted-foreground mb-4">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos conditions générales de vente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:walldream2025@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
              >
                Contactez-nous par Email
              </a>
              <a
                href={country === 'suisse' ? 'https://wa.me/41778083270' : 'https://wa.me/33774598627'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium hover:bg-muted transition-colors"
              >
                Contactez-nous sur WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Last Update */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            <p>Dernière mise à jour : 01 janvier 2025</p>
            <p className="mt-2">
              Wall Dream se réserve le droit de modifier ces CGV à tout moment. 
              Les CGV applicables sont celles en vigueur à la date de la commande.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGV;

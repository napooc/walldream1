import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Process } from "@/components/Process";
import { Applications } from "@/components/Applications";
import { Technology } from "@/components/Technology";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Team } from "@/components/Team";
import { VideoSection } from "@/components/VideoSection";
import { ContactInfo } from "@/components/ContactInfo";
import { LegalInfo } from "@/components/LegalInfo";
import { Footer } from "@/components/Footer";
import { OpeningAnimation } from "@/components/OpeningAnimation";
import { Helmet } from "react-helmet";
const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wall Dream",
    description: "Impression murale professionnelle : création et pose de décors grand format pour entreprises et commerces",
    url: "https://walldream.ma",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33-7-74-59-86-27",
        contactType: "Service client",
        areaServed: "FR",
        availableLanguage: ["fr"]
      },
      {
        "@type": "ContactPoint",
        telephone: "+41-77-808-32-70",
        contactType: "Service client",
        areaServed: "CH",
        availableLanguage: ["fr", "de"]
      }
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressCountry: "FR"
      },
      {
        "@type": "PostalAddress",
        addressCountry: "CH"
      }
    ],
    service: {
      "@type": "Service",
      serviceType: "Impression murale professionnelle",
      provider: {
        "@type": "Organization",
        name: "Wall Dream"
      },
      areaServed: ["FR", "CH"]
    }
  };
  return <>
      <Helmet>
        <title>Wall Dream - Impression Murale Professionnelle</title>
        <meta name="description" content="Impression murale professionnelle : création et pose de décors grand format pour entreprises et commerces. Impact visuel immédiat, image de marque forte." />
        <meta name="keywords" content="impression murale, décoration murale, impression grand format, habillage mural, France, Suisse, Europe" />
        <meta property="og:title" content="Wall Dream - Impression Murale Professionnelle" />
        <meta property="og:description" content="Spécialiste de l'impression murale professionnelle pour entreprises et commerces en France et en Suisse." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Benefits />
          <Process />
          <Applications />
          <Technology />
          <Gallery />
          <Team />
          <VideoSection />
          <Testimonials />
          <LegalInfo />
          <ContactInfo />
        </main>
        <Footer />
      </div>
    </>;
};
export default Index;
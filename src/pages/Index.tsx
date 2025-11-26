import { useEffect } from "react";
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
import { getOrganizationStructuredData, getSeoConfig, getAlternateUrls } from "@/lib/seo";

const Index = () => {
  // Handle scrolling to section after navigation from other pages
  useEffect(() => {
    const scrollToTarget = sessionStorage.getItem("scrollToSection");
    if (scrollToTarget) {
      sessionStorage.removeItem("scrollToSection");
      // Wait for all components to be mounted
      setTimeout(() => {
        const element = document.querySelector(scrollToTarget);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  const structuredData = getOrganizationStructuredData();
  const seoConfig = getSeoConfig();
  const alternateUrls = getAlternateUrls('/');
  return <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <link rel="canonical" href={seoConfig.canonical} />
        
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="fr-FR" href={alternateUrls['fr-FR']} />
        <link rel="alternate" hrefLang="fr-CH" href={alternateUrls['fr-CH']} />
        <link rel="alternate" hrefLang="x-default" href={alternateUrls['x-default']} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.canonical} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.ogTitle} />
        <meta name="twitter:description" content={seoConfig.ogDescription} />
        
        {/* Structured Data */}
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
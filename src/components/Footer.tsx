import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { tape } from "@/components/ui/footer-taped-design";
import { scrollToSection } from "@/lib/utils";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="my-8 px-4 max-w-5xl mx-auto">
      <div className="relative bg-white rounded-3xl max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Decorative Tapes */}
        <div className="hidden md:block absolute -top-4 -left-8 w-[80px] h-[36px] scale-75">
          {tape}
        </div>
        <div className="hidden md:block absolute -top-4 -right-8 rotate-90 w-[80px] h-[36px] scale-75">
          {tape}
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-4 md:gap-10 px-2 md:px-8 flex-1 w-full">
          {/* Company Info */}
          <div className="flex flex-col items-start gap-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("home");
              }}
              className="flex flex-row gap-1 items-center justify-start text-2xl font-bold text-gray-900"
            >
              <span className="bg-gradient-accent bg-clip-text text-transparent">Wall</span>
              <span className="text-accent">Dream</span>
            </a>
            <p className="text-gray-600 font-medium text-base w-full md:w-4/5">
              Spécialiste de l'impression murale professionnelle pour entreprises et commerces.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://web.facebook.com/people/Dom-Icile/61572403380475/?rdid=CalJ82LIKVs3Zi7P&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1DYMAoop37%2F%3Fwtsid%3Drdr_0v5I6smfcC9eezZjA%26_rdc%3D1%26_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-accent hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-700 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/walldreamm/?igsh=MTJubWpvNTZtZ3JnNg%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-accent hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-700 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@walldream0?_r=1&_t=ZM-91VeXDc5OzE"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-colors hover:bg-accent hover:text-white"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5 text-gray-700 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-1 md:gap-4">
            <h4 className="uppercase font-bold text-sm text-gray-500 font-semibold">Liens rapides</h4>
            <div className="flex flex-wrap md:flex-col gap-2 text-sm text-gray-700 items-start">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("services");
                }}
                className="text-gray-600 whitespace-nowrap font-medium hover:text-accent transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("gallery");
                }}
                className="text-gray-600 whitespace-nowrap font-medium hover:text-accent transition-colors"
              >
                Réalisations
              </a>
              <a
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("process");
                }}
                className="text-gray-600 whitespace-nowrap font-medium hover:text-accent transition-colors"
              >
                Notre processus
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("testimonials");
                }}
                className="text-gray-600 whitespace-nowrap font-medium hover:text-accent transition-colors"
              >
                Témoignages
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("contact");
                }}
                className="text-gray-600 whitespace-nowrap font-medium hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-1 md:gap-4">
            <h4 className="uppercase whitespace-nowrap font-bold text-sm text-gray-500 font-semibold">Nos services</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-700 items-start">
              <span className="text-gray-600 whitespace-nowrap font-medium">Impression murale bureau</span>
              <span className="text-gray-600 whitespace-nowrap font-medium">Décoration commerce</span>
              <span className="text-gray-600 whitespace-nowrap font-medium">Habillage restaurant</span>
              <span className="text-gray-600 whitespace-nowrap font-medium">Solutions événementielles</span>
              <span className="text-gray-600 whitespace-nowrap font-medium">Signalétique intérieure</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1 md:gap-4">
            <h4 className="uppercase whitespace-nowrap font-bold text-sm text-gray-500 font-semibold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-700 items-start">
              <a
                href="tel:+33774598627"
                className="flex items-start gap-3 text-gray-600 hover:text-accent transition-colors font-medium"
              >
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>France: 07 74 59 86 27</span>
              </a>
              <a
                href="tel:+41778083270"
                className="flex items-start gap-3 text-gray-600 hover:text-accent transition-colors font-medium"
              >
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Suisse: +41 77 808 32 70</span>
              </a>
              <a
                href="mailto:walldream2025@gmail.com"
                className="flex items-start gap-3 text-gray-600 hover:text-accent transition-colors font-medium"
              >
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>walldream2025@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="my-3 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-start sm:items-center">
          <p className="whitespace-nowrap">
            ©{currentYear} Wall Dream. Tous droits réservés.
          </p>
          <p className="text-gray-500">
            Impression murale professionnelle - France & Suisse
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://web.facebook.com/people/Dom-Icile/61572403380475/?rdid=CalJ82LIKVs3Zi7P&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1DYMAoop37%2F%3Fwtsid%3Drdr_0v5I6smfcC9eezZjA%26_rdc%3D1%26_rdr"
            target="_blank"
            rel="nofollow noopener"
            aria-label="Facebook"
            className="hover:text-accent transition-colors"
          >
            <Facebook className="w-5 h-5 fill-gray-600 hover:fill-accent transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/walldreamm/?igsh=MTJubWpvNTZtZ3JnNg%3D%3D#"
            target="_blank"
            rel="nofollow noopener"
            aria-label="Instagram"
            className="hover:text-accent transition-colors"
          >
            <Instagram className="w-5 h-5 fill-gray-600 hover:fill-accent transition-colors" />
          </a>
          <a
            href="https://www.tiktok.com/@walldream0?_r=1&_t=ZM-91VeXDc5OzE"
            target="_blank"
            rel="nofollow noopener"
            aria-label="TikTok"
            className="hover:text-accent transition-colors"
          >
            <TikTokIcon className="w-5 h-5 fill-gray-600 hover:fill-accent transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};
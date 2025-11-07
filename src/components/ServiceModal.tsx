import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { scrollToSection } from "@/lib/utils";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
}

export const ServiceModal = ({
  isOpen,
  onClose,
  title,
  description,
  fullDescription,
  image,
}: ServiceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 text-white hover:bg-white/20"
              onClick={onClose}
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="p-8">
            <h2 className="mb-4 text-3xl font-bold text-foreground">{title}</h2>
            <p className="mb-6 text-lg text-muted-foreground">{description}</p>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground whitespace-pre-line">{fullDescription}</p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button
                type="button"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
                onClick={() => {
                  onClose();
                  setTimeout(() => scrollToSection("contact"), 100);
                }}
              >
                Contactez-nous
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={onClose}
              >
                Fermer
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
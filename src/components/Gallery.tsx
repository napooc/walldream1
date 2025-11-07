import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import spidermanImage from "@/assets/realisation-spiderman.jpg";
import burgerImage from "@/assets/realisation-burger.jpg";
import officeImage from "@/assets/realisation-office.jpg";
import childrenImage from "@/assets/realisation-children.jpg";
import beautyImage from "@/assets/realisation-beauty.jpg";
import bakeryImage from "@/assets/realisation-bakery.jpg";

const galleryItems = [
  {
    id: 1,
    category: "commerce",
    image: spidermanImage,
    title: "Chambre d'enfant Spiderman",
    shortTitle: "Chambre Spiderman",
  },
  {
    id: 2,
    category: "restaurant",
    image: burgerImage,
    title: "Restaurant Fast-Food",
    shortTitle: "Fast-Food",
  },
  {
    id: 3,
    category: "bureau",
    image: officeImage,
    title: "Espace de travail moderne",
    shortTitle: "Bureau moderne",
  },
  {
    id: 4,
    category: "commerce",
    image: childrenImage,
    title: "Crèche - Décoration ludique",
    shortTitle: "Crèche",
  },
  {
    id: 5,
    category: "commerce",
    image: beautyImage,
    title: "Salon de beauté",
    shortTitle: "Salon beauté",
  },
  {
    id: 6,
    category: "restaurant",
    image: bakeryImage,
    title: "Boulangerie-Pâtisserie",
    shortTitle: "Boulangerie",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Nos <span className="bg-gradient-accent bg-clip-text text-transparent">Réalisations</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez quelques-uns de nos projets d'impression murale réalisés pour nos clients.
          </p>
        </div>

        <HoverSlider className="min-h-[600px] place-content-center p-6 md:px-12 bg-background">
          <h3 className="mb-6 text-accent text-xs font-medium capitalize tracking-wide">
            / nos réalisations
          </h3>
          <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
            <div className="flex flex-col space-y-2 md:space-y-4">
              {galleryItems.map((item, index) => (
                <TextStaggerHover
                  key={item.id}
                  index={index}
                  className="cursor-pointer text-3xl md:text-4xl font-bold uppercase tracking-tighter text-foreground"
                  text={item.shortTitle}
                />
              ))}
            </div>
            <HoverSliderImageWrap className="w-full md:w-[500px] h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              {galleryItems.map((item, index) => (
                <div key={item.id} className="relative">
                  <HoverSliderImage
                    index={index}
                    imageUrl={item.image}
                    src={item.image}
                    alt={item.title}
                    className="size-full object-cover"
                    loading="eager"
                    decoding="async"
                    onClick={() => setSelectedImage(item)}
                  />
                </div>
              ))}
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-0">
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <motion.img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="h-auto w-full rounded-lg"
                  layoutId={`gallery-${selectedImage.id}`}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Fermer"
                >
                  <X className="h-6 w-6" />
                </Button>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-overlay p-6 text-white rounded-b-lg"
                >
                  <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};
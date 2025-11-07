import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import spidermanImage from "@/assets/realisation-spiderman.jpg";
import burgerImage from "@/assets/realisation-burger.jpg";
import officeImage from "@/assets/realisation-office.jpg";
import childrenImage from "@/assets/realisation-children.jpg";
import beautyImage from "@/assets/realisation-beauty.jpg";
import bakeryImage from "@/assets/realisation-bakery.jpg";
const galleryItems = [{
  id: 1,
  category: "commerce",
  image: spidermanImage,
  title: "Chambre d'enfant Spiderman - Impression murale créative"
}, {
  id: 2,
  category: "restaurant",
  image: burgerImage,
  title: "Restaurant Fast-Food - Décor mural appétissant"
}, {
  id: 3,
  category: "bureau",
  image: officeImage,
  title: "Espace de travail moderne - Impression artistique"
}, {
  id: 4,
  category: "commerce",
  image: childrenImage,
  title: "Crèche - Décoration murale ludique"
}, {
  id: 5,
  category: "commerce",
  image: beautyImage,
  title: "Salon de beauté - Les 6 atouts d'une impression murale"
}, {
  id: 6,
  category: "restaurant",
  image: bakeryImage,
  title: "Boulangerie-Pâtisserie - Impression murale gourmande"
}];
const categories = [{
  id: "tous",
  label: "Tous"
}, {
  id: "bureau",
  label: "Bureau"
}, {
  id: "commerce",
  label: "Commerce"
}, {
  id: "restaurant",
  label: "Restauration"
}];
export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("tous");
  const filteredItems = activeCategory === "tous" ? galleryItems : galleryItems.filter(item => item.category === activeCategory);
  return <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Nos <span className="bg-gradient-accent bg-clip-text text-transparent">Réalisations</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Découvrez quelques-uns de nos projets d'impression murale réalisés pour nos clients.
          </p>
        </div>

        <Tabs defaultValue="tous" className="w-full">
          <TabsList className="mx-auto mb-12 flex w-full max-w-2xl justify-center">
            {categories.map(category => <TabsTrigger key={category.id} value={category.id} onClick={() => setActiveCategory(category.id)} className="flex-1">
                {category.label}
              </TabsTrigger>)}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }}>
              <AnimatePresence mode="wait">
                {filteredItems.map((item, index) => <motion.div key={item.id} initial={{
                opacity: 0,
                scale: 0.9,
                y: 20
              }} animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }} exit={{
                opacity: 0,
                scale: 0.9,
                y: -20
              }} transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }} className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-card" onClick={() => setSelectedImage(item)} whileHover={{
                y: -8
              }}>
                    <motion.img src={item.image} alt={item.title} className="h-full w-full object-cover" whileHover={{
                  scale: 1.15
                }} transition={{
                  duration: 0.6
                }} />
                    <motion.div className="absolute inset-0 bg-gradient-overlay" initial={{
                  opacity: 0
                }} whileHover={{
                  opacity: 1
                }} transition={{
                  duration: 0.3
                }} />
                    <motion.div className="absolute inset-0 flex items-center justify-center" initial={{
                  opacity: 0,
                  y: 20
                }} whileHover={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.3
                }}>
                      <div className="text-center text-white px-4">
                        <motion.h3 initial={{
                      y: 10
                    }} whileHover={{
                      y: 0
                    }} transition={{
                      duration: 0.3,
                      delay: 0.1
                    }} className="text-xl font-bold mb-2 text-white">
                          {item.title}
                        </motion.h3>
                        <motion.p className="text-sm" initial={{
                      y: 10,
                      opacity: 0
                    }} whileHover={{
                      y: 0,
                      opacity: 1
                    }} transition={{
                      duration: 0.3,
                      delay: 0.2
                    }}>
                          Cliquer pour agrandir
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>)}
              </AnimatePresence>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-0">
          <AnimatePresence>
            {selectedImage && <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.9
          }} transition={{
            duration: 0.3
          }} className="relative">
                <motion.img src={selectedImage.image} alt={selectedImage.title} className="h-auto w-full rounded-lg" layoutId={`gallery-${selectedImage.id}`} />
                <Button variant="ghost" size="icon" className="absolute right-4 top-4 bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
                  <X className="h-6 w-6" />
                </Button>
                <motion.div initial={{
              y: 20,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 0.2
            }} className="absolute bottom-0 left-0 right-0 bg-gradient-overlay p-6 text-white rounded-b-lg">
                  <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                </motion.div>
              </motion.div>}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>;
};
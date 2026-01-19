import Navigation from "@/components/Navigation";
import MotionWrapper from "@/components/MotionWrapper";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import kathakaliImage from "@/assets/kathakali.jpg";
import communityImage from "@/assets/community-celebration.jpg";
import heroImage from "@/assets/hero-kerala.jpg";

const categories = ["All", "Onam 2025", "Vishu 2025", "Sports", "Community"];

const galleryImages = [
  { id: 1, src: communityImage, category: "Onam 2025", title: "Onam Celebration 2025" },
  { id: 2, src: kathakaliImage, category: "Onam 2025", title: "Kathakali Performance" },
  { id: 3, src: heroImage, category: "Community", title: "Community Gathering" },
  { id: 4, src: communityImage, category: "Vishu 2025", title: "Vishu Celebrations" },
  { id: 5, src: kathakaliImage, category: "Onam 2025", title: "Traditional Dance" },
  { id: 6, src: heroImage, category: "Sports", title: "Cricket Tournament" },
  { id: 7, src: communityImage, category: "Community", title: "Family Event" },
  { id: 8, src: kathakaliImage, category: "Vishu 2025", title: "Vishu Kani" },
  { id: 9, src: heroImage, category: "Sports", title: "Badminton Championship" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                  Gallery
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                  Memories & <span className="text-gradient-gold">Moments</span>
                </h1>
                <p className="text-xl text-primary-foreground/70 max-w-2xl">
                  A visual journey through our celebrations, events, and community gatherings.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Filter */}
          <section className="py-8 bg-background border-b border-border sticky top-16 z-30 backdrop-blur-md bg-background/95">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                <AnimatePresence>
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`relative group cursor-pointer ${index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                        }`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="relative rounded-xl overflow-hidden aspect-square">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl max-h-[80vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain rounded-xl"
                />
                <p className="text-center text-primary-foreground mt-4 font-medium">
                  {selectedImage.title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </MotionWrapper>
  );
}

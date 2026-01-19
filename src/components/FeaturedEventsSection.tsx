import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import kathakaliImage from "@/assets/kathakali.jpg";
import communityImage from "@/assets/community-celebration.jpg";

const events = [
  {
    id: 1,
    title: "Onam 2026 Celebration",
    date: "August 30, 2026",
    location: "George R. Brown Convention Center",
    image: communityImage,
    category: "Cultural",
    featured: true,
  },
  {
    id: 2,
    title: "Vishu Festival",
    date: "April 14, 2026",
    location: "MAGH Community Hall",
    image: kathakaliImage,
    category: "Cultural",
    featured: false,
  },
  {
    id: 3,
    title: "Kerala Cricket League",
    date: "May 15, 2026",
    location: "Bear Creek Park",
    image: communityImage,
    category: "Sports",
    featured: false,
  },
  {
    id: 4,
    title: "Charity Gala Dinner",
    date: "June 20, 2026",
    location: "Marriott Marquis Houston",
    image: kathakaliImage,
    category: "Charity",
    featured: false,
  },
];

export default function FeaturedEventsSection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              Upcoming Events
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Don't Miss <span className="text-gradient-gold">What's Coming</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Events Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-80 snap-start"
            >
              <Link to={`/events/${event.id}`} className="group block">
                <div className="relative rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {event.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-primary-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

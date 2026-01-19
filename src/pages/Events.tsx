import Navigation from "@/components/Navigation";
import MotionWrapper from "@/components/MotionWrapper";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import kathakaliImage from "@/assets/kathakali.jpg";
import communityImage from "@/assets/community-celebration.jpg";

const categories = ["All", "Cultural", "Sports", "Community", "Charity"];

const allEvents = [
  {
    id: 1,
    title: "Onam 2026 Grand Celebration",
    date: "August 30, 2026",
    location: "George R. Brown Convention Center",
    image: communityImage,
    category: "Cultural",
    description: "Join us for the grandest Onam celebration in Houston featuring traditional sadya, cultural performances, and Athapookalam competition.",
    upcoming: true,
  },
  {
    id: 2,
    title: "Vishu Festival 2026",
    date: "April 14, 2026",
    location: "MAGH Community Hall",
    image: kathakaliImage,
    category: "Cultural",
    description: "Celebrate the Malayalam New Year with Vishukkani, traditional breakfast, and family activities.",
    upcoming: true,
  },
  {
    id: 3,
    title: "Kerala Cricket League",
    date: "May 15-17, 2026",
    location: "Bear Creek Park",
    image: communityImage,
    category: "Sports",
    description: "Annual cricket tournament bringing together teams from across the community for three days of competitive cricket.",
    upcoming: true,
  },
  {
    id: 4,
    title: "Charity Gala Dinner",
    date: "June 20, 2026",
    location: "Marriott Marquis Houston",
    image: kathakaliImage,
    category: "Charity",
    description: "Annual fundraising gala supporting educational scholarships and community welfare programs.",
    upcoming: true,
  },
  {
    id: 5,
    title: "Youth Talent Show",
    date: "March 8, 2026",
    location: "MAGH Community Hall",
    image: communityImage,
    category: "Community",
    description: "Showcase of talented youth in dance, music, and arts. An evening celebrating the next generation.",
    upcoming: true,
  },
  {
    id: 6,
    title: "Onam 2025",
    date: "September 7, 2025",
    location: "George R. Brown Convention Center",
    image: communityImage,
    category: "Cultural",
    description: "Last year's successful Onam celebration with over 3,000 attendees.",
    upcoming: false,
  },
];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showUpcoming, setShowUpcoming] = useState(true);

  const filteredEvents = allEvents.filter((event) => {
    const categoryMatch = selectedCategory === "All" || event.category === selectedCategory;
    const timeMatch = showUpcoming ? event.upcoming : !event.upcoming;
    return categoryMatch && timeMatch;
  });

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
                  MAGH Events
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                  Celebrate With <span className="text-gradient-gold">Us</span>
                </h1>
                <p className="text-xl text-primary-foreground/70 max-w-2xl">
                  From grand festivals to intimate gatherings, discover events that bring our community together.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Filters */}
          <section className="py-8 bg-background border-b border-border sticky top-16 z-30 backdrop-blur-md bg-background/95">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Time Filter */}
                <div className="flex items-center gap-2 bg-muted rounded-full p-1">
                  <button
                    onClick={() => setShowUpcoming(true)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${showUpcoming ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    Upcoming
                  </button>
                  <button
                    onClick={() => setShowUpcoming(false)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!showUpcoming ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    Past Events
                  </button>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                  <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
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
            </div>
          </section>

          {/* Events Grid */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              {filteredEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={`/events/${event.id}`} className="group block h-full">
                        <div className="relative h-full rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-all duration-500">
                          <div className="relative h-52 overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                                {event.category}
                              </span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex items-center gap-2 text-primary-foreground text-sm">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">{event.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {event.title}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                              <MapPin className="w-4 h-4 flex-shrink-0" />
                              <span>{event.location}</span>
                            </div>
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                              {event.description}
                            </p>
                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                              <span>View Details</span>
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">No events found for the selected filters.</p>
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionWrapper>
  );
}

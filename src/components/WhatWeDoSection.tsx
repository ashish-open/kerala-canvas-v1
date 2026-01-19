import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import kathakaliImage from "@/assets/kathakali.jpg";
import communityImage from "@/assets/community-celebration.jpg";

const programs = [
  {
    icon: Calendar,
    title: "Cultural Events",
    description: "From Onam and Vishu to classical arts performances, we keep our rich traditions alive through vibrant celebrations that bring the community together.",
    image: kathakaliImage,
    link: "/events",
    color: "from-primary/80 to-primary",
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Malayalam language classes, youth programs, and women's initiatives that nurture connections across generations.",
    image: communityImage,
    link: "/community",
    color: "from-kerala-light/80 to-kerala",
  },
  {
    icon: Heart,
    title: "Charity & Relief",
    description: "Supporting those in need through disaster relief, educational scholarships, and humanitarian aid both locally and globally.",
    image: communityImage,
    link: "/get-involved",
    color: "from-accent/80 to-accent",
  },
];

export default function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Preserving Heritage,{" "}
            <span className="text-gradient-gold">Building Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MAGH serves as the heart of the Malayalee community in Greater Houston, fostering cultural connections and creating lasting memories.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                to={program.link}
                className="group block h-full"
              >
                <div className="relative h-full rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-elevated transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

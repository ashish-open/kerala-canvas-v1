import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import kathakaliImage from "@/assets/kathakali.jpg";

const milestones = [
  {
    year: "1987",
    title: "Foundation",
    description: "A small group of Malayalee families came together in Houston to form MAGH, creating a home away from home.",
  },
  {
    year: "1995",
    title: "First Onam",
    description: "Celebrated our first grand Onam festival, bringing together over 500 community members.",
  },
  {
    year: "2005",
    title: "Community Hall",
    description: "Established our own community center, providing a permanent space for cultural activities.",
  },
  {
    year: "2020",
    title: "Digital Expansion",
    description: "Adapted to connect our community virtually, reaching more families than ever before.",
  },
  {
    year: "2026",
    title: "A New Era",
    description: "Continuing to grow and serve, now with over 5,000 members and a vision for the future.",
  },
];

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative rounded-2xl overflow-hidden shadow-elevated"
            >
              <img
                src={kathakaliImage}
                alt="Kathakali - Kerala's classical art form"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-accent rounded-2xl -z-10" />
          </motion.div>

          {/* Content Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Nearly Four Decades of{" "}
                <span className="text-gradient-gold">Community</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                What began as a gathering of a few families has grown into one of Houston's most vibrant cultural communities.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border" />

              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                    
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-accent font-bold">{milestone.year}</span>
                      <h4 className="font-serif font-semibold text-foreground">{milestone.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

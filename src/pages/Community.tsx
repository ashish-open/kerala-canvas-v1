import Navigation from "@/components/Navigation";
import MotionWrapper from "@/components/MotionWrapper";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles, Heart, ArrowRight } from "lucide-react";
import communityImage from "@/assets/community-celebration.jpg";
import kathakaliImage from "@/assets/kathakali.jpg";

const programs = [
  {
    icon: BookOpen,
    title: "Malayalam Language Classes",
    description: "Weekly classes for children and adults to learn and preserve our beautiful language. Taught by experienced instructors with structured curriculum.",
    image: kathakaliImage,
    details: ["Ages 5-18 & Adult classes", "Saturday mornings", "Beginner to advanced levels"],
  },
  {
    icon: Users,
    title: "Youth Programs",
    description: "Engaging activities for young Malayalees including cultural workshops, sports leagues, and leadership development programs.",
    image: communityImage,
    details: ["Cultural dance & music", "Sports tournaments", "Leadership workshops"],
  },
  {
    icon: Sparkles,
    title: "Women's Initiatives",
    description: "Empowering programs designed to support, connect, and celebrate the women in our community through networking and skill-building.",
    image: communityImage,
    details: ["Monthly meetups", "Skill workshops", "Community service projects"],
  },
  {
    icon: Heart,
    title: "Senior Programs",
    description: "Social gatherings and wellness activities for our senior community members, keeping them connected and engaged.",
    image: kathakaliImage,
    details: ["Weekly social hours", "Health & wellness sessions", "Cultural activities"],
  },
];

export default function Community() {
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
                  Community & Culture
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                  Nurturing <span className="text-gradient-gold">Connections</span>
                </h1>
                <p className="text-xl text-primary-foreground/70 max-w-2xl">
                  Programs that bring our community together, preserve our heritage, and create lasting bonds across generations.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Programs Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="space-y-16">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative rounded-2xl overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                        <program.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                        {program.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {program.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {program.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3 text-foreground">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  Ready to Get Involved?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join one of our programs or volunteer to help make a difference in our community.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/get-involved"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full shadow-gold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Volunteer With Us
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-secondary/80 transition-all"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionWrapper>
  );
}

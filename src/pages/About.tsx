import Navigation from "@/components/Navigation";
import MotionWrapper from "@/components/MotionWrapper";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Heart, FileText } from "lucide-react";
import communityImage from "@/assets/community-celebration.jpg";

const values = [
  {
    icon: Heart,
    title: "Cultural Preservation",
    description: "Keeping the rich traditions of Kerala alive for future generations through events, education, and community engagement.",
  },
  {
    icon: Users,
    title: "Community Unity",
    description: "Bringing Malayalee families together to foster friendships, support networks, and a sense of belonging.",
  },
  {
    icon: Target,
    title: "Service Excellence",
    description: "Dedicated to serving our members and the broader community with compassion and integrity.",
  },
];

export default function About() {
  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                  About MAGH
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                  Building Bridges of{" "}
                  <span className="text-gradient-gold">Culture & Community</span>
                </h1>
                <p className="text-xl text-primary-foreground/70">
                  Since 1987, the Malayalee Association of Greater Houston has been the heart of Kerala culture in Texas.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Origin Story */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                    Our Origin
                  </h2>
                  <div className="prose prose-lg text-muted-foreground">
                    <p>
                      In the late 1980s, a small group of Malayalee families in Houston shared a common dream: to create a space where their children could learn about their heritage, where traditions could be celebrated, and where community bonds could flourish.
                    </p>
                    <p>
                      What started as informal gatherings in living rooms has grown into one of the largest and most active Indian cultural organizations in Greater Houston, serving thousands of families and hosting dozens of events each year.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img
                    src={communityImage}
                    alt="MAGH community celebration"
                    className="rounded-2xl shadow-elevated w-full h-[400px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Mission & Values */}
          <section className="py-20 lg:py-28 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                  Our Mission & Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Guided by our commitment to culture, community, and compassion.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Governance */}
          <section id="bylaws" className="py-20 lg:py-28">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                    Transparency & Governance
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    MAGH operates with full transparency. Our bylaws, financial statements, and governance documents are available for review by all members.
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity">
                    <FileText className="w-5 h-5" />
                    View Bylaws (PDF)
                  </button>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionWrapper>
  );
}

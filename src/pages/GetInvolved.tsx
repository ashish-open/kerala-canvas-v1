import Navigation from "@/components/Navigation";
import MotionWrapper from "@/components/MotionWrapper";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Users, Handshake, Send } from "lucide-react";

const opportunities = [
  {
    icon: Heart,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers who make our events and programs possible.",
    benefits: ["Flexible scheduling", "Community impact", "Networking opportunities", "Skill development"],
  },
  {
    icon: Users,
    title: "Organize an Event",
    description: "Have an idea for a community event? We provide support and resources to bring it to life.",
    benefits: ["Planning support", "Venue access", "Marketing help", "Budget assistance"],
  },
  {
    icon: Handshake,
    title: "Partner with MAGH",
    description: "Businesses and organizations can partner with us for mutual benefit and community impact.",
    benefits: ["Brand visibility", "Community goodwill", "Networking events", "Tax benefits"],
  },
];

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
                  Get Involved
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                  Join Our <span className="text-gradient-gold">Mission</span>
                </h1>
                <p className="text-xl text-primary-foreground/70 max-w-2xl">
                  There are many ways to contribute to our community. Find the opportunity that's right for you.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Opportunities */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {opportunities.map((opp, index) => (
                  <motion.div
                    key={opp.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <opp.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {opp.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {opp.description}
                    </p>
                    <ul className="space-y-2">
                      {opp.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Volunteer Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll be in touch to discuss how you can contribute.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-soft space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                        Area of Interest
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="organize">Organize an Event</option>
                        <option value="partner">Business Partnership</option>
                        <option value="sponsor">Sponsorship</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tell us more
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us about your skills, availability, or ideas..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full shadow-gold hover:shadow-lg transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    Submit Interest
                  </button>
                </form>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </MotionWrapper>
  );
}

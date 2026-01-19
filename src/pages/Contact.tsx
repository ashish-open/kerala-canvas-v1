import Navigation from "@/components/Navigation";
import MotionWrapper from "@/components/MotionWrapper";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Building2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
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
                  Contact Us
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                  Get in <span className="text-gradient-gold">Touch</span>
                </h1>
                <p className="text-xl text-primary-foreground/70 max-w-2xl">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Your message..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full shadow-gold hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </motion.div>

                {/* Contact Info & Map */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  {/* Contact Details */}
                  <div className="bg-card rounded-2xl p-8 shadow-soft">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Address</p>
                          <p className="text-muted-foreground">Houston, Texas, USA</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <a href="mailto:info@maghusa.org" className="text-muted-foreground hover:text-accent transition-colors">
                            info@maghusa.org
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Phone</p>
                          <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                            (123) 456-7890
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hall Rental Card */}
                  <div id="hall-rental" className="bg-muted/50 rounded-2xl p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-foreground">
                          Hall Rental Inquiry
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Looking to rent our community hall for your event?
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Our community hall is available for private events, cultural programs, and celebrations. Contact us for availability and pricing.
                    </p>
                    <a
                      href="mailto:hall@maghusa.org?subject=Hall Rental Inquiry"
                      className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      hall@maghusa.org
                    </a>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  </div>
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

import Navigation from "@/components/Navigation";
import MotionWrapper from "@/components/MotionWrapper";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Shield, CheckCircle } from "lucide-react";

const donationAmounts = [25, 50, 100, 250, 500];

const impactItems = [
  { amount: 25, impact: "Provides educational supplies for one student" },
  { amount: 50, impact: "Supports a family in need with emergency assistance" },
  { amount: 100, impact: "Sponsors a child's participation in cultural programs" },
  { amount: 250, impact: "Funds community outreach and wellness programs" },
  { amount: 500, impact: "Helps preserve and promote Malayalam language education" },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");

  const displayAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <MotionWrapper>
      <div className="min-h-screen">
        <Navigation />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-8"
                >
                  <Heart className="w-10 h-10 text-accent" />
                </motion.div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6">
                  Make a <span className="text-gradient-gold">Difference</span>
                </h1>
                <p className="text-xl text-primary-foreground/70">
                  Your generosity helps us preserve our culture, support our community, and extend a helping hand to those in need.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Donation Form */}
          <section className="py-16 lg:py-24 -mt-8">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-3xl shadow-elevated p-8 lg:p-12"
                >
                  <div className="grid lg:grid-cols-2 gap-10">
                    {/* Amount Selection */}
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                        Select Amount
                      </h2>

                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {donationAmounts.map((amount) => (
                          <button
                            key={amount}
                            onClick={() => {
                              setSelectedAmount(amount);
                              setCustomAmount("");
                            }}
                            className={`py-4 rounded-xl font-semibold transition-all ${selectedAmount === amount && !customAmount
                                ? "bg-accent text-accent-foreground shadow-gold"
                                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                              }`}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>

                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                        <input
                          type="number"
                          placeholder="Custom amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount(null);
                          }}
                          className="w-full pl-8 pr-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                      </div>

                      {/* Impact Message */}
                      {displayAmount && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-6 p-4 bg-muted/50 rounded-xl"
                        >
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">${displayAmount}</span>{" "}
                            {impactItems.find(item => item.amount <= displayAmount!)?.impact || impactItems[0].impact}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* Payment Button & Info */}
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                        Complete Donation
                      </h2>

                      <button className="w-full py-4 bg-accent text-accent-foreground font-semibold rounded-xl shadow-gold hover:shadow-lg transition-all hover:scale-[1.02] mb-6">
                        Donate ${displayAmount || 0}
                      </button>

                      <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">
                            Secure payment processed through Stripe. Your financial information is never stored.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">
                            MAGH is a 501(c)(3) non-profit. Your donation is tax-deductible.
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">
                            You'll receive a receipt via email for your records.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Impact Stories */}
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  Where Your Donation Goes
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                  100% of your donation goes directly to supporting our community programs, cultural events, and charitable initiatives.
                </p>

                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { percentage: "40%", label: "Cultural Programs" },
                    { percentage: "35%", label: "Community Support" },
                    { percentage: "25%", label: "Charitable Initiatives" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-6 shadow-soft"
                    >
                      <div className="text-4xl font-serif font-bold text-accent mb-2">
                        {item.percentage}
                      </div>
                      <div className="text-foreground font-medium">{item.label}</div>
                    </motion.div>
                  ))}
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

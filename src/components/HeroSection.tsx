import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";


export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://maghusa.s3.ap-south-1.amazonaws.com/herobg1080.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA3V7UXRM6N44INRWN%2F20260120%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260120T182643Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRjBEAiBr5gS4Cprnh%2BPib97yoDiv9xKyKILU53IjDMjPFj0v5QIgEdGGxNEcdBxg3x9CGk%2Bcn4Dsr5DAarSRPzW4Fo%2FYesoq4wIItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw4MDMxMzUyNjE1MDAiDGFiDCxZ6pfzocH7Byq3Ag3XqDnmdkZu1BWBeLj6zI4pRh%2BnGmvYCPGRZ3XvO81nq18zh4w3dzVpWJxiACZ61h%2BkthedlIXdCaYlp6Ca26YeWMLuOs1pY7OAZMR7Ed7kC1RrToj2bF4375w5FS0SoaZwb8LcKkbAINuJQXXYJe7KSuVk5h%2Fs5SeXL1TfDJgDcYN4%2BNLOdk0CdkEy0oksINpjCn0ragIN4XqXTBV%2FQlDdZqcQBSRKm480noL1%2FA5R2cGihzSPkGMLkysqKkDM3rYO%2BhJFT8ITv6SxkyJgZxZGW4lZkeNxatlrQmHjSX8DIy9ppsKV7eyFaslsup1sAGy73vQy43B71zlebVa2tN83w3QpaydQqpx0zRy89HXrnoG%2F1j%2Bpui6rYrpmwg12MykN5wWHmVqcuaRx6LeWwzYOHnOVdk8PMM6Mv8sGOq4CaJScpEJSi5ZvEoZgWWSZAvvdoPoc0YHg7K51vJrPbSgZ%2BT5tJaiq8mGtTuLWSefFhqNSavtE9O6U3HC7ltSCsj5m2LGtWHgwGMiK65y4VDb1Pf4q8CzK0hKaFiu%2FEVeWPmvTOVY1l4Uukv8wN06OGJzcloZmYNPypqSkCR9SU%2FBESFbLmvicGd9Y%2F2PV43HUjPkQvEAyktDOt51OW13JDat2PXa0RJua0llhLWZA%2FAFSR%2B%2BRoWu8UOGldBA8swFFJpdbGccuBg2SVxnRQisRSYkDeaKRQOFfRuDCJDPfP71GL61a9KeEvwCeTsjjZHFs%2FFhS8yUtLUMc0yUqmf6Fj7ksic2gj%2Bg%2Byq5CkL31xpGEwPFgoCkEXIFOBYcRv4BCrGVvpsK29IHdMnL4KxE%3D&X-Amz-Signature=3195feeb7f3e0f39b9793dd99fd370afdadd69470b5dc9e28c636a6475c37f56&X-Amz-SignedHeaders=host&response-content-disposition=inline" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Animated grain overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container px-4 lg:px-8 text-left"
      >
        <div className="max-w-4xl">
          {/* Badge - Slide Up */}
          <div className="overflow-hidden mb-8 inline-block">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium">Serving Greater Houston Since 1987</span>
            </motion.div>
          </div>

          {/* Main Heading - Masked Reveal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6">
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              >
                A Home for{" "}
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block text-gradient-gold pb-2" // Added pb-2 to prevent gradient clipping
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
              >
                Malayalees
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                in Greater Houston
              </motion.span>
            </div>
          </h1>

          {/* Subheading - Fade Up */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 font-light mb-10 max-w-2xl"
          >
            Celebrating culture, community, and compassion since 1987
          </motion.p>

          {/* CTA Buttons - Fade Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              to="/events"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full shadow-gold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore Events
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/donate"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground font-semibold rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Support the Community
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

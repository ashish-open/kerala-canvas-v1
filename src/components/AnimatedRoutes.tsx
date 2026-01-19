import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Events from "@/pages/Events";
import Community from "@/pages/Community";
import Gallery from "@/pages/Gallery";
import GetInvolved from "@/pages/GetInvolved";
import Donate from "@/pages/Donate";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/community" element={<Community />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;

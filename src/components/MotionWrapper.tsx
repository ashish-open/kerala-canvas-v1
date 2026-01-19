import React from "react";
import { motion } from "framer-motion";

interface MotionWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const MotionWrapper = ({ children, className, delay = 0 }: MotionWrapperProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 0.4,
                ease: [0.2, 0.8, 0.2, 1], // Custom "out-kerala" easing
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;

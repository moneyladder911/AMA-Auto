import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-title"
                >
                    The Best <span className="text-accent">Auto Repair Shop</span> in Dubai Investment Park (DIP).
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-subtitle"
                >
                    Expert Care for All Makes & Models. Precision repairs, genuine parts, and 100+ five-star reviews.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="#booking" className="hero-cta glow-effect">
                        Book Your Free Inspection
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

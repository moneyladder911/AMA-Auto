import { Wrench, Monitor, ShieldCheck, ThermometerSnowflake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Major & Minor Service",
            desc: "Specialized European oil and filter change, comprehensive checks, and fluid top-ups for peak performance.",
            icon: <Wrench size={32} />
        },
        {
            title: "Diagnostic Scan",
            desc: "Dealer-level computer diagnostics for ECU/Software to identify and fix complex issues accurately.",
            icon: <Monitor size={32} />
        },
        {
            title: "Brakes & Suspension",
            desc: "Precision maintenance for high-performance safety, including pad replacement, rotor resurfacing, and shock absorbers.",
            icon: <ShieldCheck size={32} />
        },
        {
            title: "A/C Repair",
            desc: "Specialized cooling solutions for the Dubai heat. Compressor repair, gas refill, and leak detection.",
            icon: <ThermometerSnowflake size={32} />
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-heading">Specialized German Car Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <a href="#contact" className="service-link">
                                Learn More <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

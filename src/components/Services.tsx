import { Wrench, Monitor, ShieldCheck, ThermometerSnowflake, ArrowRight, Truck, Battery, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Oil Change & Service",
            desc: "Premium synthetic oil and filter change, comprehensive checks, and fluid top-ups for peak performance.",
            icon: <Wrench size={32} />
        },
        {
            title: "Electrical Diagnostics",
            desc: "Expert car electrical diagnostics and repair. wiring, ECU, and software fixes for all complex issues.",
            icon: <Zap size={32} />
        },
        {
            title: "Steering & Suspension",
            desc: "Complete steering service and suspension maintenance for a smooth, stable, and safe drive.",
            icon: <ShieldCheck size={32} />
        },
        {
            title: "Cooling System & A/C",
            desc: "Specialized cooling system service and A/C repair. Radiatiors, compressors, gas refill, and leak detection.",
            icon: <ThermometerSnowflake size={32} />
        },
        {
            title: "Car Battery Service",
            desc: "Professional battery testing, replacement, and system checks to ensure reliable performance.",
            icon: <Battery size={32} />
        },
        {
            title: "Car Pickup & Towing",
            desc: "Convenient car pickup and towing service for your repairs. We take care of getting your car to us.",
            icon: <Truck size={32} />
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-heading">Specialized Car Services</h2>
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

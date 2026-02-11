import { CheckCircle2 } from 'lucide-react';
import './BrandSlider.css';

const BrandSlider = () => {
    return (
        <section id="brands" className="brand-section">
            <div className="container">
                <div className="brand-header">
                    <h3 className="section-title">Luxury Makes We Service</h3>
                    <p className="section-subtitle">
                        Certified expertise for the world's finest German engineering.
                    </p>
                </div>

                <div className="brand-showcase">
                    <img
                        src="/assets/luxury-banner.png"
                        alt="Audi, BMW, Porsche, Mercedes-Benz Logos"
                        className="brand-banner-img"
                    />
                </div>

                <div className="brand-features">
                    <div className="feature-item">
                        <CheckCircle2 size={20} className="feature-icon" />
                        <span>Genuine OEM Parts</span>
                    </div>
                    <div className="feature-item">
                        <CheckCircle2 size={20} className="feature-icon" />
                        <span>Factory-Trained Techs</span>
                    </div>
                    <div className="feature-item">
                        <CheckCircle2 size={20} className="feature-icon" />
                        <span>Dealer-Level Diagnostics</span>
                    </div>
                    <div className="feature-item">
                        <CheckCircle2 size={20} className="feature-icon" />
                        <span>Warranty-Safe Service</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandSlider;

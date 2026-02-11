import { MapPin, Clock, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-top">
                <div className="container footer-grid">
                    <div className="footer-info">
                        <h3 className="footer-logo"><span className="text-accent">AMA</span> AUTO</h3>
                        <p className="footer-desc">
                            The ultimate destination for German car maintenance and repair in Dubai Investment Park.
                        </p>
                        <div className="contact-item">
                            <MapPin size={20} className="icon" />
                            <span>Dubai Investment Park 1 (DIP 1), Dubai, UAE</span>
                        </div>
                        <div className="contact-item">
                            <Clock size={20} className="icon" />
                            <span>Mon - Sat: 8:00 AM - 9:00 PM</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} className="icon" />
                            <span>+971 55 555 5555</span>
                        </div>
                    </div>

                    <div className="footer-map">
                        <iframe
                            title="Google Map"
                            src="https://maps.google.com/maps?q=Dubai%20Investment%20Park%201&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="250"
                            style={{ border: 0, borderRadius: '8px' }}
                            allowFullScreen
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} AMA Auto Repairing Garage. All rights reserved.</p>
                </div>
            </div>

            <a href="https://wa.me/971555555555" className="floating-whatsapp" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="30" height="30" />
                <span>Chat with a Specialist</span>
            </a>
        </footer>
    );
};

export default Footer;

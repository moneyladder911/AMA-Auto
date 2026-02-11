import { useState } from 'react';
import { Calendar, Car, User, Phone } from 'lucide-react';
import './BookingForm.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        carModel: '',
        serviceType: 'inspection'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to a backend or WhatsApp
        const message = `Hello, I'd like to book a free inspection. Name: ${formData.name}, Phone: ${formData.phone}, Car: ${formData.carModel}, Service: ${formData.serviceType}`;
        const whatsappUrl = `https://wa.me/971547242806?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="booking" className="booking-section">
            <div className="container">
                <div className="booking-content">
                    <h2 className="booking-title">Appointments</h2>
                    <p className="booking-subtitle">
                        Book your appointment quickly and easily online.
                    </p>

                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="sr-only">Your Name</label>
                            <div className="input-wrapper">
                                <User size={20} className="input-icon" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="sr-only">Phone Number</label>
                            <div className="input-wrapper">
                                <Phone size={20} className="input-icon" />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="carModel" className="sr-only">Car Make & Model</label>
                            <div className="input-wrapper">
                                <Car size={20} className="input-icon" />
                                <input
                                    type="text"
                                    id="carModel"
                                    name="carModel"
                                    placeholder="Car Make & Model"
                                    required
                                    value={formData.carModel}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="serviceType" className="sr-only">Service Type</label>
                            <div className="input-wrapper">
                                <Calendar size={20} className="input-icon" />
                                <select
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                >
                                    <option value="inspection">Free Inspection</option>
                                    <option value="major-service">Major Service</option>
                                    <option value="minor-service">Minor Service</option>
                                    <option value="diagnostics">Computer Diagnostics</option>
                                    <option value="brakes">Brakes & Suspension</option>
                                    <option value="ac-repair">A/C Repair</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">
                            Request Appointment
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;

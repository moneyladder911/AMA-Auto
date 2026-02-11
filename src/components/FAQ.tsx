import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const faqs = [
        {
            question: "Do you offer fast turnaround times for car repairs?",
            answer: "Yes, we prioritize efficiency without compromising quality. Simple services like oil changes are often done within an hour, and we provide realistic timelines for more complex repairs."
        },
        {
            question: "Is your service 100% reliable and guaranteed?",
            answer: "Absolutely. We stand behind our work with a warranty on all repairs. Our technicians are highly trained, and we use only genuine or high-quality OEM parts to ensure lasting results."
        },
        {
            question: "Do you service all car makes and models?",
            answer: "Yes, while we are specialists in German engineering (Audi, BMW, Mercedes, Porsche), our expert team is fully equipped and experienced to service all major car brands and models."
        },
        {
            question: "Can I book an appointment online?",
            answer: "Yes! You can easily book your appointment through our website's booking form. Just choose your preferred date and time, and our team will confirm your slot instantly."
        },
        {
            question: "Do you offer pickup and drop-off services?",
            answer: "Yes, we offer convenient car pickup and towing services. Let us know your location when booking, and we can arrange to bring your car to the garage for you."
        },
        {
            question: "How transparent is your pricing?",
            answer: "We pride ourselves on complete transparency. You will receive a detailed estimate before any work begins, and we never proceed with additional repairs without your explicit approval."
        },
        {
            question: "Where are you located in Dubai Investment Park?",
            answer: "We are located at 1/1, 55 Street, Dubai Investment Park 1 (DIP 1). You can find us easily on Google Maps by searching 'RPM Auto Garage LLC' or using our Makani number 15070 64550."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <h2 className="section-heading">Frequently Asked Questions</h2>
                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

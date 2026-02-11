import { Star } from 'lucide-react';
import './Trust.css';

const Trust = () => {
    const reviews = [
        {
            name: "Mohammad Altaf",
            car: "Audi Owner",
            text: "If you own an Audi and need repairs, Amaauto is the place to go. Their professionalism and attention to detail are unmatched. Sanjay Wattal is excellent with communication, and Anil Fernandes leads an engineering team that knows Audi inside out.",
            stars: 5
        },
        {
            name: "Stelvin Rodrigues",
            car: "BMW Owner",
            text: "I had a great experience at Amaauto! They quickly diagnosed and fixed the issue with my BMW, and the team was very professional. A big thank you to Anil Fernandes in Operations & Engineering for ensuring everything was seamless.",
            stars: 5
        },
        {
            name: "Akram Mohammed",
            car: "Audi Owner",
            text: "Anil and Sanjay are great folks. They understand the concerns of their clients and provide the best advise. I received genuine advise with my Audi and also, avoided unnecessary repair cost. You have bagged a long term customer!",
            stars: 5
        }
    ];

    return (
        <section id="reviews" className="trust-section">
            <div className="container">
                <h2 className="trust-heading">Trusted by 2,500+ Owners in Dubai</h2>

                <div className="reviews-grid">
                    {reviews.map((review, i) => (
                        <div key={i} className="review-card">
                            <div className="stars">
                                {[...Array(review.stars)].map((_, index) => (
                                    <Star key={index} size={18} fill="#FFD700" stroke="#FFD700" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <div className="author-avatar">{review.name.charAt(0)}</div>
                                <div>
                                    <h4 className="author-name">{review.name}</h4>
                                    <span className="author-car">{review.car}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;

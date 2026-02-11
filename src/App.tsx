
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandSlider from './components/BrandSlider';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Trust from './components/Trust';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <title>AMA Auto Garage - Expert German Car Service in DIP</title>
          <meta name="description" content="Premier German car specialist in Dubai Investment Park. Expert repair for Audi, Porsche, BMW & Mercedes. Book your free inspection today." />
          <meta name="keywords" content="German car repair, car service DIP, Audi repair Dubai, Porsche service, BMW mechanic, Mercedes garage Dubai" />
          <link rel="canonical" href="https://amaautogarage.ae" />
          {/* Add preconnect for fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Helmet>

        <Header />

        <main>
          <Hero />
          <BrandSlider />
          <Services />
          <BookingForm />
          <Trust />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;

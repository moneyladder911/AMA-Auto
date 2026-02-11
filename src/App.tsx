
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
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
          <title>RPM Auto Garage LLC - The Best Auto Repair Shop in DIP</title>
          <meta name="description" content="The Best Auto Repair Shop in Dubai Investment Park (DIP). Expert repair for all makes and models. Book your free inspection today." />
          <meta name="keywords" content="Best Auto Repair Shop DIP, Car repair Dubai, Auto garage DIP, Car service Dubai Investment Park, Mechanic Dubai" />
          <link rel="canonical" href="https://rpmautogarage.net" />
          {/* Add preconnect for fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Helmet>

        <Header />

        <main>
          <Hero />
          <Services />
          <Trust />
          <BookingForm />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;

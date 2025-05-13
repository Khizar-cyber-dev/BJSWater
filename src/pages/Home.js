import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Composition from '../components/Composition';
import Products from '../components/Products';
import DeliveryService from '../components/DeliveryService';
import Story from '../components/Story';
import Testimonials from '../components/Testimonials';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>

        <Navbar />
        <Hero />
        <Composition />
        <Products />
        <DeliveryService />
        <Story />
        <Testimonials />
        <Experience />
        <Footer />

    </div>
  );
}

export default Home;

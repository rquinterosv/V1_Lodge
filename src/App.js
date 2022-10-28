import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Footer from './components/Footer'
import Info from './components/Info'
import Service from './components/Service';
import Product from './components/Product';
import MapContainer  from './components/MapContainer'
import 'flowbite';
import TripAdvisor from './components/Tripadvisor';

function App() {
  return (
    
      <><Navbar />
      <Hero />
      <div>
        <Info />
      </div>
      <div className='m-5'>
          <Service />
      </div>
      <div className='m-5'>
          <Product />
      </div>
      <div>
        <TripAdvisor />
      </div>
      <Footer /></>
  );
}

export default App;

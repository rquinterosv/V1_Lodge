import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Footer from './components/Footer'
import Info from './components/Info'
import Service from './components/Service';
import Product from './components/Product';
import MapContainer  from './components/MapContainer'
import 'flowbite';

function App() {
  return (
    
      <><Navbar />
      <Hero />
      <div>
        <Info />
      </div>
      <div>
          <Service />
      </div>
      <div>
          <Product />
      </div>
      <Footer /></>
  );
}

export default App;

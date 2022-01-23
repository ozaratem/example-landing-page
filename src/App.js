import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Info from './components/Info';
import Aspects from './components/Aspects';
import Testimonials from './components/Testimonials';
import Banner2 from './components/Banner2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Info/>
      <Aspects/>
      <Testimonials/>
      <Banner2/>
      <Footer/>
    </div>
  );
}

export default App;

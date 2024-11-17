import { Routes, Route } from 'react-router-dom'; // Make sure to import Route as well
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <a href="/" style={{marginLeft:"15px"}}>Home</a>
      <a href="/about" style={{marginLeft:"15px"}}>About</a>
      <a href="/contact" style={{marginLeft:"15px"}}>Contact</a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />{' '}
        {/* Correct way to render the component */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

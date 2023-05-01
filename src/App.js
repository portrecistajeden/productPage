import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/homepage';
import Navbar from './components/navbar.js';
import ProductsPage from './pages/productsPage';
import AboutPage from './pages/aboutPage';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop/>
      <div id='app'>
        <Navbar/>       
        <Routes>
          <Route path='/' index element={<Homepage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

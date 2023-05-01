import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/homepage';
import Navbar from './components/navbar.js';
import ProductsPage from './pages/productsPage';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <Navbar/>
        <Routes>
          <Route path='/' index element={<Homepage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

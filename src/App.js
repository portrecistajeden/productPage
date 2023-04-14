import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Navbar from './components/navbar.js';

function App() {
  return (
    <BrowserRouter>
      <div id='app'>
        <Navbar/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

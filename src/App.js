import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Menu from './pages/menu/menu';
import About from './pages/about/about';
import Contact from './pages/contact/contact';



function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/home" exact element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound /> }/>

        </Routes>
    </BrowserRouter>
  
  );
}


export default App;

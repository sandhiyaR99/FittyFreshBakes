import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Menulist from './components/Menulist';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menulist' element={<Menulist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

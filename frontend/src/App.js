import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Nav from './components/Nav';
import Body from './content/Body';
import Bag from './components/Bags';
import Wallets from './components/Wallets';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/wallets" element={<Wallets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
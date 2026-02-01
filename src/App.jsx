import { HashRouter, Route, Routes } from 'react-router-dom';import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import { createContext, useState } from 'react'
import ShoppingCart from './pages/ShoppingCart'
import ContactUs from './pages/ContactUs'
import { FaWhatsapp } from 'react-icons/fa'; // ייבוא אייקון וואטסאפ
// ... שאר האימפורטים
export const myContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  const addProducts = (product) => {
    setProducts([...products, product]);
  }

  const deleteProduct = (id) => {
    setProducts(products.filter(item => item.id !== id));
  }

  // הפונקציה החדשה שתעדכן את הכמות
  const updateCount = (id, newCount) => {
    setProducts(products.map(item =>
      item.id === id ? { ...item, count: newCount } : item
    ));
  }

  return (
  <HashRouter>
      {/* הוספנו את updateCount ל-Value של ה-Context */}
      <myContext.Provider value={{ addProducts, deleteProduct, updateCount, products }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        {/* כפתור וואטסאפ צף */}
        <a
          href={`https://wa.me/972542412474?text=${"welcome to cake store..."}`}
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </myContext.Provider>
    </HashRouter>
  );
}

export default App;
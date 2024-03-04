import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopHere from './pages/ShopHere';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';


function App() {
  return (
<div>
<BrowserRouter>
<Navbar />
<Routes>
  <Route path ='/' element={<ShopHere />}/>
  <Route path ='/mens' element={<ShopCategory category="men"/>}/>
  <Route path ='/womens' element={<ShopCategory category="women"/>}/>
  <Route path ='/kids' element={<ShopCategory category="kid"/>}/>
  <Route path="/Product" element={<Product />}>
  <Route path=":ProductId" element={<Product />}/>
</Route>
  <Route path ='/cart' element={<Cart />}/>
  <Route path ='/login' element={<LoginSignup />}/>
</Routes>
</BrowserRouter>
</div> 
    
  );
}

export default App;

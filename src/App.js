import './App.css';
import Home from './pages/Home';
import {Router, Switch, Route, Link, Routes } from 'react-router-dom';
import allProducts from './assets/allProducts';
import Product from './pages/Product';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Cart from './pages/Cart';
import UserInfo from './pages/UserInfo';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      {allProducts.map((product) => (
          <Route path={`/products/${product.id}`} key={product.id} element={<Product product={product}/>}>
          </Route>
        ))}
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/userinfo' element={<UserInfo/>}></Route>
      <Route path='/admin' element={<AdminPage/>}></Route>

    </Routes>
      



      

      
    </div>
  );
}

export default App;

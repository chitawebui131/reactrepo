import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';

function App() {

  const [title, setTitle] = useState("Hello, students!");
  const [products, setProducts] = useState([
    {id: 1, title: 'Product 1', price: 899},
    {id: 2, title: 'Product 2', price: 982},
    {id: 3, title: 'Product 3', price: 322},
    {id: 4, title: 'Product 4', price: 763},
    {id: 5, title: 'Product 5', price: 389}
  ]);

  const clickMe = () => {
    setTitle('Title is changed!');
    console.log("It`s clicked! ");
  }

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }

  return (
    <div>
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductList products={ products } deleteProduct={ deleteProduct } /> } >
            </Route>
            <Route path='/about' element={<About/> }></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/add' element={<AddProduct/>}></Route> 
            <Route path='/edit/:id' element={<EditProduct/>}></Route>

          </Routes>      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from './components/Footer.jsx';
import ProductCard from './components/ProductCard.jsx';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage.jsx';
import ProductDetailsPage from "./components/ProductDetailsPage.jsx";
import { Link } from 'react-router-dom';
import productsData from "./assets/products.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdHomeFilled } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ProductList from "./components/ProductList.jsx";
import { useState } from 'react';
import AddProduct from "./Pages/AddProduct.jsx";
import { ProductsProvider } from './components/ProductsContext'; // Adjust the path as needed
import FilterPage from "./components/FilterPage.jsx";

function App() {

  
  return (
    <>
        <ProductsProvider>
        <div className="App">
          <div className="content-wrap">
            <div className="page-container">
            <Navbar/>           
             {/* <HomePage /> */}
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="/products" element= {<ProductList />}  />
              <Route path="/addproduct" element= {<AddProduct/>}  />
              <Route path="/filter/" element= {<FilterPage products={productsData}/>}  />
              <Route path="/View-More/:productId" element={<ProductDetailsPage products={productsData}/>} />
              <Route path="*" element={ <ErrorPage /> } />
            </Routes>
            <Footer />


            {/* {Roters about page} */}

          </div>
          </div>

        </div>
        </ProductsProvider>
    </>
  );
}

export default App;


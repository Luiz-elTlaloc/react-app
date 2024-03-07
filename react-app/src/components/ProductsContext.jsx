// import productsData from '../assets/products.json'; // Adjust the path as needed

// export const ProductsProvider = ({ children }) => {
//   // Initialize state with productsData instead of an empty array
//   const [products, setProducts] = useState(productsData);

//   const addProduct = product => {
//     setProducts(currentProducts => [...currentProducts, product]);
//   };

//   return (
//     <ProductsContext.Provider value={{ products, addProduct }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from 'react';
import productsData from '../assets/products.json'; // Make sure the path matches the location of your JSON file

// Create a context with a default empty array
const ProductsContext = createContext([]);

// This hook makes it easier to use the context from any component
export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  // Initialize state with productsData from your JSON file
  const [products, setProducts] = useState(productsData);

  // Function to add a product to the products array
  const addProduct = (product) => {
    setProducts((currentProducts) => [...currentProducts, product]);
  };

  // Provide the products array and the addProduct function to the rest of your app
  return (
    <ProductsContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};


import ProductCard from './ProductCard';
import { useState } from 'react';
import productsData from "../assets/products.json"
import React, { useEffect } from 'react';
import { useProducts } from './ProductsContext';

function ProductList() {
  // const [products] = useState(productsData);
  const { products } = useProducts();

  return (
    <div>
    <h2 className="product-title">New Products</h2>
    {products.map((product,index) => {
      return (
          <ProductCard key={`${product.id}-${index}`} product={product} />
      )
    })}
  </div>
  );
}
export default ProductList;

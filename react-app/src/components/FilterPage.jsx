import React, { useEffect, useState } from 'react';
import "./FilterPage.css";
import ProductCard from "./ProductCard";
import { useProducts } from "./ProductsContext";

function FilterPage() {
  const { products } = useProducts(); // Fetch products from context
  const [filteredProducts, setFilteredProducts] = useState(products); // Initialize filteredProducts with the context's products
  const [filterPrice, setFilterPrice] = useState("");

  useEffect(() => {
    applyFilter(filterPrice); // Reapply the filter whenever products change
  }, [products, filterPrice]); // Depend on products and filterPrice

  const applyFilter = (filterPrice) => {
    let filtered;
    switch (filterPrice) {
      case "expensive":
        filtered = products.filter((product) => product.price > 1000);
        break;
      case "moderate":
        filtered = products.filter(
          (product) => product.price > 500 && product.price <= 1000
        );
        break;
      case "affordable":
        filtered = products.filter(
          (product) => product.price > 100 && product.price <= 500
        );
        break;
      case "budgetFriendly":
        filtered = products.filter((product) => product.price <= 100);
        break;
      default:
        filtered = products; // Default case shows all products
    }
    setFilteredProducts(filtered);
  };

  // Render logic remains the same
  return (
    <div>
      <h2 className="product-title">New Products</h2>
      <h3 className="filter-box-title">Filter Products</h3>
      <div className="filter-container">
        <div className="price-settings">
          <label className="price-title">Price</label>
          <div className="price-choices">
            <button onClick={() => applyFilter("expensive")} className="expensive">$1,000 and above</button>
            <button onClick={() => applyFilter("moderate")} className="moderate">$500 - $999</button>
            <button onClick={() => applyFilter("affordable")} className="affordable">$100 - $499</button>
            <button onClick={() => applyFilter("budgetFriendly")} className="budget-friendly">Under $100</button>
            <button onClick={() => applyFilter("")} className="clear-filter">Clear Filter</button>
          </div>
        </div>
      </div> 
      <div>
        {filteredProducts.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
}

export default FilterPage;




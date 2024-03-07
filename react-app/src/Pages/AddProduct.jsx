// import
// Dentro del div agregar <AddProduct />
import { useState } from "react";
import productsData from "../assets/products.json"
import { useProducts } from '../components/ProductsContext';

function AddProduct() {
//   const [productsLists, setProductLists] = useState(products);
  const [products, setProductsData] = useState(productsData);
  const { addProduct } = useProducts();

  //variables:
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  


  //handels:

  const handleTitleInput = e => {
    setTitle(e.target.value);
  };

  const handleDescription = e => {
    setDescription(e.target.value);
  };
  
  const handlePrice = e => {
    setPrice(e.target.value);
  };

  const handleDiscount = e => {
    setDiscount(e.target.value);
  };

  const handleRating = e => {
    setRating(e.target.value);
  };

  const handleStock = e => {
    setStock(e.target.value);
  };

  const handleBrand = e => {
    setBrand(e.target.value);
  };

  const handleCategory = e => {
    setCategory(e.target.value);
  };

  const handleImages = e => {
    setImages([e.target.value]);
  };

  const addProductToList = (newProduct) => {
    // Create a new array
    // const updatedProductsList = [...productLists, newProduct];
    const updatedProductData = [...productsData, newProduct]; // <== ADD
  
    // setProductLists(updatedProductsList);
    setProductsData(updatedProductData);   // <== ADD
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {title, description, price, discount, rating, stock, brand, category, images}
    
    console.log("Submitted", newProduct);
    console.log(productsData.length);
    // addProductToList(newProduct);  
    addProduct(newProduct);

    setTitle("");
    setDescription("");
    setPrice("");
    setDiscount("");
    setRating("");
    setStock("");
    setBrand("");
    setCategory("");
    setImages("");

  }



  return (
    <div className="AddProduct" >
      <h1 className= "form-title"> Can't Find A Product? </h1>
      <h4 className="form-subtitle">If some products are missing, please fill the following form so we can handle the re-stock of it. </h4>

       <form>
        <label className="form-label"> Product: </label>
        <input className="form-container"
            type="text" 
            name="title" 
            placeholder="Product Name"
            value={title}
            onChange={handleTitleInput} 
        />
        
  
        <label className="form-label"> Description: </label>
        <input className="form-container"
            type="text" 
            name="description" 
            placeholder="Enter Description"
            value={description}
            onChange = {handleDescription}
        />
  
        <label className="form-label"> Price: </label>
        <input className="form-container"
            type="number" 
            name="price" 
            placeholder="Enter Price"
            value={price}
            onChange={handlePrice} 
        />

        <label className="form-label"> Discount: </label>
        <input className="form-container"
            type="number" 
            name="discount" 
            placeholder="Enter Discount"
            value={discount} 
            onChange={handleDiscount}
        />
  
        <label className="form-label"> Rating: </label>
        <input className="form-container"
            type="number" 
            name="rating" 
            placeholder="Enter Rating"
            value={rating} 
            onChange={handleRating}
        />
        
        <label className="form-label"> Stock: </label>
        <input className="form-container"
            type="number" 
            name="stock" 
            placeholder="Available Stock"
            value={stock} 
            onChange={handleStock}
        />
              
        <label className="form-label"> Brand: </label>
        <input className="form-container"
            type="text" 
            name="brand" 
            placeholder="Brand Name"
            value={brand}
            onChange={handleBrand}
        />
              
        <label className="form-label"> Category:</label>
        <input className="form-container"
            type="text"
            name="category"
            placeholder="Enter Category"
            
            value={category}
            onChange={handleCategory}
        />
        <label className="form-label"> Image: </label>
        <input className="form-container"
            type="url"
            name="image"
            placeholder="Add An Image"
            value={images}
            onChange={handleImages}
        />
        
        <button className="submit" type="submit" onClick={handleSubmit}>Submit product</button>
      </form>
    </div>
  );
}

export default AddProduct;
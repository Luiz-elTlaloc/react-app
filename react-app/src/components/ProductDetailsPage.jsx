import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "./ProductsContext"; 

function ProductDetailsPage() {
  const location = useLocation();
  const productId = location.state?.productId;
  const { products } = useProducts();

  const product = products.find((product) => product.id === productId);
  const [opinion, setOpinion] = useState("");
  // Initialize opinions state with data from localStorage
  const [opinions, setOpinions] = useState(() => {
    const savedOpinions = localStorage.getItem(`opinions-${productId}`);
    return savedOpinions ? JSON.parse(savedOpinions) : [];
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  useEffect(() => {
    // Update localStorage when opinions change
    localStorage.setItem(`opinions-${productId}`, JSON.stringify(opinions));
  }, [opinions, productId]);

  const handleOpinionChange = (e) => {
    setOpinion(e.target.value);
  };

  const handleSubmitOpinion = (e) => {
    e.preventDefault();
    setOpinions((prevOpinions) => [...prevOpinions, opinion]);
    setSubmissionStatus("Your review has been submitted successfully.");
    setOpinion(""); // Reset the input field after submission
  };

  if (!product) {
    return (
      <>
        <h1>We don't have it in stock at the moment, sorry for the inconvenience!</h1>
        <Link to="/">Go back home</Link>
      </>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div key={product.id} className="product-choice">
      <h1 className="prod-headline">Product Details</h1>
      <Slider {...sliderSettings} className="slick-slider">
        {product.images.map((image, index) => (
          <div key={index} className="slick-slide">
            <img src={image} alt={`Slide ${index + 1}`} className="slick-image" />
          </div>
        ))}
      </Slider>
      <h2 className="product-tag">{product.title}</h2>
      <em className="details">{product.description}</em>
      <p className="product-price">
        ${product.price} <span className="discount">({product.discountPercentage}% off!)</span>
      </p>

      <div className="product-info-box">
        <p className="product-rate"><strong>Rating:</strong> {product.rating} ⭐</p>
        <p className="product-stock"><strong>Stock:</strong> {product.stock}</p>
        <p className="product-brand"><strong>Brand:</strong> {product.brand}</p>
        <p className="product-category"><strong>Category:</strong> {product.category}</p>

        <form onSubmit={handleSubmitOpinion} className="opinion-form">
          <label className="form-label">Add A Review:</label>
          <input
            className="form-container"
            type="text"
            name="review"
            placeholder="Enter Review"
            value={opinion}
            onChange={handleOpinionChange}
          />
          <button className="submit" type="submit">Submit opinion</button>
        </form>
        {submissionStatus && <p className="submission-status">{submissionStatus}</p>}

        <div className="reviews">
          <h3 className="reviews-title">Reviews</h3>
          {opinions.map((opinion, index) => (
            <p key={index}>{opinion}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
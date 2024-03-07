import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { product } = props;
  
  // Local state to manage visibility
  const [isVisible, setIsVisible] = useState(true);

  // Function to hide the product card
  const hideProduct = () => setIsVisible(false);

  // Early return null if isVisible is false, effectively hiding the component
  if (!isVisible) {
    return null;
  }

  return (
    <div key={product.id} className="product-selection">
        
      <div className="complete-info-card">     
        <img
        className="product-images"
        src={product.images[0]}
        alt={product.description}
        width="350px"
      /> 
        <h2 className="product-label">{product.title}</h2>
        <p className="product-card-price"> ${product.price} <span className="product-disc"> ({product.discountPercentage} % off!)</span></p> 
        
        <p className="product-rating"> Rating: {product.rating} ⭐ </p>
        
        <div className="buttons">
           <button onClick={hideProduct} className="btn-delete"> Hide </button>
           <Link to={`/View-More/${product.id}`} state={{ productId: product.id }}> <button className="btn-view-more"> View More </button> </Link>
        </div>
        
        </div>  
      

    </div>
  );
}



export default ProductCard;
// import React from 'react';
// import { Link } from 'react-router-dom';


// function ProductCard(props) {


//   const {product, hideProduct} = props;

// console.log(product);
// console.log(product.id);
//   return (
//     // <div className="product-selection">
   
//         <div key={product.id} className="product-selection">
    
//             <img
//             className="product-images" /* Sera un carrusel de imagenes */
//             src={product.images[0]}
//             alt={product.description}
//             width="350px"
//           />          
//             <h2 className="product-label">{product.title}</h2>
//             <p className="product-price"> ${product.price}</p>
//             <p className="product-disc"> {product.discountPercentage} % off!</p>
//             <p className="product-rating"> Rating: {product.rating} ⭐</p>


//           <button onClick={() => hideProduct(product.id)} className="btn-delete"> Hide{""} </button>
          
//           {/* <Link to="/View-More">  <button className="btn-view-more"> View More {""}</button>  </Link> */}
//           <Link to={`/View-More/${product.id}`} state={{ productId: product.id }}> <button className="btn-view-more"> View More {""}</button> </Link>
          
//         </div>
//     //  </div>
//   );
// }


// export default ProductCard;


// src/components/MovieCard.jsx

// import React from 'react';

// function MovieCard(props) {
//     cç
  
//     return (
//       <div className="MovieCard">
//         <h3>{movie.title}</h3>
//         <p>Director: {movie.director}</p>
//         <p>Rating: {movie.IMDBRating}</p>
  
//         {/* {movie.hasOscars && <p>Got the Oscar Award! </p>}
//         {!movie.hasOscars && <p>Great movie but no Oscars! </p>} */}
//         {/*ternary style*/}
//         {movie.hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars!</p>}
  
//         <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
//           Delete 
//         </button>
//       </div>
//     );
//   }
  
//   export default MovieCard;




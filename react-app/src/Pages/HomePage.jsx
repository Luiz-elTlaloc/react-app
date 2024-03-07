import { Link } from 'react-router-dom';

const HomePage = () => {
  return (

    <div className="home-background" id="bg">    
            <h4 className="home-subheadline"> Find Something Cool Today</h4>
            <h1 className="home-headline">Get Up To<strong> 30% Off</strong> New Arrivals! </h1>
            <button className="home-button"> <Link to="/products"> Buy Now</Link></button>
   </div>  
  )
}

export default HomePage

{/* <div style={{ 
    width: '100vw',
    height: '100vh',
  }}>     */}
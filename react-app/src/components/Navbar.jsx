
import "./Navbar.css";
import {useState} from 'react';
import logo_light from '../assets/tg-black.png'
import search_icon_light from '../assets/search-w.png'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from 'react-icons';



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
      <div className="navbar">
        <ul>
          <Link to="#" className="menu-bars"> 
            <FaBars onClick={showSidebar}/> 
          </Link>
          <Link to="/"> <img src={logo_light} alt="" className="logo" /> </Link>
        </ul>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to="#" className='x-icon'>
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.link} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <div className="search-box"> 
          <input type="text" placeholder="Search"/>
          <img src={search_icon_light} alt=""/>
        </div> */}
      </div>
    </header>
  );
}
export default Navbar;
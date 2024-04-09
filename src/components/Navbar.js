// Navbar.js

import './Navbar.css';
import { MdLogout } from "react-icons/md";


const Navbar = () => {
  return (
    <nav>
      <ul>
      <li className="active">
        <a href="/auction" class="no-underline">  <button className="btn_nav">Auctioneer</button></a>
        </li>
        <li className="active">
        <a href="/bidders" class="no-underline">  <button className="btn_nav">Bidder</button></a>
        </li>
        <li className="logout-icon">
            <a href='/signin'>
          <button className="btn_nav logout-btn">
          <MdLogout />   
          </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

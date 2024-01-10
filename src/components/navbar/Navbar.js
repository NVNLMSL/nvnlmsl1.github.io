import React from 'react';
import { Link } from 'react-router-dom';


// const Navbar = () => {
//     return(
//         <header class="sticky">
//             <nav>
//                 <ul>
//                     <li><a href="home">Home</a></li>
//                     <li><a href="menu">Menu</a></li>
//                     <li><a href="about">About Us</a></li>
//                     <li><a href="contact">Contact Us</a></li>
            
//                 </ul>
//             </nav>
//             <div class="animation"></div>
//         </header>
//     )
// }

// export default Navbar;
const Navbar = () => {
    return (
      <header className="sticky">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="animation"></div>
      </header>
    );
  }
  
  export default Navbar;
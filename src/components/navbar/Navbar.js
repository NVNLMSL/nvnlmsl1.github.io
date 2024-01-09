import React from 'react';


const Navbar = () => {
    return(
        <header class="sticky">
            <nav>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="menu">Menu</a></li>
                    <li><a href="about">About Us</a></li>
                    <li><a href="contact">Contact Us</a></li>
            
                </ul>
            </nav>
            <div class="animation"></div>
        </header>
    )
}

export default Navbar;
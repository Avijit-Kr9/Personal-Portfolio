import React from 'react'

const Header = () => {
  return (
    <nav>
        <NavContent />
    </nav>
  );
};

const NavContent = () =>(
    <>
    <h2>Avijit.</h2>
    <div>
        <a href="#home">Home</a>
        <a href="#word">Word</a>
        <a href="#timeline">Timeline</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#testimonials">Testimonials</a>
    </div>
    <a href="mailto:avijit2772@gmail.com">
        <button>Email</button>
    </a>

    
    </>
)


export default Header;
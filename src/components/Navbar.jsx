// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import '../styles/Navbar.css'

// const Navbar = () => {
//   return (
//     <div>
//       <header className="navbar">
//         <nav className="nav-links">
//           <NavLink to='/Home' className={({isActive}) => isActive ? 'links active' : 'links'}>Home</NavLink>
//           <NavLink to='/About' className={({isActive}) => isActive ? 'links active' : 'links'}>About Us</NavLink>
//           <NavLink to='/Crops' className={({isActive}) => isActive ? 'links active' : 'links'}>Crops & Fertilizers</NavLink>
//           <NavLink to='/Services' className={({isActive}) => isActive ? 'links active' : 'links'}>Services</NavLink>
//           <NavLink to='/News' className={({isActive}) => isActive ? 'links active' : 'links'}>News & Events</NavLink>
//           <NavLink to='/Contact' className={({isActive}) => isActive ? 'links active' : 'links'}>Contact Us</NavLink>
//         </nav>
//       </header>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>
      {isOpen&& <div className='nav-overlay' onClick={closeSidebar}></div>}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to='/Home' className={({isActive}) => isActive ? 'links active' : 'links'} onClick={closeSidebar}>Home</NavLink>
        <NavLink to='/About' className={({isActive}) => isActive ? 'links active' : 'links'} onClick={closeSidebar}>About Us</NavLink>
        <NavLink to='/Crops' className={({isActive}) => isActive ? 'links active' : 'links'} onClick={closeSidebar}>Crops & Fertilizers</NavLink>
        <NavLink to='/Services' className={({isActive}) => isActive ? 'links active' : 'links'} onClick={closeSidebar}>Services</NavLink>
        <NavLink to='/News' className={({isActive}) => isActive ? 'links active' : 'links'} onClick={closeSidebar}>News & Events</NavLink>
        <NavLink to='/Contact' className={({isActive}) => isActive ? 'links active' : 'links'} onClick={closeSidebar}>Contact Us</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useContext, useState } from 'react'
import sublinks from './StripeData'
import {GiHamburgerMenu} from 'react-icons/gi'
import { StripeContext } from './StripeContext'

const Navbar = () => {
  let {openSidebar,closeSidebar,sidebarOpen,coordinates,setCoordinates,openSubmenu,closeSubmenu,setContent}=useContext(StripeContext)

  let handleMouseOver=(e)=>
  {
    openSubmenu();
    let left=e.target.getBoundingClientRect().left;
    let top=e.target.getBoundingClientRect().top;
    setCoordinates({left,top});
    setContent(sublinks.filter((items)=>
    {
      return items.page===e.target.textContent;
    }));
  }

  return (
    <div className="nav-section">
    <nav>
      <div className="nav-header" >
        <h2>Stripe</h2>
        <button className="ham" onClick={openSidebar}><GiHamburgerMenu/></button>
      </div>
      <div className="nav-links">
       <p onMouseOver={handleMouseOver} className='link-btn'>Products</p>
       <p onMouseOver={handleMouseOver} className='link-btn'>Developers</p>
       <p onMouseOver={handleMouseOver} className='link-btn'>Company</p>
      </div>
      <div className="nav-side">
        <button className='sign-in'>Sign In</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
import React, { useContext } from 'react'
import CartData from './CartData'
import { CartContext } from './CartContext';
import {BsFillCartPlusFill} from 'react-icons/bs'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {BiRupee} from 'react-icons/bi'

const NavComp = () => {
    let {cartCount}=useContext(CartContext);
  return (
    <header>
          <div className="header-content">
            <h2>Amazon</h2>
            <div className="cart-amount">
              <BsFillCartPlusFill className='bag'/>
              <span>{cartCount}</span>
            </div>
          </div>
    </header>
  )
}

export default NavComp
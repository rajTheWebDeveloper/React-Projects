import React, { useContext } from 'react'
import CartData from './CartData'
import { CartContext } from './CartContext';
import {BsFillCartPlusFill} from 'react-icons/bs'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {BiRupee} from 'react-icons/bi'
import NavComp from './NavComp';

const Cart = () => {
  let {removeItems,products,increase,decrease,total,cartCount}=useContext(CartContext);

  if(cartCount<=0)
  {
    return <section className='cart'>
        <NavComp/>
        <div className='empty'>
          <h1>Your Bag</h1>
          <p>is currently empty</p>
      </div>
    </section>
  }
  return (
    <section className="cart">
        <NavComp/>
        <div className="cart-content">
            <h1>Your Bag</h1>
          <div className="cart-items">
              {products.map((items)=>
              {
                  let {id,title,price,amount,img}=items;
                  return <div className="card" key={items.id}>
                      <img src={img} alt="" />
                      <div className="card-content">
                        <h2>{title}</h2>
                        <p>{price}</p>
                        <button onClick={()=>removeItems(id)}>Remove</button>
                      </div>
                      <div className="button-section">
                        <button onClick={()=>increase(id)}><IoIosArrowUp/></button>
                        <p>{amount}</p>
                        <button onClick={()=>decrease(id)}><IoIosArrowDown/></button>
                      </div>
                  </div>
              })}
          </div>
          <hr />
          <div className="total-section">
              <h2>Total</h2>
              <button>$ {total}</button>
          </div>
        </div>
    </section>
  )
}

export default Cart
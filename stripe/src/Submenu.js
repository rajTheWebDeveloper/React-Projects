import React, { useContext, useEffect, useRef } from 'react'
import { StripeContext } from './StripeContext'

const Submenu = () => {
  let {submenuOpen,coordinates,content}=useContext(StripeContext);
  let cont=useRef("");
  let {page,links}=content[0]

  useEffect(()=>
  {
    let {left,top}=coordinates;
    cont.current.style.left=`${left}px`;
    cont.current.style.top=`${top+50}px`;
  },[coordinates,content])
  
  return (
    <section className={submenuOpen?"submenu submenu-active":"submenu"} ref={cont}>
        {links.map((items)=>
        {
          return <div className="submenu-items">
            <p>{items.label}</p>
            <p>{items.icon}</p>
          </div>
        })}
    </section>
  )
}

export default Submenu
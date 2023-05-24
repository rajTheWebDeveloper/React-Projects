import React, { useContext } from 'react'
import {RxCross2} from 'react-icons/rx'
import sublinks from './StripeData'
import { StripeContext } from './StripeContext'

const Sidebar = () => {
  let {sidebarOpen,closeSidebar}=useContext(StripeContext)
  return (
    <section className={sidebarOpen?"sidebar sidebar-active":"sidebar"}>
      <div className="sidebar-header">
        <h2>stripe</h2>
        <button className="cross" onClick={closeSidebar}><RxCross2/></button>
      </div>
      <div className="side-links">
        {sublinks.map((mainItems,idx)=>
        {
          return <div className="each-link" key={idx}> 
              <p className='link-head'>{mainItems.page}</p>
              <div className="sub-links">
                {mainItems.links.map((subItems,subidx)=>
                {
                  return <div className="sub-items" key={subidx}>
                      <p>{subItems.label}</p>
                      <p>{subItems.icon}</p>
                  </div>
                })}
              </div>
          </div>
        })}
      </div>
      <div className="sign-in-side">
        <button>Sign In</button>
      </div>
    </section>
  )
}

export default Sidebar
import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { links, social } from './NavData'

const NavigationBar = () => {
    let [displayMenu,setDisplayMenu]=useState(true);

    let handleClick=()=>
    {
        setDisplayMenu(!displayMenu)
    }
  return (
    <div className="total-nav">
        <nav className={displayMenu?"nav-active":""}>
            <div className="nav-header">
                <h2>Tropical <span>Coder</span></h2>
                <GiHamburgerMenu onClick={handleClick} className='hamburger'/>
            </div>
            <div className={`nav-center ${displayMenu?"nav-center":"nav-center-inactive"}`}>
                {links.map((items)=>
                {
                    let {text,url,id}=items;
                    return <li key={id}><a href="" >{text}</a></li>
                })}
            </div>
            <div className="nav-icons">
                {social.map((items)=>
                {
                    let {id,url,icon}=items;
                    return <p key={id}>{icon}</p>
                })}
            </div>   
        </nav>
    </div>
  )
}

export default NavigationBar
import React, { createContext, useEffect, useState } from 'react'

let StripeContext=createContext("");

let StripeProvider=({children})=>
{
    let [sidebarOpen,setSidebarOpen]=useState(false);
    let [submenuOpen,setSubmenuOpen]=useState(false);
    let [coordinates,setCoordinates]=useState({left:"",top:""})
    let [content,setContent]=useState([{pages:"",links:[{}]}])

    let openSidebar=()=>
    {
        setSidebarOpen(true)
    }
    let closeSidebar=()=>
    {
        setSidebarOpen(false)
    }
    let openSubmenu=()=>
    {
        setSubmenuOpen(true)
    }
    let closeSubmenu=()=>
    {
        setSubmenuOpen(false)
    }
    return <StripeContext.Provider value={{sidebarOpen,submenuOpen,openSidebar,closeSidebar,openSubmenu,closeSubmenu,coordinates,setCoordinates,content,setContent}}>{children}</StripeContext.Provider>
}

export {StripeContext,StripeProvider}
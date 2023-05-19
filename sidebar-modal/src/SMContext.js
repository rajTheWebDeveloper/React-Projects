import React from 'react'
import {createContext,useState,useEffect} from 'react'

let SMContext=createContext("");



let SMProvider=({children})=>
{
    let [isSidebarOpen,setIsSidebarOpen]=useState(false);
    let [isModalOpen,setIsModalOpen]=useState(false);
    let openSidebar=()=>
    {
        setIsSidebarOpen(true)
    }
    let closeSidebar=()=>
    {
        setIsSidebarOpen(false)
    }
    let openModal=()=>
    {
        setIsModalOpen(true)
        console.log("open modal")
    }
    let closeModal=()=>
    {
        setIsModalOpen(false)
        console.log("close modal")
    }
    return <SMContext.Provider value={{isSidebarOpen,isModalOpen,openSidebar,closeSidebar,openModal,closeModal}}>{children}</SMContext.Provider>
}

export {SMContext,SMProvider}
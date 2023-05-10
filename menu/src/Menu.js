import React, { useState } from 'react'
import MenuData from './MenuData'

const Menu = () => {
    let [menuData,setMenuData]=useState(MenuData)

    let categories=['All',...new Set(MenuData.map((items)=>items.category))]

    let filterMenu=(inp)=>
    {
        if(inp==='All')
        {
            setMenuData(MenuData)
            return
        }
        let filteredItems=MenuData.filter((items)=>
        {
            return items.category===inp;
        })
        setMenuData(filteredItems)
    }
  return (
    <section className='menu-lobby'>
        <aside className="filters">
            {categories.map((items,idx)=>
            {
                return <button className='filter-button' onClick={()=>filterMenu(items)} key={idx}>{items}</button>
            })}
        </aside>
        <section className="menu-items"> 
            {menuData.map((menu)=>
            {
                let {id,title,category,price,desc,img}=menu
                return <article key={id}>
                    <img src={img} alt="" />
                    <div className="item-info">
                        <div className="item-head">
                            <h2>{title}</h2>
                            <button>$ {price}</button>
                        </div>
                        <p>{desc}</p>
                    </div>
                </article>
            })}
        </section>
    </section>
  )
}

export default Menu
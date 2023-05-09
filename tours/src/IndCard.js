import React, { useState } from 'react'
const IndCard = ({id,name,info,image,filterTours,price}) => {
    let [readMore,setReadMore]=useState(false)
  return (
    <aside key={id}>
                <img src={image} alt="" />
                <div className="info">
                  <h2>{name}</h2>
                  <button className='price'>${price}</button>
                  <p>{readMore?info.slice(0,350):info.slice(0,150)}
                  <button className='read-more' onClick={()=>setReadMore(!readMore)}>{readMore?"Show Less":"Read More"}</button></p>
                  <button className='delete' onClick={()=>filterTours(id)}>Not Interested</button>
                </div>
        </aside>
  )
}

export default IndCard
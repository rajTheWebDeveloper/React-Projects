import React, { useState } from 'react'

const AccEachQuestion = ({id,title,info}) => {
    let [isExpanded,setIsExpanded]=useState(false)
  return (
    <aside key={id}>
        <div className="control-center">
            <h3>{title}</h3>
            <button onClick={()=>setIsExpanded(!isExpanded)} className='expansion'>{isExpanded?"-":"+"}</button>
        </div>
        <p>{isExpanded?info:null}</p>
    </aside>
  )
}

export default AccEachQuestion
import React from 'react'

const TextGraphs = ({curatedText}) => {
  return (
    <article>
            {curatedText.map((items,idx)=>
            {
                return <p>{items}</p>
            })}
    </article>
  )
}

export default TextGraphs
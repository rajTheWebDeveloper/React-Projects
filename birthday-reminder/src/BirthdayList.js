import React from 'react'

const BirthdayList = ({list}) => {
  return (
    <article>
        {list.map((person)=>
        {
            let {id,name, age, image}=person
            return <aside key={id}>
                <img src={image} alt="" />
                <div className="info">
                    <h3>{name}</h3>
                    <p>{age} years</p>
                </div>
            </aside>
        })}
    </article>
  )
}

export default BirthdayList
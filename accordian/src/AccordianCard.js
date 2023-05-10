import React, { useState } from 'react'
import questions from './AccordianData'
import AccEachQuestion from './AccEachQuestion'

const AccordianCard = () => {
    let [accordianData,setAccordianData]=useState(questions)
  return (
    <section className="card">
        {accordianData.map((items)=>
        {
            return <AccEachQuestion {...items} key={items.id}/>
        })}
    </section>
  )
}

export default AccordianCard
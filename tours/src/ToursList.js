import React, { useState } from 'react'
import IndCard from './IndCard'

const ToursList = ({list,filterTours}) => {
  return (
    <article>
        {list.map((tour)=>
        {
            return <IndCard {...tour} key={tour.id} filterTours={filterTours}/>
        })}
    </article>
  )
}

export default ToursList
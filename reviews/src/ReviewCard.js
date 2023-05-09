import React, { useState } from 'react'
import reviewData from './ReviewData';
import {MdArrowBackIos,MdArrowForwardIos} from 'react-icons/md'

const ReviewCard = () => {
    let [index,setIndex]=useState(2);
    let [reviews,setReviews]=useState(reviewData)

    let adjustIndex=(idx)=>
    {
        if(idx>3)
        {
            return 0;
        }
        if(idx<0)
        {
            return 3;
        }
        return idx
    }
    let randomIdx=()=>
    {
        let res=Math.floor(Math.random()*4);
        return res;
    }
    let {id,name,job,image,text}=reviews[index]
  return (
    <section className='card' key={id}>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <h3>{job}</h3>
        <p>{text}</p>
        <div className="button-sec">
            <button onClick={()=>setIndex(adjustIndex(index-1))}><MdArrowBackIos/></button>
            <button onClick={()=>setIndex(adjustIndex(index+1))}><MdArrowForwardIos/></button>
        </div>
        <button className='random' onClick={()=>setIndex(randomIdx())}>Random User</button>
    </section>
  )
}

export default ReviewCard
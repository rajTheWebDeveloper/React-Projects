import React, { useEffect, useState } from 'react'
import people from './SliderData'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import {FaQuoteRight} from 'react-icons/fa'

const Slider = () => {
    let [sliderData,setSliderData]=useState(people);
    let [index,setIndex]=useState(0);
    let [slideIndex,setSlideIndex]=useState(index)

    let increment=()=>
    {
        setIndex(index+1)
    }
    let decrement=()=>
    {
        setIndex(index-1)
    }
    let adjustIndex=(index)=>
    {
        if(index>sliderData.length-1)
        {
            setIndex(0)
            return
        }
        if(index<0)
        {
            setIndex(sliderData.length-1)
            return
        }
        setIndex(index)
    }
    useEffect(()=>
    {
        let returned=setTimeout(()=>
        {
            adjustIndex(index+1)
        },5000)
        return ()=>clearInterval(returned)
    },[index])


  return (
    <section className="slider">
        <section className="slides">
            {sliderData.map((items,idx)=>
            {
                let {id,image,name,title,quote}=items;
                let slideType="next-slide";
                if(index===idx)
                {
                    slideType="curr-slide"
                }
                if(idx === index - 1 ||
            (index === 0 && idx === people.length - 1))
                {
                    slideType="prev-slide"
                }
                return <article className={slideType}>
                    <img src={image} alt="" />
                    <h2>{name}</h2>
                    <h3>{title}</h3>
                    <p>{quote}</p>
                </article>
            })}
        </section>
        <div className="btn-sec">
            <button onClick={()=>adjustIndex(index-1)}><IoIosArrowBack/></button>
            <button onClick={()=>adjustIndex(index+1)}><IoIosArrowForward/></button>
        </div>
        <FaQuoteRight className='quote'/>
    </section>
  )
}

export default Slider
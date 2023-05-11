import React from 'react'
import {useState,useEffect} from 'react'
import Loading from './Loading';
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'


const Tabs = () => {
    let url="https://course-api.com/react-tabs-project";
    let [loading,setLoading]=useState(true);
    let [tabData,setTabData]=useState([])
    let [index,setIndex]=useState(0)   

    let fetchTabs=async (url)=>
    {
        let res=await fetch(url);
        let response=await res.json();
        setTabData(response);
        setLoading(false)
    }

    useEffect(()=>
    {
        try
        {
            console.log("KIng")
            fetchTabs(url)
        }
        catch(error)
        {
            console.log(error)
        }
    },[])


   if(loading)
   {
      return <Loading/>
   } 

   let {id,order,title,duties,company,dates}=tabData[index]
  return (
    <section className='tabs'>
        <aside className="tab-control">
            {tabData.map((items,idx)=>
            {
                return <button onClick={()=>setIndex(idx)} style={{color:index===idx?"#14b8a6":""}} >{items.company}</button>
            })}
        </aside>
        <article className="tab-info">
            <h2>{title}</h2>
            <button>{company}</button>
            <p>{dates}</p>
            <div className="duty-info">
                {duties.map((items)=>
                {
                    return <aside className='sub-info'>
                        <MdOutlineKeyboardDoubleArrowRight className='arrow-btn'/> 
                        <p>{items}</p>
                    </aside>
                })}
            </div>
        </article>
    </section>
  )
}

export default Tabs
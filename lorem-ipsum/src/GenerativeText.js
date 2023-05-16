import React, { useEffect, useState } from 'react'
import text from './loremData';
import TextGraphs from './TextGraphs';
import Alert from './Alert';

const GenerativeText = () => {
    let [noOfParagraphs,setNoOfParagraphs]=useState(1);
    let [input,setInput]=useState(0)
    let [printText,setPrintText]=useState(false)
    let curatedText=text.slice(0,noOfParagraphs);
    let [alert,setAlert]=useState({alertMsg:"",alertColor:"green",shouldAlert:false,valid:false})


    useEffect(()=>
    {
        let returned=setTimeout(()=>
        {
            setAlert({alertMsg:"",alertColor:"",shouldAlert:false,valid:false})
        },1300)
        return ()=>clearTimeout(returned)
    },[alert.shouldAlert])

    let handleClick=()=>
    {
        if(input<=0)
        {
            setPrintText(false)
            setAlert({alertMsg:"Invalid Input",alertColor:"red",shouldAlert:true,valid:false})
            return
        }
        if(input>=0 && input<=8)
        {
            setNoOfParagraphs(input)
            setPrintText(true)
            setAlert({alertMsg:"Sentences Generated",alertColor:"green",shouldAlert:true,valid:true})
            return
        }
        if(input>8)
        {
            setNoOfParagraphs(8)
            setPrintText(true)
            setAlert({alertMsg:"8 Sentences Generated",alertColor:"green",shouldAlert:true,valid:false})
            return
        }
        else
        {
            setAlert({alertMsg:"Invalid Input",alertColor:"red",shouldAlert:true,valid:false})
            return
        }
    }
  return (
    <section>
        <div className="input-section">
            <span>Paragaphs: </span><input value={input} min="1" onChange={(e)=>setInput(e.target.value)} type="text" />
            <button onClick={handleClick}>Generate</button>
        </div>
        {printText?<TextGraphs curatedText={curatedText}/>:""}
        {alert.shouldAlert?<Alert alertMsg={alert.alertMsg} alertColor={alert.alertColor} number={input} valid={alert.valid}/>:""}
    </section>
  )
}

export default GenerativeText
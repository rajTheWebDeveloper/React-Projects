import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import Values from 'values.js'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ColorCardboard = () => {
    let [input,setInput]=useState("#389384");
    let [colorPicker,setColorPicker]=useState("")
    let [shade,setShade]=useState("");
    let [buttonBackColor,setButtonBackColor]=useState("")
    let colors=new Values(shade || '#389384')

    let handleClick=()=>
    {
        if(colorPicker!=="")    
        {
            setShade(colorPicker)
            setButtonBackColor(colorPicker)
            setColorPicker("")
        }
        else
        {
            setShade(input)
            setButtonBackColor("")
        }
    }
    const notify = (items) => toast(`copied #${items.hex.toUpperCase()} to clipboard`);
    const copyClick=(items)=>
    {
        navigator.clipboard.writeText('#'+items.hex.toUpperCase())
        notify(items)
    }
  return (
    <main>
        <article className="input-section">
            <h2>Color Generator</h2>
            <div className="cc">
                <input type="color" value={colorPicker} onChange={(e)=>setColorPicker(e.target.value)}/>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>   
                <button onClick={handleClick} style={{backgroundColor:(colorPicker || buttonBackColor) || input}}>Submit</button>
            </div>
        </article>
        <article className="color-section">
           {colors.all(10).map((items,idx)=>
           {
            let textColor="black";
            if(idx>10)
            {
                textColor="white";
            }
            return <aside key={idx} className='color-boxes' onClick={()=>copyClick(items)} style={{backgroundColor:'#'+items.hex,color:textColor}}>
                <p>{items.weight}%</p>
                <p>#{items.hex}</p>
            </aside>
           })}
           <ToastContainer/>
        </article>
    </main>
  )
}

export default ColorCardboard
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GroceryList = () => {
    let [input,setInput]=useState("");
    let [products,setProducts]=useState(JSON.parse(localStorage.getItem("local-products")) || []);
    let [editItem,setEditItem]=useState({})
    let [editId,setEditId]=useState("");
    let [isEditActive,setIsEditActive]=useState(false)
    const notifyAdd = () => toast(`Item Added To The List`);
    const notifyDelete = () => toast(`Item Deleted from The List`);
    const notifyEdit = () => toast(`Item Edited`);
    const provideValue=()=>toast("Please Provide Value")
    localStorage.setItem("local-products",JSON.stringify(products))

    useEffect(()=>
    {
        localStorage.setItem("local-products",JSON.stringify(products))
    },[products])

    let handleClick=()=>
    {
        if(input==="")
        {
            provideValue()
            return;
        }
        if(isEditActive)
        {
            let updated=products.map((items)=>
            {
                if(items.id===editId)
                {
                    console.log(editItem.product)
                    return {...items,product:input}
                }
                else
                {
                    return items;
                }
            })
            setProducts(updated)
            setIsEditActive(false)
            setInput("")
            notifyEdit()
            return
        }
        else
        {
            setProducts((prev)=>
            {
                return [...prev,{id:products.length===0?0:products.length,product:input,checked:false}]
            })
            setInput("");
            notifyAdd()
            return
        }
    }
    let handleDelete=(idx)=>
    {
        let filtered=products.filter((items)=>
        {
            return items.id!==idx
        })
        setProducts(filtered)
        notifyDelete()
    }
    let handleCheckbox=(idx)=>
    {
        let updated=products.map((items)=>
        {
            if(items.id===idx)
            {
                return {...items,checked:!items.checked}
            }
            else
            {
                return items
            }
        })
        setProducts(updated)
    }
    let handleEdit=(idx)=>
    {
        let specific=products.find((items)=>
        {
            return items.id===idx
        })
        setEditId(specific.id)
        setEditItem(specific)
        setIsEditActive(true)
        setInput(specific.product)
    }
  return (
    <section>
        <div className="input-section">
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={handleClick}>{isEditActive?"Edit":"Add Item"}</button>
        </div>
        <div className="products-section">
            {products.map((items)=>
            {
                return <aside key={items.id}>
                    <div className="content-section">
                        <input type="checkbox" checked={items.checked} onChange={()=>handleCheckbox(items.id)}/>
                        <p style={{textDecoration:items.checked?"line-through":null}}>{items.product}</p>
                    </div>
                    <div className="btn-section">
                        <button onClick={()=>handleEdit(items.id)}>Edit</button>
                        <button onClick={()=>handleDelete(items.id)}>Delete</button>
                    </div>
                </aside>
            })}
        </div>
        <ToastContainer/>
    </section>
  )
}

export default GroceryList
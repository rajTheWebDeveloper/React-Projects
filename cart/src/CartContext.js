import {React, createContext, useEffect, useReducer} from 'react'
import EcomProducts from './CartData';
import cartReducer from './cartReducer';

let CartContext=createContext("");
let CartProvider=({children})=>
{
    let initialState={products:[...EcomProducts],total:0,cartCount:0};
    let [state,dispatch]=useReducer(cartReducer,initialState);

    let removeItems=(idx)=>
    {
        dispatch({type:"REMOVE_ITEMS",payload:idx});
    }

    let increase=(idx)=>
    {
        dispatch({type:"INCREASE",payload:idx})
    }

    let decrease=(idx)=>
    {
        dispatch({type:"DECREASE",payload:idx})
    }
    useEffect(()=>
    {
        let total=state.products.map((items)=>
        {
            return Math.floor(items.price*items.amount);
        }).reduce((agg,temp)=>
        {
            return agg+temp
        },0)

        let cartCount=state.products.map((items)=>
        {
            return items.amount
        }).reduce((agg,temp)=>
        {
            return agg+temp
        },0)
        dispatch({type:"LOAD_TOTAL_AMOUNT",payload:{total,cartCount}})
    },[state.products])

    return <CartContext.Provider value={{...state,removeItems,increase,decrease}}>{children}</CartContext.Provider>
}

export {CartContext,CartProvider}
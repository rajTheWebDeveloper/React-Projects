import React from 'react'
import EcomProducts from './CartData';

const cartReducer = (state,action) => {
  
    let {products}=state
    let tempProducts=[...products]
    if(action.type==="REMOVE_ITEMS")
    {
      let filteredItems=tempProducts.filter((items)=>
      {
        return items.id!==action.payload;
      })
      return {...state,products:filteredItems};
    }
    if(action.type==="INCREASE")
    {
      let updated=tempProducts.map((items)=>
      {
        if(items.id===action.payload)
        {
          return {...items,amount:items.amount+1}
        }
        else
        {
          return items;
        }
      })
      return {...state,products:updated}
    }
    if(action.type==="DECREASE")
    {
      let updated=tempProducts.map((items)=>
      {
        if(items.id===action.payload)
        {
          return {...items,amount:items.amount-1}
        }
        else
        {
          return items
        }
      }).filter((items)=>
      {
        return items.amount>0
      })
      return {...state,products:updated}
    }
    if(action.type==='LOAD_TOTAL_AMOUNT')
    {
      let {total,cartCount}=action.payload
      return {...state,total:total,cartCount:cartCount}
    }
  return state;
}

export default cartReducer
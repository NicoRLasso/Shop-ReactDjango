import axios from 'axios'
import { CARD_ADD_ITEM } from '../constants/cardConstance'

export const addToCart = (id,qty)=> async (dispatch,getState)=>{
    const {data} =axios.get(`/products/${id}`)
    dispatch({
        type:CARD_ADD_ITEM,
        payload:{
            product:data._id,
            name:data.name,
            image:data.image,
            price:data.price,
            contInStock:data.contInStock,
            qty
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
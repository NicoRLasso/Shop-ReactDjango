import { 
    CARD_ADD_ITEM,
    CARD_REMOVE_ITEM
} from '../constants/cardConstance'

export const cardReducer =(state={cartItems:[]},action)=>{
    switch (action.type) {
        case CARD_ADD_ITEM:
            const item = action.payload
            const existItem =state.cartItems.find(x=>x.products === item.product)
            if (existItem) {
                return{
                    ...state,
                    cartItems:state.cartItems.map(
                        x=>( x.product === existItem ? item : x)
                    )
                };
            }
            else{
                return {
                    ...state,
                    cartItems:[...state.cartItems,item]
                };
            };
        default:
            return state;
    }
}
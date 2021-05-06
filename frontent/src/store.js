import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers,productDetailsReducer} from './reducers/productReducers'
import { cardReducer } from './reducers/cardReducer'

const reducer = combineReducers({
    productList:productListReducers,
    productDetails:productDetailsReducer,
    cart:cardReducer,
});

const cartItemFromSotrage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')) : []



const initialState = {
    cart:{
        cartItems:cartItemFromSotrage
    }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;
import { ALL_PRODUCT, CART, CART_QUANTITY_UPDATE, CATEGORY, DELETE_CART, FAST_AUTH, PROFILE_INFO, SKIP_ALL_PRODUCT, UPDATE_PROFILE_MODAL } from "./ActionType"


const initialState = {
    authenticated : false,
    userInfo : null,
    profileInfo : null,
    updateModal : false,
    categoryArray : [],
    allProducts : [],
    cartArray : []
}


const Reducer = (state = initialState, action) => {

    if(action.type === FAST_AUTH){
        return{
            ...state,
            authenticated : action.value,
            userInfo : action.userInfo
        }
    }

    if (action.type === UPDATE_PROFILE_MODAL) {
        return {
            ...state,
            updateModal : action.value
        }
    }
    if (action.type === PROFILE_INFO) {
        return {
            ...state,
            profileInfo : action.value
        }
    }

    if (action.type === CATEGORY) {
        return {
            ...state,
            categoryArray : [...action.value]
        }
    }

    if (action.type === ALL_PRODUCT) {
        return {
            ...state,
            allProducts : [...action.value]
        }
    }

    if (action.type === SKIP_ALL_PRODUCT) {
        let allProducts = [...state.allProducts, ...action.value]
        return {
            ...state,
            allProducts
        }
    }

    if (action.type === CART) {
        return {
            ...state,
            cartArray : [...action.value]
        }
    }

    if (action.type === CART_QUANTITY_UPDATE) {
        let cartArray = [...state.cartArray]
        cartArray[action.index].quantity = action.value;
        cartArray[action.index].price = cartArray[action.index].product.price * action.value;
        
        return {
            ...state,
            cartArray
        }
    }

    if (action.type === DELETE_CART) {

        let cartArray = [...state.cartArray]
        cartArray.splice(action.value, 1)
        return {
            ...state,
            cartArray
        }
    }

    return state

}

export default Reducer
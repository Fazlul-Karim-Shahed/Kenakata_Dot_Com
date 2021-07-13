import { ALL_PRODUCT, CATEGORY, FAST_AUTH, PROFILE_INFO, UPDATE_PROFILE_MODAL } from "./ActionType"


const initialState = {
    authenticated : false,
    userInfo : null,
    profileInfo : null,
    updateModal : false,
    categoryArray : [],
    allProducts : []
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

    return state

}

export default Reducer
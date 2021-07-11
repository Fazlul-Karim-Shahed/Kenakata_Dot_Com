import { FAST_AUTH, PROFILE_INFO, UPDATE_PROFILE_MODAL } from "./ActionType"


const initialState = {
    authenticated : false,
    userInfo : null,
    profileInfo : null,
    updateModal : false
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

    return state

}

export default Reducer
import { FAST_AUTH } from "./ActionType"


const initialState = {
    authenticated : false,
    userInfo : null,
    profileInfo : null,
}


const Reducer = (state = initialState, action) => {

    if(action.type === FAST_AUTH){
        return{
            ...state,
            authenticated : action.value,
            userInfo : action.userInfo
        }
    }

    return state

}

export default Reducer
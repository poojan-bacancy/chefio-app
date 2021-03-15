import { LOGOUT, AUTHENTICATE ,SET_DID_TRY_AL } from "../actions/authActions";

//initial state of auth reducer
const initialState = {
    token : null,
    userId : null,
    email : null,
    passwordResetCode : null,
    didTryAutoLogin : false
}

export default(state=initialState,action) => {
    switch(action.type){
        case AUTHENTICATE :
            return { 
                ...state , 
                token : action.token ,
                userId : action.userId, 
                didTryAutoLogin : true
            };
        case SET_DID_TRY_AL :
            return{
                ...state,
                didTryAutoLogin : true
            }
        case LOGOUT :
            return initialState
        default : 
            return state;
    }
}
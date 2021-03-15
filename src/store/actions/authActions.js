// types
export const AUTHENTICATE = 'AUTHENTICATE'

export const LOGOUT = 'LOGOUT'
export const SEND_PASSWORD_RESET_CODE = 'SEND_PASSWORD_RESET_CODE'
export const VERIFY_PASSWORD_RESET_CODE = 'SEND_PASSWORD_RESET_CODE'
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL'

import  AsyncStorage  from "@react-native-community/async-storage";


export const authenticate = (token,userId) => {
    return dispatch => {
        dispatch({ type : AUTHENTICATE , token : token , userId : userId });
    }
}

export const signup = ( email , password ) => {
    return async dispatch => {
        const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDX6rmE8-IgD4DqPBQ9O2ZxSaSShpDWKKg',
        {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email : email,
                password : password,
                returnSecureToken : true
            })
        });

        if(!response.ok) { 
            const errorResData = await response.json();
            console.log(errorResData)
            let message= 'Something Went Wrong!!';
            const errorId = errorResData.error.message;
            if(errorId === 'EMAIL_EXISTS'){
                message = 'Email does exist.';
            }
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);

        const idToken = resData.idToken;
        const localId = resData.localId
        dispatch(authenticate(idToken,localId));
        saveDataToStorage(idToken,localId)
    }
}

export const signin = ( email , password ) => {
    return async dispatch => {
        const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDX6rmE8-IgD4DqPBQ9O2ZxSaSShpDWKKg',
        {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email : email,
                password : password,
                returnSecureToken : true
            })
        });

        if(!response.ok) { 
            const errorResData = await response.json();
            console.log(errorResData)
            let message= 'Something Went Wrong!!';
            const errorId = errorResData.error.message;
            if(errorId === 'EMAIL_EXISTS'){
                message = 'Email does exist.';
            }
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);

        const idToken = resData.idToken;
        const localId = resData.localId

        dispatch(authenticate(idToken,localId));
        saveDataToStorage(idToken,localId)
    }
}

// export const sendPasswordResetEmail = (email) => {
//     return async (dispatch,getState) => {
        
//         const response = await fetch(
//         'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDX6rmE8-IgD4DqPBQ9O2ZxSaSShpDWKKg',{
//             method : 'POST',
//             headers : {
//                 'Content-Type' : 'application/json'
//             },
//             body : JSON.stringify({
//                 requestType : "PASSWORD_RESET",
//                 email : email
//             })
//         });

//         if(!response.ok) { 
//             const errorResData = await response.json();
//             console.log(errorResData)
//             let message= 'Something Went Wrong!!';
//             const errorId = errorResData.error.message;
//             if(errorId === 'EMAIL_EXISTS'){
//                 message = 'Email does exist.';
//             }
//             throw new Error(message);
//         }

//         const resData = await response.json();
//         console.log(resData);

//     }
// }

const saveDataToStorage = (token,userId) => {
    AsyncStorage.setItem('userData',JSON.stringify({
        token : token ,
        userId : userId
    }))
}

export const setDidTryAl = () => {
    return { type : SET_DID_TRY_AL }
}
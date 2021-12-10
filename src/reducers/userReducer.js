import {
    LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    SIGNUP,
    SIGNUP_ERROR 
} from "../utils/constTypes"

const initialState = {
    isAuth: false,
    loading: false,
    loginError: '',
    signupError: ''
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case LOGIN: {
            console.log(action.payload)
            return {
                ...state,
                loginError: '',
                isAuth: true
            }
        }

        case LOGIN_ERROR: {
            console.log(action.payload)
            return {
                ...state,
                loginError: action.payload.data.message
            }
        }

        case SIGNUP: {
            console.log(action.payload)
            return {
                ...state,
                signupError: '',
                isAuth: true
            }
        }

        case SIGNUP_ERROR: {
            console.log(action.payload)
            return {
                ...state,
                signupError: action.payload.data.message
            }
        }

        case LOGOUT: {
            return {
                ...state,
                isAuth: false
            }
        }

        default: {
            return state
        }
    }

}
const initialState = {
    loggedIn: false,
    email: "",
    userId: null,
    firstName: "",
    lastName: "",
    cart: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type) { 
        case "LOGIN":
            return { ...state, 
                loggedIn: true,
                email: action.payload.email,
                userId: action.payload.id,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name
            }
        case "ADD_SANDWICH_TO_CART":
            return {...state, 
                cart: [...state.cart, action.payload]
            }
        case "CLEAR_CART":
            return {...state,
                cart: []
            }
        default:
            return state
    }

}

export default userReducer
const initialState = {
    loggedIn: false,
    email: "",
    userId: null,
    firstName: "",
    lastName: ""
}

const userReducer = (state = initialState, action) => {
    switch(action.type) { 
        case "LOGIN":
            return { ...state, 
                loggedIn: true,
                email: action.payload.user.email,
                userId: action.payload.user.id,
                firstName: action.payload.user.first_name,
                lastName: action.payload.user.last_name
            }
        default:
            return state
    }

}

export default menuReducer
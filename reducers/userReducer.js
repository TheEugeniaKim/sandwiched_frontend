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
                email: action.payload.email,
                userId: action.payload.id,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name
            }
        default:
            return state
    }

}

export default userReducer
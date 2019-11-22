const initialState = {
    text: '',
}


const menuReducer = (state = initialState, action) => {
    switch(action.type) { 
        case "ADD_TEXT":
            return { ...state, text: action.payload }
        default:
            return state
    }

}

export default menuReducer
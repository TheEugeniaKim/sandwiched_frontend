const initialState = {
    sandwiches: [],
    ingredients: []
}

const menuReducer = (state = initialState, action) => {

    switch(action.type) { 
        case "GET_SANDWICHES":
            return {...state, sandwiches: action.payload}
        case "GET_INGREDIENTS":
            return {...state, ingredients: action.payload}
        default:
            return state
    }

}

export default menuReducer
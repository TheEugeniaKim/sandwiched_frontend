const initialState = {
    sandwiches: [],
    ingredients: [],
    selectedSandwichCategory: "",
    selectedSandwich: ""
}

const menuReducer = (state = initialState, action) => {

    switch(action.type) { 
        case "GET_SANDWICHES":
            return {...state, sandwiches: action.payload}
        case "GET_INGREDIENTS":
            return {...state, ingredients: action.payload}
        case "SELECT_SANDWICH_CATEGORY":
            return {...state, selectedSandwichCategory: action.payload}
        case "SELECT_SANDWICH":
            return {...state, selectedSandwich: action.payload}
        default:
            return state
    }

}

export default menuReducer
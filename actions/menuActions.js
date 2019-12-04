export function getSandwiches(sadnwiches_array){
    return {type: "GET_SANDWICHES", payload: sadnwiches_array}
}

export function getIngredients(ingredients_array){
    return {type: "GET_INGREDIENTS", payload: ingredients_array}
}

export function selectedSandwichCategory(sandwichCategory){
    return {type: "SELECT_SANDWICH_CATEGORY", payload: sandwichCategory}
}

export function selectedSandwich(sandwich){
    return {type: "SELECT_SANDWICH", payload: sandwich}
}

export function selectedOrder(orderId){
    return {type: "SELECT_ORDER", payload: orderId}
}
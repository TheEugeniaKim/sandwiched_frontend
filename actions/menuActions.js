export function getSandwiches(sadnwiches_array){
    return {type: "GET_SANDWICHES", payload: sadnwiches_array}
}

export function getIngredients(ingredients_array){
    return {type: "GET_INGREDIENTS", payload: ingredients_array}
}

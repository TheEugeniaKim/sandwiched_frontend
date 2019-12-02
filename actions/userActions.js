export function login(user){
    return {type: "LOGIN", payload: user}
}

export function addSandwichToCart(sandwich){
    return {type: "ADD_SANDWICH_TO_CART", payload: sandwich}
}

export function clearCart(){
    return {type: "CLEAR_CART"}
}
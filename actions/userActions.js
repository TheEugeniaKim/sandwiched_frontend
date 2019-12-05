export function login(user){
    return {type: "LOGIN", payload: user}
}

export function addSandwichToCart(sandwich){
    return {type: "ADD_SANDWICH_TO_CART", payload: sandwich}
}

export function removeSanwichFromCart(newCart){
    return {type: "REMOVE_SANDWICH_FROM_CART", payload: newCart}
}

export function clearCart(){
    return {type: "CLEAR_CART"}
}

export function addSandwichToFavorites(favoriteSandwich){
    return {type: "ADD_SANDWICH_TO_FAVORITES", payload: favoriteSandwich}
}



export function logout(){
    return {type: "LOGOUT"}
}

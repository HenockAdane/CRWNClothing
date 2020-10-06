export const cartToggleAction = () =>({
    type: "TOGGLECART"
})

export const addItem = (item) => ({
    type: "ADDITEM",
    item
})


const IS = {
    hidden: true,
    cartItems: []
}


const cartReducer = (state = IS, action) => {
    switch (action.type){
        case "TOGGLECART":
            return {...state, hidden: !state.hidden};
        case "ADDITEM":
            return {...state, cartItems: [...state.cartItems, action.item]}
        default: return state
    }
}

export default cartReducer
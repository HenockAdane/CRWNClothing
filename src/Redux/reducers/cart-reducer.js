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

const addingFunction = (cartItems, cartItemToAdd) => {
    // console.log(this.props.items)
        let exists = cartItems.find(a => a.title === cartItemToAdd.title)
console.log(exists)
        if (exists){
            console.log(1)
            return cartItems.map(a => a.title === cartItemToAdd.title ? {...a, quantity: a.quantity + 1} : cartItems )

        }

        else{
            console.log(2)
            return [...cartItems, {...cartItemToAdd, quantity:1}]        
        }

}

    // return this.props.addItem({image: this.props.img,
    //     title:this.props.title,
    //     price:this.props.price,
    //     quantity: 0})


const cartReducer = (state = IS, action) => {
    switch (action.type){
        case "TOGGLECART":
            return {...state, hidden: !state.hidden};
        case "ADDITEM":
            return {...state, cartItems: addingFunction(state.cartItems, action.item)}
        default: return state
    }
}

export default cartReducer
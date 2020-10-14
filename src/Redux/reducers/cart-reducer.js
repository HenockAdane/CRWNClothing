export const cartToggleAction = () =>({
    type: "TOGGLECART"
})

export const addItem = (item) => ({
    type: "ADDITEM",
    item
})

export const reduceItem = (item) => ({
    type: "REDUCEITEM",
    item
})

export const removeItem = (item) => ({
    type: "REMOVEITEM",
    item
})



const IS = {
    hidden: true,
    cartItems: []
}

const addingFunction = (cartItems, cartItemToAdd) => {
    // console.log(this.props.items)
        let exists = cartItems.find(a => a.title === cartItemToAdd.title)
// console.log(exists)
        if (exists){
            console.log(1)
            return cartItems.map(a => a.title === cartItemToAdd.title ? {...a, quantity: a.quantity + 1} : a )

        }
        else{
            console.log(2)
            return [...cartItems, {...cartItemToAdd, quantity:1}]        
        }

}

const reduceFunction = (cartItems, cartItemToRemove) => {
    let itemObject = cartItems.find(a => a.title === cartItemToRemove.title);

    if (itemObject){
        let quantity = itemObject.quantity;
        if (quantity === 1){
            return cartItems.filter(a => a !== itemObject)
        }

        else{
            // return [...cartItems.filter(a => a !== itemObject), {...itemObject, quantity: itemObject.quantity - 1}]
            // return [...cartItems.splice(cartItems.indexOf(itemObject), 1, {...itemObject, quantity: itemObject.quantity - 1})]

            return cartItems.map(a => a === itemObject ? {...itemObject, quantity: itemObject.quantity - 1} : a)
        }
    }


    else{
        return cartItems
    }
}

const removeFunction = (cartItems, cartItemToDeleteTitle) => {
    return cartItems.filter(a => a.title !== cartItemToDeleteTitle)
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
        case "REDUCEITEM":
            return {...state, cartItems: reduceFunction(state.cartItems, action.item)}
        case "REMOVEITEM":
            return {...state, cartItems: removeFunction(state.cartItems, action.item)}
        default: return state
    }
}

export default cartReducer
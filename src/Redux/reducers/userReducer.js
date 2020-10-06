export const setCurrentUser = user => ({
    type: "SET_CURRENT_USER",
    currentUser: user
})



const IS = {
    currentUser: null
}

const userReducer = (state = IS, action) => {
    switch(action.type){
        case "SET_CURRENT_USER":    
            return {...state, currentUser: action.currentUser}
        default: return state
    }
}

export default userReducer
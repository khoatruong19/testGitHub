const initialState = {
    users : [
        {id: 1, name : "Eric"},
        {id: 2, name : "Hoi dan IT"},
        {id: 3, name : "Batman"}
    ]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "DELETE_USER":
            let users = state.users
            users = users.filter(user => user.id !== action.payload.id)
            return {...state,users}
            break
        case "ADD_USER":
            let id = Math.floor(Math.random() * 100)
            let user = {id: id, name:`What ever ${id}`}
            return {...state,users: [...state.users,user]}
            break
        default:
            return state
    }
    return state
}

export default rootReducer
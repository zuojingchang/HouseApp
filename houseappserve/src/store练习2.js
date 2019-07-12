import { createStore,combineReducers } from 'redux'

function name (state='孙涛',action){
    switch(action.type){
        case 'name' : return '沙雕'
        default : return state
    }
}

function sex (state='男',action){
    switch(action.type){
        default : return state
    }
}

function age (state= 20,action){
    switch(action.type){
        default : return state + 1
    }
}

let reducers = combineReducers({
    name,
    age,
    sex
})
let store = createStore(reducers)

// console.log(store.getState())

export default store
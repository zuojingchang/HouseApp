import { createStore,combineReducers } from 'redux'

function historylist (state=[],action){
    switch(action.type){
        case 'addHouse' : 
        for(let i=0;i<state.length;i++){
            if(state[i].id === action.obj.id){
                state.splice(i,1)
                break;
            }
        }
            return [action.obj, ...state]

        default : return state
    }
}

let reducers = combineReducers({
    historylist,   
})
let store = createStore(reducers)

export default store
import { byvalue, decrement, increment } from "../actions/types"


const conterreducer = (state = {count: 0},action) => {
    
    switch(action.type){
        case increment:
            return {...state,count: state.count + 1}
            break;
        case decrement: 
            return {...state,count: state.count - 1}
            break;
        case byvalue:
            return {...state,count: state.count + action.value}
        default:
            return state
            break;
        
    }

    
}
export default conterreducer
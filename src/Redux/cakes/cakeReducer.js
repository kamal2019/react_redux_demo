import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    number_of_cakes : 10
}

const cakeReducer = (state= initialState,action) =>{
    switch(action.type){
        case BUY_CAKE :return {
            ...state,
            number_of_cakes:state.number_of_cakes - 1
        }
        default : return state
    }
}
export default cakeReducer
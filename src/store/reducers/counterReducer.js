import * as Types from '../ActionTypes'
const initState = {
    counter:100
};
export default (state = initState,action)=>{
    switch (action.type) {
        case Types.ADD: return {counter: state.counter + 1};
        case Types.SUB: return {counter: state.counter - 1};
        case Types.ADD_N: return {counter: state.counter + action.number};
        default: return state;
    }
}

import * as Types from '../ActionTypes'

const initState = {
    counter:1000
};
export default function (state = initState, action){
    switch (action.type) {
        case Types.S_ADD: return {counter: state.counter + 1};
        case Types.S_SUB: return {counter: state.counter - 1};
        default: return state;
    }
}


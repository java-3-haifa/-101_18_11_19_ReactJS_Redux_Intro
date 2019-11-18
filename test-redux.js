const redux = require('redux');

const initState = {
    counter:0
};

function reducer(state = initState, action){
    switch(action.type){
        case "INC": return {counter: state.counter + 1};
        case "DEC": return {counter: state.counter -1};
        case "ADD_N":return {counter: state.counter + action.num};
        default:return state;
    }
}


const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.subscribe(()=>{
    console.log("Subscriber2:",store.getState());
});
// console.log(store.getState());

store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"DEC"});
store.dispatch({type:"ADD_N",num:10});
// console.log(store.getState());

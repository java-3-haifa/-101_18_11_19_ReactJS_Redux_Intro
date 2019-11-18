import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import * as Types from './store/ActionTypes'
import {addCounter,subCounter,addNumberToCounter} from "./store/ActionCreator";
import SuperCounter from "./SuperCounter";

function App(props){
  // render() {
      console.log(props);
    return (
        <div className='wrapper'>
            <h2>Counter: {props.cnt}</h2>
            <hr/>
            <button onClick={props.onAdd}>Add</button>
            <button onClick={props.onSub}>Sub</button>
            <button onClick={()=>props.onAddN(10)}>AddTen</button>

            <hr/>
            <SuperCounter/>
        </div>
    );
  // }
}

function mapStateToProps(state){
    return {
        cnt: state.counterReducer.counter
    }
}

function mapDispatchToProps1(dispatch){
    return {
        onAdd: () => dispatch({type:Types.ADD}),
        onSub: () => dispatch({type:Types.SUB}),
        onAddN: number => dispatch({type:Types.ADD_N,number})
    }
}
function mapDispatchToProps(dispatch){
    return {
        onAdd: () => dispatch(addCounter()),
        onSub: () => dispatch(subCounter()),
        onAddN: number => dispatch(addNumberToCounter(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

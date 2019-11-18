import React from 'react';
import {connect} from 'react-redux'
import {addSuperNumber, subSuperNumber} from "./store/ActionCreator";

function SuperCounter(props) {
    return (
        <div>
            <h2>SuperCounter: {props.cnt}</h2>
            <hr/>
            <button onClick={props.onAdd}>Add</button>
            <button onClick={props.onSub}>Sub</button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        cnt: state.superCounterReducer.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(addSuperNumber()),
        onSub: () => dispatch(subSuperNumber())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SuperCounter);

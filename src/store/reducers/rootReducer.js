import {combineReducers} from "redux";
import CounterReducer from './counterReducer'
import SuperCounterReducer from "./superCounterReducer";

export default combineReducers({
    counterReducer:CounterReducer,
    superCounterReducer:SuperCounterReducer
});

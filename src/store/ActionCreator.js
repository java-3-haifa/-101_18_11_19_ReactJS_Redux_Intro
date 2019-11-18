import * as Types from './ActionTypes'

export function addCounter(){
    return {
        type: Types.ADD
    }
}

export function subCounter() {
    return {
        type: Types.SUB
    }
}

export function addNumberToCounter(number) {
    return {
        type:Types.ADD_N,
        number
    }
}

export function addSuperNumber() {
    return{
        type:Types.S_ADD
    }
}

export function subSuperNumber() {
    return {
        type:Types.S_SUB
    }
}

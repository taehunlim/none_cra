
import { INCREASE, DECREASE } from '../actions/types';

interface InitialState {
    number: number
}

enum ActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE'
}

type Action = {
    type: ActionKind
    number: number
}

export function countReducer(state: InitialState, action:Action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                number: state.number + 1
            };
        case DECREASE: 
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state;
    }
};
interface InitialState {
    number: number;
}
declare enum ActionKind {
    INCREASE = "INCREASE",
    DECREASE = "DECREASE"
}
declare type Action = {
    type: ActionKind;
    number: number;
};
export declare function countReducer(state: InitialState, action: Action): InitialState;
export {};

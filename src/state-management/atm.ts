export type AtmState = {username:string, balance: number};

export type AtmAction = AtmDepositAction | AtmDepositAction | AtmWithdrawAction | AtmClearAction;
export type AtmDepositAction = {type:"DEPOSIT", payload: number};
export type AtmWithdrawAction = {type:"WITHDRAW", payload: number};
export type AtmClearAction = {type:"CLEAR"}

export const atmInitialState: AtmState ={
    username: "McDefault",
    balance: 0
}


export function atmReducer(state:AtmState = atmInitialState, action: AtmAction):AtmState{
    const deepCopy: AtmState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "DEPOSIT":
            deepCopy.balance += action.payload;
            return deepCopy;
        case "WITHDRAW":
            deepCopy.balance -= action.payload;
            return deepCopy;
        case "CLEAR":
            deepCopy.balance = 0;
            return deepCopy;
        default:
            return deepCopy;
    }

}
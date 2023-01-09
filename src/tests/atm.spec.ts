import { AtmClearAction, AtmDepositAction, atmReducer, AtmState, AtmWithdrawAction } from "../state-management/atm"


test("Deposit to account", ()=>{
    const depositAction: AtmDepositAction = {type:"DEPOSIT", payload:100};
    const state:AtmState = {username:"Adam", balance:1100};
    const nextState = atmReducer(state, depositAction);
    expect(nextState.balance).toBe(1200);
    expect(Object.is(state,nextState)).toBeFalsy();
});

test("Withdraw from account", ()=>{
    const withdrawAction: AtmWithdrawAction = {type:"WITHDRAW", payload:400};
    const state:AtmState = {username:"Adam", balance:1100};
    const nextState = atmReducer(state, withdrawAction);
    expect(nextState.balance).toBe(700);
    expect(Object.is(state,nextState)).toBeFalsy();
});

test("Clear account", ()=>{
    const clearAction: AtmClearAction = {type:"CLEAR"};
    const state:AtmState = {username:"Adam", balance:1100};
    const nextState = atmReducer(state, clearAction);
    expect(nextState.balance).toBe(0);
    expect(Object.is(state,nextState)).toBeFalsy();
});
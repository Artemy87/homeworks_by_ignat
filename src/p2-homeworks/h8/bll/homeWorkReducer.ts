import {FilterType, UsersType} from "../HW8";

type ActionType = {type: FilterType, payload?: string | number}

export const homeWorkReducer = (state: UsersType, action: ActionType): UsersType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state]
            if(action.payload === 'up') {
                return [...newState.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)];
            } else if (action.payload === 'down') {
                return [...newState.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)]
            }
            return state;
        }
        case 'check': {
            let newState = [...state];
            return newState.filter(el => el.age >= 18)
        }
        default: return state
    }
}


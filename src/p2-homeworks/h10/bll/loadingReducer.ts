
export type InitialStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state:InitialStateType = initState, action: loadingReducerType): InitialStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {isLoading: action.loading}
        }

        default: return state;
    }
}

export type loadingReducerType = ReturnType<typeof loadingAC>;

export const loadingAC = (loading: boolean) => {
    return {
        type: 'LOADING',
        loading
    } as const;
} // fix any
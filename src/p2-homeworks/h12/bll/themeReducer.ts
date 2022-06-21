export type InitialStateType = {
    theme: string
}

const initialState = {
    theme: 'dark',
};

export const themeReducer = (state: InitialStateType = initialState, action: changeThemeType): InitialStateType => {
    switch (action.type) {
        case "DARK": {
            return {...state, theme: action.theme};
        }

        default: return state;
    }
};

type changeThemeType = ReturnType<typeof changeThemeAC>;
export const changeThemeAC = (theme: string) => {
    return {type: 'DARK', theme} as const;
};

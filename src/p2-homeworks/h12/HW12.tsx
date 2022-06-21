import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from './bll/themeReducer'
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch();

    const onChangeCallback = (value: string) => {
        dispatch(changeThemeAC(value));
    }

    return (
        <div className={`${s[theme]} ${s.hw12}`}>
            <h2 className={s[theme + '-text']}>
                Homeworks 12
            </h2>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
                // onChange={onChangeCallback}
            />
        </div>
    );
}

export default HW12;

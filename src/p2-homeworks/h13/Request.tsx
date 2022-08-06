import React, {ChangeEvent, useState} from 'react';
import {appAPI} from "./CheckboxAPI";
import s from './Request.module.css';

const Request = () => {
    let [value, setValue] = useState<boolean>(false);
    let [view, setView] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked);
    }

    const onClickHandler = () => {

        appAPI.updateStatus(value)
            .then((res) => {
                setValue(res.yourBody.success);
                setView(res.info);
            })
            .catch((error) => {
                console.log({...error});
                setView(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div className={s.box}>
            <div className={view.length === 50 ? s.base : s.error}>{view}</div>
            <input type='checkbox' checked={value} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>button</button>
        </div>
    );
};

export default Request;
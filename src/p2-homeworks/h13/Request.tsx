import React, {ChangeEvent, useState} from 'react';
import {appAPI} from "./CheckboxAPI";

const Request = () => {
    let [value, setValue] = useState<boolean>(false);
    let [view, setView] = useState<string>('');

    // useEffect(() => {
    //     requestsAPI.updateStatus(value)
    //         .then(res => {
    //             setValue(res.data.value)
    //         })
    //         .catch(err => {
    //             console.log('err111 ', err)
    //         })
    // }, [])

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
        <div>
            <div style={{color: 'greenyellow'}}>{view}</div>
            <button style={{padding: '10px', borderRadius: '10px'}} onClick={onClickHandler}>button</button>
            <input type='checkbox' checked={value} onChange={onChangeHandler}/>
        </div>
    );
};

export default Request;
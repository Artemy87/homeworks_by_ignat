import React, {FC} from 'react'
import {AffairType} from "./HW2";
import style from './Affair.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void // need to fix any
}

const Affair: FC<AffairPropsType> = (props) => {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    let colorPriority = props.affair.priority === 'low' ? `${style.priority} ${style.low}`
        : props.affair.priority === 'middle' ? `${style.priority} ${style.middle}`
        : `${style.priority} ${style.high}`
    console.log(colorPriority)
    return (
        <div className={style.container}>
            <div>{props.affair.name}</div>
            <div className={colorPriority}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

import React, {FC} from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void // need to fix any
}

const Affair: FC<AffairPropsType> = (props) => {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    let colorPriority = props.affair.priority === 'low' ? `${s.priority} ${s.low}`
        : props.affair.priority === 'middle' ? `${s.priority} ${s.middle}`
        : `${s.priority} ${s.high}`
    console.log(colorPriority)
    return (
        <div className={s.container}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={colorPriority}>{props.affair.priority}</div>
            <SuperButton className={s.deleteButtons} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair

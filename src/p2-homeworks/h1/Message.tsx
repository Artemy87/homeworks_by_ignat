import React from 'react'
import style from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>

            <img className={style.image} src={props.avatar} alt=""/>

            <div className={style.angle}/>

            <div className={style.content}>
                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}


export default Message

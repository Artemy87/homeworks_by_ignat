import React from 'react'
import style from './Message.module.css';

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageType) {
    return (
        <div className={style.message_widow}>
            <div className={style.image}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={style.info}>
                <div className={style.name}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}


export default Message

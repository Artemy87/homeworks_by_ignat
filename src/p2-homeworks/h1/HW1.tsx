import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import s from './HW1.module.css'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Sarah Connor',
    message: 'The unknown future rolls toward us. I face it for the first time with a sense of hope. Because if a machine, a Terminator... can learn the value of human life... maybe we can too.',
    time: '22:00',
}


function HW1() {
    return (
        <div>
            <div className={s.hw3}>
                <h3>Homeworks 1</h3>
                <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

                <hr/>
                для личного творчества, могу проверить
                <AlternativeMessage/></div>

        </div>
    );
}

export default HW1

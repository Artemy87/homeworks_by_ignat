import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Sarah Connor',
    message: 'The unknown future rolls toward us. I face it for the first time with a sense of hope. Because if a machine, a Terminator... can learn the value of human life... maybe we can too.',
    time: '22:00',
}


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>
        </div>
    );
}

export default HW1

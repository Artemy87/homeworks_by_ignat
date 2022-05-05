import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from './HW3.module.css'


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, { _id: v1(), name: name}]) // need to fix
    }

    return (
        <div>
            <div className={s.hw3}>{/*should work (должно работать)*/}
                <h3>Homeworks 3</h3>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}/>


                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeGreeting/>*/}</div>
        </div>
    )
}

export default HW3

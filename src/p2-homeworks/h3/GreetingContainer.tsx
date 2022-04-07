import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import s from './GreetingContainer.module.css'


type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов

    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError('')
        setName(e.currentTarget.value) // need to fix
    }

    const addUser = () => {
        if(name.trim() !== '') {
            addUserCallback(name);
            alert(`Hello ${name}!`) // need to fix
            setName('')
        } else {
            setError('name is require!')
        }
    }

    const onKeyPress = (e:KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if(e.key === 'Enter' && name.trim() !== '') {
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName('')
        } else {
            setError('name is require!')
        }

    }

    const totalUsers = users.length // need to fix

    return (
        <div className={s.container}><Greeting
            name={name}
            setNameCallback={setNameCallback}
            onKeyPress={onKeyPress}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        /></div>
    )
}

export default GreetingContainer

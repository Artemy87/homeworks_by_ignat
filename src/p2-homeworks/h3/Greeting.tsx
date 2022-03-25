import React, {ChangeEvent, KeyboardEvent, FC} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    onKeyPress: (e:KeyboardEvent<HTMLInputElement>) => void
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any

}

// презентационная компонента (для верстальщика)
const Greeting: FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        onKeyPress,
        addUser,
        error,
        totalUsers
    }
) => {

    // const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPress}
                className={error ? s.inputClass : ''}/>
            <button
                disabled={!!error}
                onClick={addUser}>add</button>
            <span className={s.count}>count users: {totalUsers}</span>
            <div className={s.error}>{error}</div>
        </div>
    )
}

export default Greeting

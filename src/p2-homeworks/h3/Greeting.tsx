import React, {ChangeEvent, KeyboardEvent, FC} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    onKeyPress: (e:KeyboardEvent<HTMLInputElement>) => void
    addUser: ()=>void // need to fix any
    error: string | null // need to fix any
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
            {/*<input*/}
            {/*    value={name}*/}
            {/*    onChange={setNameCallback}*/}
            {/*    onKeyPress={onKeyPress}*/}
            {/*    className={error ? s.inputClass : ''}/>*/}
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPress}
                className={s.inputClass}/>
            <SuperButton disabled={!!error} onClick={addUser}>
                add
            </SuperButton>
            <span className={s.count}>count users: {totalUsers}</span>
            { error && <div className={s.errorMessage}>{error}</div>}
        </div>
    )
}

export default Greeting

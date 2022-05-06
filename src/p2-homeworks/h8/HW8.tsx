import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW8.module.css';

export type FilterType = 'sort' | 'check';
export type UserType = { _id: number, name: string, age: number };
export type UsersType = UserType[];

const initialPeople: UsersType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UsersType>(initialPeople) // need to fix any
    const [filter, setFilter] = useState('');
    // need to fix any
    const finalPeople = people.map((p: UserType) => (
            <div key={p._id} className={styles.people}>
                <div>{p.name}</div>
                <div>{p.age}</div>
            </div>
        )
    )

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
        setFilter('up')
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
        setFilter('down')
    }
    const check18 = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'check'}))
        setFilter('check')
    }

    return (
        <div className={styles.hw8}>
            <h3>Homeworks 8</h3>

            <div className={styles.group}>
                {/*should work (должно работать)*/}
                <div className={styles.peopleList}>
                    {finalPeople}
                </div>
                <div>
                    <SuperButton
                        className={filter === 'up' ? styles.activeButton : ''}
                        onClick={sortUp}>sort up</SuperButton>
                    <SuperButton
                        className={filter === 'down' ? styles.activeButton : ''}
                        onClick={sortDown}>sort down</SuperButton>
                    <SuperButton
                        className={filter === 'check' ? styles.activeButtonCheck : ''}
                        onClick={check18}>check 18</SuperButton>
                </div>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
        </div>
    )
}

export default HW8


import React from 'react'
import Clock from './Clock'
import styles from './HW9.module.css'

function HW9() {
    return (
        <div className={styles.hw9}>
            <h3>Homeworks 9</h3>

            {/*should work (должно работать)*/}
            <div className={styles.clock}>
                <Clock/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
        </div>
    )
}

export default HW9

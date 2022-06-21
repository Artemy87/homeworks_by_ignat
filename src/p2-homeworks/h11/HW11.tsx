import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import styles from './HW11.module.css';

function HW11() {

    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState<number>(100);

    return (
        <div className={styles.hw11}>
            <h2>Homeworks 11</h2>
            <div className={styles.container}>

                <div className={styles.superRange}>
                    <span>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={setValue1}
                    />
                </div>

                <SuperDoubleRange
                    min={value1}
                    max={value2}
                    setValue1={setValue1}
                    setValue2={setValue2}
                />

            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
        </div>
    )
}

export default HW11

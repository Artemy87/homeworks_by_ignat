import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW10.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import Loader from "./preloader/Loader";

function HW10() {

    const dispatch = useDispatch();
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))

            console.log('loading...')
        }, 2000)
    };

    return (
        <div className={styles.hw10}>
            <h3>Homeworks 10</h3>

            {/*should work (должно работать)*/}
            <div className={styles.container}>
                {loading
                    ? (
                        <Loader />
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }

            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    )
}

export default HW10

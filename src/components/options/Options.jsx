import React from 'react'
import style from './Options.module.css'

const Options = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.alert}>
                <b className={style.text}>
                    This function is not available right now!
                </b>
            </div>
        </div>
    )
}

export default Options
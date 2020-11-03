import React, {useState} from  'react'
import style from './Login.module.css'

import {useForm} from 'react-hook-form'

const Login = () => {
    const [inputNameValue, setInputNameValue] = useState('')
    const [inputEmailValue, setInputEmailValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')

    return (
        <div className={style.wrapper}>
            <form>
                <input className={style.inputText} type="text" placeholder='Name' value={inputNameValue} onChange={e => setInputNameValue(e.target.value)}/>
                <br/>
                <input className={style.inputText} type="email" placeholder='Email' value={inputEmailValue} onChange={e => setInputEmailValue(e.target.value)}/>
                <br/>
                <input className={style.inputText} type="password" placeholder='Password' value={inputPasswordValue} onChange={e => setInputPasswordValue(e.target.value)}/>
                <br/>
                <button className={style.loginBtn}>Login</button>
            </form>
        </div>
    )
}

export default Login
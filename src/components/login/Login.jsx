import React, {useState} from  'react'
import style from './Login.module.css'

import {useForm} from 'react-hook-form'

const Login = () => {
    const [inputNameValue, setInputNameValue] = useState('')
    const [inputEmailValue, setInputEmailValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')

    const {register, handleSubmit} = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register} name="name" className={style.inputText} type="text" placeholder='Name' value={inputNameValue} onChange={e => setInputNameValue(e.target.value)}/>
                <br/>
                <input ref={register} name="email" className={style.inputText} type="email" placeholder='Email' value={inputEmailValue} onChange={e => setInputEmailValue(e.target.value)}/>
                <br/>
                <input ref={register} name="password" className={style.inputText} type="password" placeholder='Password' value={inputPasswordValue} onChange={e => setInputPasswordValue(e.target.value)}/>
                <br/>
                <button className={style.loginBtn}>Submit</button>
            </form>
        </div>
    )
}

export default Login
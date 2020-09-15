import React, {useState} from  'react'
import style from './Login.module.css'

const Login = () => {
    const [inputEmailValue, setInputEmailValue] = useState('')
    const [inputPasswordValue, setInputPasswordValue] = useState('')

    return (
        <div className={style.wrapper}>
            <div className={style.alert}>
                <b>
                    This function is not available right now!
                </b>
            </div>
            <input type="email" value={inputEmailValue} onChange={e => setInputEmailValue(e.target.value)}/>
            <br/>
            <input type="password" value={inputPasswordValue} onChange={e => setInputPasswordValue(e.target.value)}/>
            <br/>
            <button>Login</button>
        </div>
    )
}

export default Login
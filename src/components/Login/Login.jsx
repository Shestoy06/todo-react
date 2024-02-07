import { useState } from 'react'
import s from './Login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../../store/users/users.slice";
import {Navigate} from "react-router-dom";

const Login = () => {

    const [name, setName] = useState('Andrei')

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    if (users.length) return <Navigate to={'/tasks'}/>

    return (
        <div className={s.background}>
            <div className={s.container}>
                <div className={s.title}>LogIn</div>
                <form className={s.form}>
                    <input type="text" placeholder='Enter your name'
                           onChange={e => setName(e.target.value)}
                           value={name}/>
                </form>
                <button href="" onClick={() => dispatch(addUser(name))} className={s.button}>SignIn</button>
            </div>
        </div>
    )
}

export default Login
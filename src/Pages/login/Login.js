import { useState } from "react"
import "./login.css"
import {  projectAuth } from "../../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import {useNavigate} from 'react-router-dom'
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Login(params) {
    const [ email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const { dispatch } = useAuthContext()
    const history = useNavigate()


    const handleSubmit =(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(projectAuth, email,password)
            .then((userCredential)=>{
                console.log(userCredential.user);
                dispatch({type : 'LOGIN', payload: userCredential.user})
                history('/')

            })
    }
    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}/>
            </label>

            <label>
                <span>Password:</span>
                <input
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}/>
            </label>

            <button className ="btn">Login</button>
            
        </form>
    )
    
};

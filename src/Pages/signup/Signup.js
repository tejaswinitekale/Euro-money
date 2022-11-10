import { useState } from "react"
import "./signup.css"
import {  projectAuth } from "../../firebase/config"
import { createUserWithEmailAndPassword, updateCurrentUser } from "firebase/auth"
import {useNavigate} from 'react-router-dom'
import { useAuthContext } from "../../hooks/useAuthContext"

export default function Signup() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ displayName, setDisplayName] = useState('')
    const { dispatch } = useAuthContext()
    const history = useNavigate()

    // const auth = getAuth()
    const handlesubmit =(e) =>{
        e.preventDefault()
        createUserWithEmailAndPassword(projectAuth, email,password)
            .then((result) => {
                // console.log(result.user);
                result.user.displayName = displayName
                updateCurrentUser(projectAuth, result?.user)
                console.log(result?.user);
                dispatch({type : 'LOGIN', payload: result?.user})

                history('/')
            }).catch((err) => {
                console.log(err.message);
            }); 

    
    }
  return (
    <form onSubmit={handlesubmit} className='signup-form'>
        <h2>Sign up</h2>
        <label>
            <span>Name:</span>
            <input 
                type='name'
                 onChange={(e)=> setDisplayName(e.target.value)}
                 value={displayName}/>
        </label>

        <label>
            <span>Email:</span>
            <input 
                type='email'
                onChange={(e)=> setEmail(e.target.value)}
                value={email}/>
        </label>


        <label>
            <span>Password:</span>
            <input 
                type='password'
                onChange={(e)=> setPassword(e.target.value)}
                value={password}/>
        </label>
        <button className="btn">Signup</button>

    </form>
  )  
};

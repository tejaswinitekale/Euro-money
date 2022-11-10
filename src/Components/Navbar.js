import "./Navbar.css"
import {Link} from 'react-router-dom'
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "../hooks/useAuthContext"
import { signOut } from "firebase/auth"
export default function Navbar() {
    const { user, dispatch } = useAuthContext()
    console.log(user);



    const logout =(e) => {
        e.preventDefault()
        signOut(projectAuth).then(() => {
            dispatch({type: 'LOGOUT'})
        })        
        
    }
    return (
        <nav className="navbar">
            <ul>
                <li className="title">EuroMoney</li>
                {!user && (<>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                
                </>)}
                {user && (
                    <>
                        <li>Hello, {user.displayName}</li>
                        <li>
                            <button className='btn' onClick={logout}>Logout</button>
                        </li>
                </>)}
                
                </ul>
        </nav>
    )
    
};

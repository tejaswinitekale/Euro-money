import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Signup from './Pages/signup/Signup';
import { useAuthContext } from "./hooks/useAuthContext";
import { authReducer } from "./AuthContext";
import React from "react"; 

function App() {
  const { authIsReady, user} = useAuthContext()
  return (
    <div className="App">
      {authIsReady &&(
      <BrowserRouter>
      <Navbar> </Navbar>
      <Routes>
        <Route exact path="/" element= {user ? <Home/>:<Signup/>}></Route>
        <Route exact path="/login" element={user ? <Home/>:<Login/>}></Route>
        <Route exact path="/signup" element={user ? <Home/>:<Signup/>}></Route>
        {/* <Route path='*' element={<Login/>}></Route> */}
      </Routes>
      </BrowserRouter>
      )}

    </div>
  );
}


export default App;

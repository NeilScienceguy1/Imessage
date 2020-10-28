import React from 'react'
import { Button } from "@material-ui/core";
import './Login.css'
import { auth, provider } from "./firebase";
function Login() {
    const signIn = () => {
       auth.signInWithPopup(provider)
       .catch((error) => alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login_logo'>
                <img src="data:image/jpeg;base64,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" alt=""></img>
                <h1>iMessage</h1>
            </div>

            <Button onClick={signIn}>SignIn</Button>
        </div>
    )
}

export default Login


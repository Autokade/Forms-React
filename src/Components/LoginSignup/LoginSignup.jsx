import React, { useState } from "react";
import './LoginSignup.css'

import password_icon from '../Assets/Icons/Password.png'
import email_icon from '../Assets/Icons/Email.png'
import user_icon from '../Assets/Icons/person.png'

const LoginSignup = () => {
    const [action,setAction] = useState("Sign up");



    return (
        <div className="container">
            <div className="header">
                <div className="text">
                    {action}
                </div>
                <div className="underline"></div>
                <div className="inputs">
                    {action === "Log in"? <div></div>:<div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="User" />
                    </div>}
                    
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                {action === "Sign up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click here</span></div>}
               
                <div className="submit-container">
                    <div className={action === "Log in"?"submit gray" : "submit"} onClick={() => {setAction("Sign up")}}>Sign up</div>
                    <div className={action === "Sign up"? "submit gray": "submit"} onClick={() => {setAction("Log in")}}>Log in</div>
                </div>
            </div>


        </div>
    );
}

export default LoginSignup
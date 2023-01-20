import React, { useRef } from "react";
import {ReactComponent as AuxiLogo} from './Auxilogo.svg';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import {auth} from "./firebase_config.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import style from "./styleboxComponent.css";
import { PasswordTwoTone } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ErrorMessg, Login, NoErrorMessg } from './Action_def.js'

export default function Box(){
    const [email, setemail] = useState("null");
    const [password, setpassword] = useState("null");

    const flag = useSelector(state => state.flags.iserror_Messg);
    
    const dispatch= useDispatch(); 

   // console.log(email);
    //console.log(password);

    //sign in functionality 
    const signIn = e =>{

        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            console.log("sign in");//check

            const user = userCredential.user; //stores all the account info 
            const uid = user.uid; //relevant uid 
            console.log(uid);
            console.log(user);
            
            dispatch(NoErrorMessg()); 
            dispatch(Login(user));
            // ...
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(ErrorMessg()); 
            }); 
    }
    return(
        <div className="page">
            <div className="box">
                <div className = "left">
                    <div className = "logo">
                        <AuxiLogo/>
                    </div>
                    <div className = "title">
                        <p className="title-text">Auxi - Web Portal</p>
                    </div>
                    <div className="phone_Number">      
                        <div className="phone_icon">
                            <span className="material-icons" style= {{color: "white"}}>local_phone</span>
                        </div>
                        <div className="phone_text">
                            <p className = "text">111-128-128</p>
                        </div>
                    </div>
                    <div className="Email">      
                        <div className="email_icon">
                            <span className="material-icons-sharp" style= {{color: "white"}}>email</span>
                        </div>
                        <div className="email_text">
                            <p className = "text">onestop.isb@nu.edu.pk</p>
                        </div>
                    </div>
                </div>
                <div className = "right">
                    <div className="form_top">
                        <p className="form_title">Welcome Back!</p>
                        <p className="form_title_second">We're happy to see you. Please sign in to continue.</p>
                    </div>

                    <div className = "error-messg">
                        {flag ?
                            <p className="error-messg-text">Invalid Email or Password. Try Again!</p>
                        :
                            null
                        }
                        
                    </div>

                    <div className="Form_Main">
                        <div className="Field1">
                            <input onChange={event => setemail(event.target.value)} placeholder = "Email" type="text"/>
                            <br/>
                        </div>
                        
                        <div className="Field2">
                            <input onChange={event => setpassword(event.target.value)} placeholder = "Password" type="password" />
                            <br/>
                        </div>
                    </div>
                    <div className="form_forgot_pass">
                        <p className="forgot_password">Forgot Password?</p>
                    </div>
                    <button className="loginbutton" onClick={signIn}>Login</button>
                </div>
                
            </div>
        </div>
        
    );
}

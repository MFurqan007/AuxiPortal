import style from "./Navbar.css"
import {ReactComponent as AuxiLogoDanda} from './Auxi Logo Navbar.svg';
import {ReactComponent as AuxiLogoCircle} from './Auxi Logo Navbar 2.svg';
import {ReactComponent as LogoutLogo} from './Logout Logo.svg';
import { useDispatch } from "react-redux";
import { Logout } from "./Action_def";

export default function Navbar(){
    const dispatch= useDispatch(); 
   
    const signout = e=>{
        e.preventDefault();
        dispatch(Logout());        
    }
    return(
        <div className ="Nav-bar">
            <div className="Nav-bar-logo">
                <AuxiLogoCircle className="Nav-Logo-Circle"/>
                <AuxiLogoDanda  className="Nav-Logo-Danda"/>
            </div>
            <div className="Nav-bar-title">
                <h1 className = "title-text">Printing Site</h1>
            </div>
            <div className="Nav-bar-logout">
                <div className="Nav-bar-logout-outer" onClick={signout}>
                    <LogoutLogo className= "Logout_Logo"/>
                </div>
            </div>

        </div>
    )
}
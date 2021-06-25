import React, { useState,useEffect } from 'react'
import "./Popup.css"
import cross from './cross.png'
import google from './google.png'
function Popup(props) {
    
    const [Error,ChangeError] = useState("");
    const [name,changeName] = useState("");
    const [emailadd,changeEmailadd] = useState("");
    const [password,changePassword] = useState("");
    const showWelcome=()=>{
        props.setWelcome(true);
        props.setPopup(false);
    }

    const checkerror = ()=>{
        if(name.length <= 3){
           return  ChangeError("Name should be greater than 3")
        }

        if(emailadd.includes("@")==false){
            return ChangeError("Invalid email")
        }
        if(password.length<6 || password.length>15){
            return ChangeError("Password should be greater than 5 and less than 16")
        }
        return ChangeError("")
    }

    useEffect(()=>{
        checkerror();
    },[name,emailadd,password])

    let closeme = () => {
        props.setPopup(false);
    }
    return (
        <div className="loginwrapper">
            <section className="login">
                <div className="login__header">
                    <div className="container row middle">
                        <div onClick={closeme} className="closeme">
                            <img src={cross} alt="closeme" />
                        </div>
                        <h1 className="login__heading">Sign for a free business account</h1>
                    </div>
                </div>

                <div className="loginbody">
                    <div className="container">
                        <h1 className="hey">👋 Hey!</h1>

                        <input value={name} type="text" className="input login__name--input" placeholder="Your Name" onChange={(e)=>changeName(e.target.value)} />
                        <input  value={emailadd} type="text" className="input login__email--input" placeholder="Your Email" onChange={(e)=>changeEmailadd(e.target.value)} />
                        <input value={password} type="password" className="input login__password--input" placeholder="Your Password" onChange={(e)=>changePassword(e.target.value)} />
                        {Error?<p style={{color:"red",fontSize:"10px"}}>{Error}</p>:""}
                        <input type="button" disabled={Error?true:false} className="login__submit--btn"  value={"Create My Account"} onClick={showWelcome}/>
    
                        <p className="loginor">or</p>
                        
                        <div className="login__google">
                            <div className="img__wrapper logingoogleicon">
                                <img src={google} alt="google--icon" />
                            </div>
                            <p className="login__google--text">Continue with Google</p>
                        </div>
                        <p className="footer--login">Already have an account? <a href="/">Login</a></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Popup
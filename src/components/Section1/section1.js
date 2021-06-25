import React,{useState} from 'react'
import "./section1.css";
import Subtract from './Subtract.png'
import Popup from '../Popup/Popup';
import Welcome from '../Popup2/Popup2';
function Section1(){
 const[popup,setPopup]=useState(false);
 const[welcome,setWelcome]=useState(false);
  
  const changepopup=()=>{
     
    setPopup(!popup)
  }

  return(
      <div className="section1">
        <div className="header__part">
          <div>
        <img src={Subtract} className="Img"/>
           </div>
            <h1 className="icon__name">
                    being the 
                    <span className="icon__name--second">parent</span>
                </h1>
                </div>
           <div className="text__header">
               <p className="text__sub--head">INDIA’S FIRST PARENTING MARKETPLACE</p>
               <h1 className="text__heading">List your business online.<span className="text__heading--break">Start getting orders.</span></h1>
               <p className="text__info">Local empowers small businesses to build their e-Commerce listing, put it in front of
               <br/> millions of parents and drive more sales.</p>
                <div className="header__btn--wrapper">
                    <button className="btn herobtn" type="button" onClick={changepopup}>Create my free listing</button>
                    <a href="#" className="btn loginbtn" type="button">Login</a>
                </div>
           </div>
           {welcome?<Welcome setPopup={setPopup} setWelcome={setWelcome}/>:""}
            {popup?<Popup setPopup={setPopup} setWelcome={setWelcome} />:""}
      </div>
  )

}
export default Section1
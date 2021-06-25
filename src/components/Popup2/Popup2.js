import goback from './goback.png'
import './Popup2.css'
function Welcome (props){
     
    const openLogin=()=>{
        props.setPopup(true)
        props.setWelcome(false)
    }
    return (
        <div className="loginwrapper">
            <section className="welcome">
                <div className="login__header">
                    <div className="container row middle">
                        <button className="goback" onClick={openLogin}>
                            <img src={goback} alt="closeme" />
                        </button>
                        <h1 className="login__heading">You're all set.</h1>
                    </div>
                </div>


                <div className="loginbody">
                    <div className="container">
                        <h1 className="hey">✨ Welcome aboard!</h1>
                        <p className="welcome__info marginlarge">You’re all set to create business listings on Local now and grow your business faster.</p>
                        <p className="welcome__info">And while you’re here, know that we’re always standing by to help you. </p>
                        <button className="login__submit--btn">Let’s create my first listing </button>
                        <p className="footer--login startwithleft">Having a problem? <a href="/">Contact Us</a></p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Welcome;
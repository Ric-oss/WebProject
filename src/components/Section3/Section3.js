import rightarrow from './right-arrow.png';
import slider1 from './slider1.jpg';
import slider2 from './slider2.jpg';
import slider3 from './slider3.jpg';
import slider4 from './slider4.jpg';
import slider5 from './slider5.jpg';
import './Section3.css'
function Showcase(){
    return (
        <section className="showcase">
            <div className="container">
                <div className="slider__head row">
                    <h1 className="showcase__heading">If your busiess helps parents, you’ve to put it up on Local.</h1>
                    <a href="/" className="img__wrapper rightarrow">
                        <img src={rightarrow}/>
                    </a>
                </div>
                <div className="showcase__slider row">
                    <div className="slidercol">
                        <div className="img__wrapper">
                            <img src={slider1}/>
                        </div>
                        <p className="slider__text">Dance classes on Local</p>
                    </div>
                    <div className="slidercol">
                        <div className="img__wrapper">
                            <img src={slider2}/>
                        </div>
                        <p className="slider__text">Guitar classes on Local</p>
                    </div>
                    <div className="slidercol">
                        <div className="img__wrapper">
                            <img src={slider3}/>
                        </div>
                        <p className="slider__text">Birthday organizers on Local</p>
                    </div>
                    <div className="slidercol">
                        <div className="img__wrapper">
                            <img src={slider4}/>
                        </div>
                        <p className="slider__text">Nanny agencies on Local</p>
                    </div>
                    <div className="slidercol">
                        <div className="img__wrapper">
                            <img src={slider5}/>
                        </div>
                        <p className="slider__text">Yoga for kids on Local</p>
                    </div>
                </div>
                <a href="#" className="showcase__link">See all 184+ parenting categories</a>
            </div>
        </section>
    )
}
export default Showcase;
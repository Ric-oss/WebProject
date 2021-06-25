import React from 'react'
import './section2.css'
import Image1 from './image1.png'
import Image2 from './image_506.png'
import Image3 from './image3.png'
function Section2(){
  return(
    <section className="about__section">
    <div className="container row aboutrow">
        <h1 className="about__heading">Parents on Local are looking to spend their money with the right  businesses. </h1>
        <div className="about__info row aboutrow wrap">
            <div className="aboutcol">
                <div className="img__wrapper">
                    <img alt="aboutimg" src={Image2}/>
                    <h2 className="aboutcol__heading">1.5+ million parents</h2>
                    <p className="aboutcol__info">Nearly 1.5 million parents visit our site each month to find parenting related stuff. </p>
                </div>
            </div>
            
            <div className="aboutcol">
                <div className="img__wrapper">
                    <img alt="aboutimg" src={Image1}/>
                    <h2 className="aboutcol__heading">10,000+ business listed</h2>
                    <p className="aboutcol__info">More than 10,000 business are listed already on Local. And it’s growing. </p>
                </div>
            </div>
            <div className="aboutcol">
                <div className="img__wrapper">
                    <img alt="aboutimg" src={Image3}/>
                    <h2 className="aboutcol__heading">184+ parenting categories </h2>
                    <p className="aboutcol__info">From nanny services to hobby classNamees, birthday oragnizers to tutors and everything in between is on Local.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
export default Section2
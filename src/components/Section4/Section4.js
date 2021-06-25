import React  from 'react'
import business1 from './business-1.png'
import business2 from './business-2.png'
import business3 from './business-3.png'
import business4 from './business-4.png'
import business5 from './business-5.png'
import business6 from './business-6.png'
import './Section4.css'

function Section4(){
    return(
<section className="business">
<div className="container">
    <h1 className="business__heading">A complete business toolkit. For every kind of business.</h1>
    <div className="businessinfo">
        <div className="col">
            <div className="img__wrapper">
                <img src={business1}/>
            </div>
            <p className="business__col--heading">Payment integration</p>
            <p className="business__col--info">Securely accept all the modes of payments from your customers —no set up required.</p>
        </div>
        <div className="col">
            <div className="img__wrapper">
                <img src={business2}/>
            </div>
            <p className="business__col--heading">Live chat widget</p>
            <p className="business__col--info">An on-page chat widget helps you get more leads and turn those conversations into coversions.</p>
        </div>

        <div className="col">
            <div className="img__wrapper">
                <img src={business3}/>
            </div>
            <p className="business__col--heading">Order management</p>
            <p className="business__col--info">Process and ship orders quickly and accurately with a simple dashboard to manage all your orders.</p>
        </div>
        <div className="col">
            <div className="img__wrapper">
                <img src={business4}/>
            </div>
            <p className="business__col--heading">Discounts</p>
            <p className="business__col--info">Nudge your customers to buy with discounts that can be customized with expirations, usage limits, and products.</p>
        </div>
        <div className="col">
            <div className="img__wrapper">
                <img src={business5}/>
            </div>
            <p className="business__col--heading">Review management</p>
            <p className="business__col--info">Receive & respond to customer reviews and build your credibility on the network.</p>
        </div>
        <div className="col">
            <div className="img__wrapper">
                <img src={business6}/>
            </div>
            <p className="business__col--heading">Run subscriptions</p>
            <p className="business__col--info">Enable membership subscription and collect  automated recurring payments.</p>
        </div>
    </div>
</div>
</section>
        
        )
    }
    export default Section4

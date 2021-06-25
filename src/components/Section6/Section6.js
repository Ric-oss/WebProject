import './Section6.css'

function Section6(){
    return(
        <section className="faqsection">
        <div className="container">
            <h1 className="faq__heading">FAQs</h1>
            <ul className="faqlist">
                <li className="faq__item list__item">
                    <h3 className="list__item--heading">What is your mission?</h3>
                    <p className="list__item--info">Our mission is to make parenting easier, smarter and maybe happier. Whatever contributes to this mission is on our radar. Local is one such attempt to bring great local businesses to parents, even before they know they need it. And in process, help local businesses flourish.</p>
                </li>
                <li className="faq__item list__item">
                    <h3 className="list__item--heading">What kind of businesses can we list?</h3>
                    <p className="list__item--info">Whatever supports parenting : could be bakeries, coaching classNamees, hobby classNamees, bakeries, party organizers et al. But there’s an exaustive list here if you’d like to take a look.</p>
                </li>
                <li className="faq__item list__item">
                    <h3 className="list__item--heading">Is it free?</h3>
                    <p className="list__item--info">Local at it’s most basic level is free. You can set up your listing with basic details in front of a million parents for no cost at all. If you’d like use premium features and show off your business better, transact and chat with your customers you’d have to pay a fee of Rs. 99/month, all inclusive.</p>
                </li>
            </ul>

            <a href="#" className="faqbtn">Read more</a>
        </div>
    </section>

    )
}
export default Section6
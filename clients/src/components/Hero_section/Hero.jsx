import React from "react"
import './Hero.css'
import CountUp from "react-countup"
import Searchbar from "../Searchbar/Searchbar"

const Hero =()=>{
    return(
        <section className="ho-wrapper">
            <div className="paddings innerwidth flexCenter ho-container">
                <div className="FlexColstart ho-left">
                    <div className="ho-title">
                        <div className="white-circle"/>
                        <h1>Explore <br />Your Suitable <br />Dream Property Here..</h1>
                    </div>
                    </div>
                    <div className=" flexColstart ho-des">
                        <span>We provide you a budget properties </span>
                        <span>with excellent discounts as per your budget</span>
                    </div><br />

                    <Searchbar/>


                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span><CountUp start={3000} end={9000} duration={30}/>
                            <span>+</span>
                            </span>
                            <span>Premium Assets</span>
                        </div>
                        <div className="flexColStart stat">
                            <span><CountUp start={1700} end={2000} duration={3}/>
                            <span>+</span>
                            </span>
                            <span>Happy Customers</span>
                        </div>
                        <div className="flexColStart stat">
                            <span><CountUp   start ={20} end={28} duration={10}/>
                            <span>+</span>
                            </span>
                            <span>Certificates</span>
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default Hero
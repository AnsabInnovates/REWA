import React from "react";
import './Contact.css'
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className=" flexColCenter contacts">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Contact Us</span>
                    <span className="secondaryText">We make dreams come true! You're going to love your new home! We're here to help you every step of the way! Call us today, it's time for you to find your dream home!
                    </span>

                    <div className="flexColStart contactModes">
                        <div className="flexColStart row">
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">041 1232 456</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>
                            
                            
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">041 1232 456</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                   Chat Now
                                </div>
                            </div>
                            

                            
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Video Call</span>
                                        <span className="secondaryText">041 1232 456</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                   Video Call Now
                                </div>
                            </div>

                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">041 1232 456</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Message Now
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Contact;
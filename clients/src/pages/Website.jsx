import React from "react";
import Hero_section from '../components/Hero_section/Hero'
import Companies from '../components/Companies/Companies'
import Properties from '../components/Properties/Properties'
import Value from '../components/Value/Value'
import Contact from '../components/Contact/Contact'
import Starter from '../components/Starter/Starter'
const Website = () => {
    return (
        <div className="App">
     
     <Hero_section/>
     <Companies/>
     <Properties/>
     <Value/>
     <Contact/>
     <Starter/>
    
    </div>
        );
    };

export default Website;
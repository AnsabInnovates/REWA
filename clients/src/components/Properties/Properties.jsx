import React from "react"
import './Properties.css'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import  "swiper/css"
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProps from "../../hooks/useProps";
import { PuffLoader } from "react-spinners";


const Properties = ()=>{
  const{data, isError, isLoading}=useProps()
  if(isError){
    return(
    <div className="wrapper">
        <span>Error while fetching the data</span>
    </div>
    )
}

if(isLoading){
    return(
        <div style={{height:"60vh"}} className="wrapper flexCenter">
            <PuffLoader
            height="80"
            width="80"
            radius="{1}"
            color="#4066ff"
            aria-label="puff-loading"
            />
        </div>
    )
}
    return(
<section className="r-wrapper">
    <div className="paddings innerwidth r-container">
        <div className="r-head flexColStart">
<span className="orangeText">Best Choices</span>
<span className="primaryText">Popular Residencies</span>
        </div>
   
   <div id="carouselExampleDark" class="carousel carousel-dark slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
         <img src="./r1.png" alt="item1"  width="1280" height="400"/>
          <div class="carousel-caption d-none d-md-block">
            <h5 className="primaryText">Aliva Priva Jardin</h5>
            <h3 className="orangeText">$47,043</h3>
            <p>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
        <img src="./r2.png" alt="item2"  width="1280" height="400"/>
          <div class="carousel-caption d-none d-md-block">
            <h5  className="primaryText">Asatti Garden City</h5>
            <h3 className="orangeText">$66,353</h3>
            <p>Anna Street XVII No.215, Cinangka, Sawangan, Depok, Chennai</p>
          </div>
        </div>
        <div class="carousel-item">
        <img src="./r3.png" alt="item3"  width="1280" height="400"/>
          <div class="carousel-caption d-none d-md-block">
            <h5 className="primaryText" >Citralan  Serang</h5>
            <h3 className="orangeText">$35,853</h3>
            <p>Ruko's Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banglore</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <Swiper {...sliderSettings}>
      <SliderButtons/>
      {
        data.slice(0,8).map((card, i)=>(
          <SwiperSlide key={i}>
            <PropertyCard card={card}/>
          </SwiperSlide>
          )
        )
      }
    </Swiper>
    </div>
    </section>


    );

}
export default Properties;

const SliderButtons = () => {
  const swiper = useSwiper();
  return(
    <div className="r-button">
      <button onClick={()=> swiper.slidePrev()}> &lt; </button>
      <button onClick={()=> swiper.slideNext()}> &gt; </button>
    </div>
  );
};
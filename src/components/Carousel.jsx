import React from 'react';
import "./css/Carousel.css"
import image from "./images/pic_cara.png"
export default function Carousel(){
    return(
        <div class="container">
            <div id="myCarousel" class="carousel slide" >
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">

                <div class="item active cara_element">
                  <div class="headings">
                    <h3>Lessons and insights</h3>
                    <h3 style={{color:"green"}}>from 8 years</h3>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button>Register</button>
                  </div>
                  <img src={image} alt="Los Angeles" className='images'/>
                </div>

                <div class="item cara_element" >
                  <div class="headings">
                    <h3>Lessons and insights</h3>
                    <h3 style={{color:"green"}}>from 8 years</h3>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button>Register</button>
                  </div>
                  <img src={image} alt="Chicago" className='images'/>
                </div>

                <div class="item cara_element">
                  <div class="headings">
                    <h3>Lessons and insights</h3>
                    <h3 style={{color:"green"}}>from 8 years</h3>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button>Register</button>
                  </div>
                  <img src={image} alt="New York" className='images'/>
                </div>

              </div>

              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
        </div>
    )
}
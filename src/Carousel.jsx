import React from 'react';
import "./css/Carousel.css"
import image from "./images/pic_cara.png"
export default function Carousel(){
    return(
        <div className="container">
            <div id="myCarousel" className="carousel slide" >
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">

                <div className="item active cara_element">
                  <div className="headings">
                    <h3>Lessons and insights</h3>
                    <h3 style={{color:"green"}}>from 8 years</h3>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button>Register</button>
                  </div>
                  <img src={image} alt="Los Angeles" className='images'/>
                </div>

                <div className="item cara_element" >
                  <div className="headings">
                    <h3>Lessons and insights</h3>
                    <h3 style={{color:"green"}}>from 8 years</h3>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button>Register</button>
                  </div>
                  <img src={image} alt="Chicago" className='images'/>
                </div>

                <div className="item cara_element">
                  <div className="headings">
                    <h3>Lessons and insights</h3>
                    <h3 style={{color:"green"}}>from 8 years</h3>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button>Register</button>
                  </div>
                  <img src={image} alt="New York" className='images'/>
                </div>

              </div>

              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
        </div>
    )
}
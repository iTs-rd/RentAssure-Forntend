import React from "react";
// import "./glide.min.js";
// import "./glide.core.min.css";
// import "./main.css";
// import "./hover.js";
import Glide from 'glide'
function Glider(){
    return(
        <div className="body">
            <div className="side-indicator">
                <div className="line"></div>
                <div className="index one">
                    <p>1</p>
                </div>
                <div className="index two">
                    <p>2</p>
                </div>
                <div className="index three">
                    <p>3</p>
                </div>
                <div className="index four">
                    <p>4</p>
                </div>
            </div>
            <div className="content">
                <div className="text-wrapper">
                <div className="text">
                <div id="title">
                    <h4>JAIPUR</h4>
                    <h4>DELHI</h4>
                    <h4>CHENNAI</h4>
                    <h4>KERALA</h4>
                </div>
                <div className="btn">
                    <p>Explore</p>
                    <i className="fa fa-arrow-right"></i>
                </div>
                </div>
                </div>
                <div className="glide">
                    <div className="glide-cover">

                    </div>
                    <div className="glide__track" data-glide-el="track">
                       <ul className="glide__slides">
                       <li className="glide__slide">
                           <div className="slide one">
                               <p>Jaipur</p>
                               <div className="rating">
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle"></div>
                               </div>
                                 <div className="slider-image">
                                     <img src="./assets/images/slide1.JPG.jpg"></img>
                                     <div className="bookmark">
                                         <i className="fa fa-bookmark"></i>
                                     </div>
                                 </div>
                           </div>
                           </li>
                        <li className="glide__slide">
                        <div className="slide two">
                               <p>Delhi</p>
                               <div className="rating">
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle"></div>
                               </div>
                                 <div className="slider-image">
                                     <img src="./assets/images/slide2.JPG.jpg"></img>
                                     <div className="bookmark">
                                         <i className="fa fa-bookmark"></i>
                                     </div>
                                 </div>
                           </div> 
                        </li>
                      <li className="glide__slide">
                      <div className="slide three">
                               <p>Chennai</p>
                               <div className="rating">
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle"></div>
                               </div>
                                 <div className="slider-image">
                                     <img src="./assets/images/slide3.JPG.jpg"></img>
                                     <div className="bookmark">
                                         <i className="fa fa-bookmark"></i>
                                     </div>
                                 </div>
                           </div>
                      </li>
                      <li className="glide__slide">
                      <div className="slide four">
                               <p>Kerala</p>
                               <div className="rating">
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle active"></div>
                                   <div className="circle"></div>
                               </div>
                                 <div className="slider-image">
                                     <img src="./assets/images/slide4.JPG.jpg"></img>
                                     <div className="bookmark">
                                         <i className="fa fa-bookmark"></i>
                                     </div>
                                 </div>
                           </div>
                      </li>
                      </ul>
                </div>
                     <div data-glide-el="controls" className="controls">
                         <div data-glide-dir="<" id="prev">
                             <i className="fa fa-arrow-left"></i>
                         </div>
                         <div data-glide-dir=">" id="next">
                             <i className="fa fa-arrow-right"></i>
                         </div>
                     </div>
                </div>
            </div>
            <div className="background"></div>
           {/* { document.addEventListener("DOMContentloaded",()=>{
                   new Glide(".glide",{
                      type:"carousel",
                     startAt:0,
                      AnimationTimingFunc:"ease-in-out"
                          gap:100,
                       perView: 3,
                 }).mount();
             });
            } */}
        
            
        </div>
    )
}
export default Glider;
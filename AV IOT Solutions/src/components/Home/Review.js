import React from 'react';
import './Review.css';
import image from "../../assets/img/img20.png"
import img from "./Home_imgs/review_bg.png"

import Wikum from "./Home_imgs/Wikum.png"
import Oshade from "./Home_imgs/Oshade.jpeg"
import uditha from "./Home_imgs/uditha.png"

export const Review = () => {
 
  return (
    
    <div class="m">
<h1> CSS3 Testimonials Slider</h1>
<div class="reviewcontainer">
  <input type="radio" name="nav" id="first" checked/>
  <input type="radio" name="nav" id="second" />
  <input type="radio" name="nav" id="third" />
  
  <label for="first" class="first"></label>
<label for="second"  class="second"></label>
<label for="third" class="third"></label>
 
  <div class="one slide">
    <blockquote>
      <span class="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span class="rightq quotes">&bdquo; </span>
    </blockquote>
    <img className="imgReview" src={image} width="170" height="130" />
    <h2>Steve Kruger</h2>
    <h6>UI/UX Designer at Woof Design Studio</h6>
  </div>
  
  <div class="two slide">
    <blockquote>
      <span class="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I recommend him to anyone who wants their work done professionally. The project ... <a href="#"> read more</a><span class="rightq quotes">&bdquo; </span>
    </blockquote>
    <img className="imgReview" src="http://behance.vo.llnwd.net/profiles14/297668/projects/3041537/f4d6311b432c4804f1c8045459df9647.jpg" width="170" height="130" />
    <h2>John Doe</h2>
    <h6>Developer Relations at Woof Studios</h6>
  </div>
  
  <div class="three slide">
    <blockquote>
      <span class="quotes leftq"> &ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span class="rightq quotes">&bdquo; </span>
    </blockquote>
    <img className="imgReview" src="http://media.digitalcameraworld.com/files/2012/10/People_photography_composition_tips_PHG18.chap4_.n_p38_39.jpg" width="170" height="130" />
    <h2>Steve Stevenson</h2>
    <h6>CEO Woof Web Design Studios</h6>
  </div>
  
  
</div>
</div>
  )
}
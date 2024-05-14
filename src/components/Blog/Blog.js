// import bgVideo from "./bgVideo.mp4";
// import "animate.css";
import "./Blog.css";
import React from 'react';
import blog from './blog1.jpg';
import { CiShare2 } from "react-icons/ci";
import { Subscribe } from "./Subscribe";


  export const Blog = () => {

  return (
<div>
    <div id="a-home">
      
    <div >
        <h1 class="topic">The Latest News  & Blogs</h1>
      </div> 


    <div class="row">

        <div class="about-column">
          <div class="card-a">
          <div class="card-img">
            <img className="logo" src={blog} alt=""/>
          </div>
            <div className="blog-h">
            <p className="blog-white">Unlocking the Potential of IoT in Healthcare</p>
            </div>
            <p className="blog-share"><CiShare2 /></p>
            
          </div>
        </div>
      
        <div class="about-column">
          <div class="card-a">
          <div class="card-img">
            <img className="logo" src={blog} alt=""/>
            </div>
            <div className="blog-h">
            <p className="blog-white">Unlocking the Potential of IoT in Healthcare</p>
            </div>
            <p className="blog-share"><CiShare2 /></p>
            
          </div>
        </div>
        
        <div class="about-column">
          <div class="card-a">
          <div class="card-img">
            <img className="logo" src={blog} alt=""/>
            </div>
            <div className="blog-h">
            <p className="blog-white">Unlocking the Potential of IoT in Healthcare</p>
            </div>
            <p className="blog-share"><CiShare2 /></p>
          </div>
        </div>
        
        <div class="about-column">
          <div class="card-a">
          <div class="card-img">
            <img className="logo" src={blog} alt=""/>
            </div>
            <div className="blog-h">
            <p className="blog-white">Unlocking the Potential of IoT in Healthcare</p>
            </div>
            <p className="blog-share"><CiShare2 /></p>
          </div>
        </div>
      </div> 

      <div class="row">
        <div class="about-column">
          <div class="card-a">
          <div class="card-img">
            <img className="logo" src={blog} alt=""/>
          </div>
            <div className="blog-h">
            <p className="blog-white">Unlocking the Potential of IoT in Healthcare</p>
            </div>
            <p className="blog-share"><CiShare2 /></p>
            
          </div>
        </div>
      
        <div class="about-column">
          <div class="card-a">
          <div class="card-img">
            <img className="logo" src={blog} alt=""/>
            </div>
            <div className="blog-h">
            <p className="blog-white">Unlocking the Potential of IoT in Healthcare</p>
            </div>
            <p className="blog-share"><CiShare2 /></p>
            
          </div>
        </div>
        
        <div class="about-column">
          <div class="card-a">
          <div class="card-img">
            <img className="logo" src={blog} alt=""/>
            </div>
            <div className="blog-h">
            <p className="blog-white">Unlocking the Potential of IoT in Healthcare</p>
            </div>
            <p className="blog-share"><CiShare2 /></p>
          </div>
        </div>
        
        <div class="about-column">
          <div class="card-a">
          <div class="card-img">
            <img className="logo" src={blog} alt=""/>
            </div>
            <div className="blog-h">
            <p className="blog-white">Unlocking the Potential of IoT in Healthcare</p>
            </div>
            <p className="blog-share"><CiShare2 /></p>
          </div>
        </div>
      </div> 

    </div>

    <Subscribe />
</div>
  );
};
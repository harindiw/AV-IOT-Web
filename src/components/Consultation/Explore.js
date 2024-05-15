import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import logo2 from './logo2.png';
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import './Explore.css';


export const Explore = () => {

  const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs
		.sendForm('service_brtgs93', 'template_b1oc0pl', form.current, {
		  publicKey: 'mzx4wsWnJQ18NbxVl',
		})
		.then(
		  () => {
			// console.log('SUCCESS!');
      toast.success("sucessfully sent to IOT SOlutions!");
		  },
		  (error) => {
			console.log('FAILED...', error);
      toast.error("not sent. try again!");
		  },
		);
	};


  return (
    <div className='explore'>
      <div class="m">
        <div class="row">
          <div class="col-sm">
            <img className="logo1" src={logo2} alt="" />
            {/* <h4>Explore working with AV IOT Solutions</h4><br></br> */}
            <div className='exdiv'>
            <br></br><h5><b><HiOutlineVideoCamera /></b>&emsp; 30 min</h5><br></br>
            <h5><b><FaRegClock /></b>&emsp; Web conferencing details provided upon confirmation.</h5>
            </div>
            
          </div>
          <div class="col-sm">
          
  <div class="contianer">
  <div class="formbold-main-wrapper">

  <div class="formbold-form-wrapper">
    <form ref={form} onSubmit={sendEmail} method="POST">
      <div class="formbold-input-wrapp formbold-mb-3">
{/* name */}
        <div>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First name"
            class="formbold-form-input"
          />

          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last name"
            class="formbold-form-input"
          />
        </div>
      </div>
{/* email */}
      <div class="formbold-mb-3">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          class="formbold-form-input"
        />
      </div>

      {/* Phone */}
      <div class="formbold-mb-3 formbold-input-wrapp">

        <div>
          
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone number"
            class="formbold-form-input"
          />
        </div>
      </div>

      {/* company */}
      <div class="formbold-mb-3">
        <input
          type="text"
          name="company"
          id="company"
          placeholder="company name"
          class="formbold-form-input"
        />
      </div>

        {/* company */}
        <div class="formbold-mb-3">
        <input
          type="textarea"
          name="build"
          id="build"
          placeholder="What are you planning to build"
          class="formbold-form-input"
        />
      </div>

{/* data  */}
      <div class="formbold-mb-3">
        <input type="date" name="date" id="date" class="formbold-form-input" />
      </div>

      <div class="formbold-mb-3">
        <input type="time" name="time" id="time" class="formbold-form-input" />
      </div>





   

      <button class="formbold-btn">Submit</button>
    </form>
  </div>
</div>

  </div>
          </div>
        </div>
      </div>
    </div>
  )
}
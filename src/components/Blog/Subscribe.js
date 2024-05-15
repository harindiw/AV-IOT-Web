import React , { useRef } from "react";
// import Star from './Star.png';
import "./Subscribe.css";
//import Star from './Star.png';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Subscribe = () => {
	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs
		.sendForm('service_rgnoocv', 'template_deuoujx', form.current, {
		  publicKey: 'mzx4wsWnJQ18NbxVl',
		})
		.then(
		  () => {
			console.log('SUCCESS!');
			toast.success('Thank you for subscribing!');
		  },
		  (error) => {
			console.log('FAILED...', error);
			toast.error('error. try again')
		  },
		);
	};



    return (

        <div class="subscribe">
			<p></p>
			<p></p>
			<div class="sub">

			{/* <img className="img" src={Star} alt=""/>
                <img className="star-2" src={Star} alt=""/>
                <img className="star-3" src={Star} alt="" />
                <img className="star-4" src={Star} alt="" />
                <img className="star-5" src={Star} alt="" />
                <img className="star-6" src={Star} alt="" />
                <img className="star-7" src={Star} alt="" /> */}


	<h2 class="subscribe__title">Subscribe for our Newsletter</h2>
	<p class="subscribe__copy">Subscribe to get latest updates</p>


	<form ref={form} onSubmit={sendEmail} class="form">
     
      {/* <label>Email</label> */}
      <input type="email" name="email" class="form__email" placeholder="Enter your email address" />

      <input type="submit" class="form__button" value="Send" />
    </form>
	<div class="notice">
		{/* <input type="checkbox"/> */}
		{/* <span class="notice__copy">I agree to my email address being stored and uses to recieve monthly newsletter.</span> */}
	</div>
	</div>
</div>
    );
};
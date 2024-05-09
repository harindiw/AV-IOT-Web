// import bgVideo from "./bgVideo.mp4";
// import "animate.css";
import "./SendMsg.css";
import React ,{ useRef }from 'react';
import emailjs from '@emailjs/browser';
// import {useForm} from 'react-hook-form';

export const SendMsg = () => {
  const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs
		.sendForm('service_rgnoocv', 'template_3tguye3', form.current, {
		  publicKey: 'mzx4wsWnJQ18NbxVl',
		})
		.then(
		  () => {
			console.log('SUCCESS!');
		  },
		  (error) => {
			console.log('FAILED...', error);
		  },
		);
	};


  return (
    <>
      <div className='contact'>
      <div id="contact-container">
  <h1 className="contact-h1">&bull; Keep in Touch &bull;</h1>
  <div class="underline">
  </div>

  <form ref={form} onSubmit={sendEmail} id="contact_form">
    <div class="name">
      <label for="name"></label>
      <input type="text" placeholder="Name" name="name" id="name_input" className="input-text-contact" required/>
    </div>
    <div class="email">
      <label for="email"></label>
      <input type="email" placeholder="Email" name="email" id="email_input" className="input-email-contact" required/>
    </div>
    <div class="telephone">
      <label for="name"></label>
      <input type="text" placeholder="Mobile number" name="telephone" id="telephone_input" className="input-text-contact" required/>
    </div>
    <div class="subject">
      <label for="subject"></label>
      <input type="text" placeholder="Subject" name="subject" id="subject" className="input-text-contact" required/>
    </div>
    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="submit">
      <input type="submit" value="Send Message" id="form_button" />
    </div>
  </form>
</div>
      </div>
    </>
  );
};
import React from 'react';
import "./Contact.css";

export const Contact = () => {

  return (
    <div className="contact-us-container">
      {/* <div className="box">
        <div className="text">
          <h1>Contact <span className="red">Us</span></h1>
          <hr className="redline"/>
          <p>Have Questions? We have answers (maybe)</p>
        </div>
      </div> */}



      <div className="contactcontainer">
        <div className="touch">
          <h2>Get in touch</h2>
          <hr className="redline" />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <form action="" method="POST" name="contact-form">
              <div className="contactcontainer form-margin">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="First Name" name="firstname" required />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Company Name" name="company" required />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Phone" name="firstname" required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Last Name" name="lastname" required />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="E-mail" name="email" required />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Course" name="course" required />
                    </div>
                  </div>
                </div>
              </div>

              <div className="contactcontainer">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <textarea className="form-control" rows="6" placeholder="Message" name="message" required></textarea>
                    </div>
                    <div className="pager">
                      <button type="submit" className="btn btn-success">SEND MESSAGE</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="google-map">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1588.974299060208!2d80.0097718!3d6.864391000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250d422ae0c6d%3A0x2867f2400c54e42b!2sAlta%20Vision!5e0!3m2!1sen!2slk!4v1644964245743!5m2!1sen!2slk" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
</div>





          </div>
        </div>
      </div>

      {/* <div className="contactcontainer address">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3>Our Address</h3>
            <div className="redline-address"></div>
            <p>Resources</p><br></br>
            <p className='red'>Blogs <br></br>
              Case Studies</p>
            <p>Bommanahalli,</p>
            <p>Bangalore - 560068</p>
            <div className="phone-e">
              <p><span className="glyphicon glyphicon-envelope"> </span> info@trainingmug.com</p>
              <p><span className="glyphicon glyphicon-phone"></span> +91-97427 66186</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bottom-gap"></div>
    </div>
  )
}

export default Contact;
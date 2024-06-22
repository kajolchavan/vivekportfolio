"use client"
import { client } from "@/cms/lib/client";
import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import { useState } from "react";


const page = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    contact:"",
    subject:"",
    message:""
  })

  const sendMessage = async () =>{
    const doc = {
                    _type: "contact",
                    name: formData.name,
                    email: formData.email,
                    contact: formData.contact,
                    message: formData.message,
                    
                  };
    
     await client.create(doc).then(()=>res.status(201).json('Message Sent'))
          router.push('/')
  
};
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"Contact Us"} />
      {/* Contact Page Area start */}
      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let’s Talk For your <span>Next Projects</span>
                  </h2>
                  {/* <p>
                    Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                    inventore veritatis
                  </p> */}
                </div>
                {/* <h6>Main Office</h6> */}
                <div className="widget_contact_info mb-35">
                  <ul>
                    {/* <li>
                      <i className="far fa-map-marker-alt" /> 55 Main Street,
                      2nd block,
                      <br /> New York City
                    </li> */}
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:harshad.blog69@gmail.com">vjha811@gmail.com</a>
                    </li>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <a href="callto:+447741942710">+91 93721 15611</a>
                    </li>
                  </ul>
                </div>
                <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
                  
                  <a href="https://www.linkedin.com/in/vivek-jha-98b96221b/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://www.instagram.com/cre8ive_ui_ux/">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  onSubmit={sendMessage}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e)=>setFormData({...formData,name:e.target.value})}
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Richard D. Hammond"
                          required=""
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="name" className="for-icon">
                          <i className="far fa-user" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e)=>setFormData({...formData,email:e.target.value})}
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="support@gmail.com"
                          required=""
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="email" className="for-icon">
                          <i className="far fa-envelope" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue=""
                          placeholder="+880 (123) 456 88"
                          required=""
                          data-error="Please enter your Phone Number"
                        />
                        <label htmlFor="phone_number" className="for-icon">
                          <i className="far fa-phone" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                        value={formData.subject}
                          onChange={(e)=>setFormData({...formData,subject:e.target.value})}
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          defaultValue=""
                          placeholder="Subject"
                          required=""
                          data-error="Please enter your Subject"
                        />
                        <label htmlFor="subject" className="for-icon">
                          <i className="far fa-text" />
                        </label>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={(e)=>setFormData({...formData,message:e.target.value})}
                          className="form-control"
                          rows={4}
                          placeholder="write message"
                          required=""
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Us Message <i className="far fa-angle-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Contact Page Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="our-location">
           
          </div>
        </div>
      </div>
    </NoxfolioLayout>
  );
};
export default page;

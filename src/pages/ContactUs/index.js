import { React, useState } from 'react'
import { Fade } from 'react-reveal';
import blogApi from '../../api/blogApi'
import BlogBanner from '../../components/layout/BlogBanner'
import './style.css'

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  async function postCustomersData(){
    await blogApi.postCustomersInfo('info', {
      name:name,
      email:email,
      phone:phone,
      message:message,
    })
  }


  return (
    <div className="contact-us">
        <BlogBanner title="Contact Us" backgroundName="banner-contact.jpeg" description="Our aim is to apply Technological Solutions to your Business Objectives & Ideas"/>
        <div className="container">
          <div className="contact-us-info">
            <Fade left>
              <div className="info-text col-md-6 col-sm-12 col-12">
                <div className="text-item">
                  <h2>
                  phone number
                  </h2>
                  <a href="tel:9549326532">    
                    +919549326532
                  </a>

                </div>
                <div className="text-item">
                  <h2>address</h2>
                  <p>701-702, Evershine Tower, Amrapali Circle, Vaishali Nagar, Jaipur- 302021</p>
                </div>
                <div className="text-item">
                  <h2>new business</h2>
                  <p>We don't have client or customers, we have partners. We leverage innovation towards digital transformation.</p>
                  <a href="mailto:business@volansoft.com" >
                  business@volansoft.com
                  </a>
                </div>
                <div className="text-item">
                  <h2>general inquiries</h2>
                  <p>Have something to say? Drop us a line. We offer big results with boutique-style relationships.</p>
                  <a href="mailto:info@volansoft.com" >
                  info@volansoft.com
                  </a>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="info-map col-md-6 col-sm-12 col-12">
                <iframe 
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6392316351735!2d105.83811861546754!3d21.00709389389208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac7818f13cb3%3A0x91fda0d22d1680d8!2zT2NlYW4gUGFyayBCdWlsZGluZywgMSDEkMOgbyBEdXkgQW5oLCBQaMawxqFuZyBNYWksIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1653875276675!5m2!1svi!2s" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">  
                </iframe>
              </div>
            </Fade>
          </div>
        </div>
        <div className="container">
          <div className="contact-us-input">
            <Fade bottom>
              <div className="wrap-sidetext col-md-6 col-sm-12 col-12">
                <div className="wrap-sidetext__content aos-init aos-animate" >
                  <div className="title-headline">
                    <h3>What happens next</h3>
                  </div>
                  <p>After we receive your request, one of our sales managers will contact you to clarify the details and arrange a meeting. We normally reply within one business day (or much sooner).</p><p>Then, we'll schedule a call to discuss the details of your project. </p><p>For video calls, we use Skype or Google Hangouts. If you prefer to use other software, just let us know. We'd be happy to make it work for both of us.</p>
                  <p></p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <form className="input-form col-md-6 col-sm-12 col-12" method="post" >
                <h3>Let us know how we can help!</h3>
                <div className="form-group">
                  <input onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Your Name" name="name" id="name" />
                </div>
                <div className="form-group">
                  <input onChange={e => setEmail(e.target.value)} type="email" className="form-control " placeholder="Your Email" name="email" id="email" />
                </div>
                <div className="form-group">
                  <input onChange={e => setPhone(e.target.value)} type="text" className="form-control " placeholder="Your Mobile" name="mobile" id="mobile" />
                </div>
                <div className="form-group">
                  <textarea onChange={e => setMessage(e.target.value)} rows="5" className="form-control " placeholder="Your Message" name="message" id="message"></textarea>
                </div>
                <div className="form-group button">
                  <button className=" btn_black btn_m3"  type="submit"  onClick={postCustomersData}>Send</button>
                </div>
              </form>
            </Fade>
          </div>
        </div>
    </div>
  )
}

export default ContactUs
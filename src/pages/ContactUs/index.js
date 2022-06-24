import { React, useState, useEffect } from 'react'
import  Fade  from 'react-reveal';
import blogApi from '../../api/blogApi'
import BlogBanner from '../../components/layout/BlogBanner'
import './style.css'

function ContactUs({languages}) {

  useEffect(()=>{
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		  });

      document.title="SMARTTEN";
      document.description="SMARTTEN Software";
	},[])

  const [name, setName] = useState('');

  const [email, setEmail] = useState('')

  const [phone, setPhone] = useState('');

  const [message, setMessage] = useState('');

  const [alertMessage, setAlertMessage] = useState('')



  async function postCustomersData(e){
    e.preventDefault();
    await blogApi.postCustomersInfo('/contact', {
      name:name,
      email:email,
      phone:phone,
      message:message,
    })
    .then(function (response) {
      //handle success
      setAlertMessage("Thank you! Your message has been successfully sent. We will contact you very soon!")
      setTimeout(() => {
        setAlertMessage("")
      }, 5000);
    })
    .catch(function (response) {
      //handle error
      console.log(response.message);
      
    });

  }


  return (
    <div className="contact-us">
        <BlogBanner title="Contact Us" backgroundName="banner-contact.jpg" description="Our aim is to apply Technological Solutions to your Business Objectives & Ideas"/>
        <div className="container">
          <div className="contact-us-info">
            <Fade left>
              <div className="info-text col-md-6 col-sm-12 col-12">
                <div className="text-item">
                  <h2>
                    {languages.title_phone}
                  </h2>
                  <a href="/tel:2462593698">    
                    +(84) 2462593698
                  </a>

                </div>
                <div className="text-item">
                  <h2>{languages.title_adress}</h2>
                  <p>{languages.address}</p>
                </div>
                <div className="text-item">
                  <h2>{languages.title_business}</h2>
                  <p>{languages.business}</p>
                  <a href="mailto:business@smartten.com.vn" >
                  business@smartten.com.vn
                  </a>
                </div>
                <div className="text-item">
                  <h2>{languages.title_inquiries}</h2>
                  <p>{languages.inquiries}</p>
                  <a href="mailto:info@smartten.com.vn" >
                  info@smartten.com.vn
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
                    <h3>{languages.title_happen}</h3>
                  </div>
                  <p>{languages.happens}</p>
                  <p></p>
                </div>
              </div>
            </Fade>
            <Fade right>
              <form className="input-form col-md-6 col-sm-12 col-12" method="post" onSubmit={postCustomersData} >
                <h3>{languages.title_help}</h3>
                <div className="form-group">
                  <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder={languages.your_name} name="name" id="name"  required/>
                </div>
                <div className="form-group">
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control " placeholder={languages.your_email} name="email" id="email" required />
                </div>
                <div className="form-group">
                  <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" pattern="[0-9]{10}"  className="form-control " placeholder={languages.your_mobile} name="mobile" id="mobile" required />
                </div>
                <div className="form-group">
                  <textarea value={message} onChange={e => setMessage(e.target.value)} rows="5" className="form-control " placeholder={languages.your_message} name="message" id="message" required></textarea>
                </div>
                <div className="form-group button">
                  <button className=" btn_black btn_m3"  type="submit"  >Send</button>
                  <div id="alert_msg">
                    {alertMessage}
                  </div>
                </div>
              </form>
            </Fade>
          </div>
        </div>
    </div>
  )
}

export default ContactUs
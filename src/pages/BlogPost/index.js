import {React, useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import blogApi from '../../api/blogApi'
import './style.css'
import BannerBlog from '../../components/layout/BlogBanner'

function BlogPost({ languages, postsData }) {
  
  const [post, setPost] = useState()

  const [name, setName] = useState('');

  const [email, setEmail] = useState('')

  const [phone, setPhone] = useState('');

  const [message, setMessage] = useState('');

  const [alertMessage, setAlertMessage] = useState('')


  let { blogIndex } = useParams();
  
  let currentIndex = parseInt(blogIndex)
  


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

  useEffect(() => {
    function getPost(){
      let post = postsData[currentIndex]
      setPost(post)
      return post
    }
    getPost()
  },[postsData, currentIndex])


  return (
    <div className="post">
        <BannerBlog title="Blog" backgroundName="banner-about.jpeg"   description="Our aim is to apply Technological Solutions to your Business Objectives & Ideas"  />
        <div className="container">
          <div className="post-content">
            <div  className="post-content-left col-md-8 col-sm-12 col-12">
              {post && <div className="content-details">
                <img src={post.image} alt="Thumbnail" />
                <div dangerouslySetInnerHTML={{ __html: post.lang[languages.lang].content }}>
                </div>
              </div>}
              <div className="content-navigation">
                <Link className="content-navigation-button" to={`/blog/post/${currentIndex-1}`}>prev</Link>
                <Link className="content-navigation-button" to={`/blog/post/${currentIndex+1}`}>next</Link>
              </div>
            </div>
            <div className="post-content-right col-md-4 col-sm-12 col-12">
              <div className="content-suggestion">
                <h4>recent post</h4>
                <ul className="suggestion-lists">
                  {postsData && postsData.map((post,index) =>(
                    <li key={index} className="suggestion-item">
                      <Link to={`/blog/post/${index}`}>
                        <img src={post.image} alt="Thumbnail" />
                        <span>
                          {post.lang[languages.lang].title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="contact-form-container"> 
                <h4>Let us know how we can help!</h4>
                <form className="contact-form" method="post" onSubmit={postCustomersData} >
                  <div className="form-group">
                    <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your Name" name="name" id="name"  required/>
                  </div>
                  <div className="form-group">
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"  placeholder="Your Email" name="email" id="email" required />
                  </div>
                  <div className="form-group">
                    <input value={phone} onChange={e => setPhone(e.target.value)} type="tel"   placeholder="Your Mobile" name="mobile" id="mobile" required />
                  </div>
                  <div className="form-group">
                    <textarea value={message} onChange={e => setMessage(e.target.value)} rows="5"  placeholder="Your Message" name="message" id="message" required></textarea>
                  </div>
                  <div className="form-group button">
                    <button className=" btn btn_black"  type="submit"  >Send</button>
                    <div id="alert_msg">
                      <p  className="alert">
                        {alertMessage}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default BlogPost
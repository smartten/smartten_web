import {React, useState, useEffect} from 'react'
import { Link, useParams} from 'react-router-dom'
import './style.css'
import SocialLink from '../../components/layout/SocialLink'
import Banner from '../../components/layout/BlogBanner'

function BlogPost({ languages, postsData }) {
  
  const [post, setPost] = useState()
  
  let { blogIndex } = useParams();
  
  let currentIndex = parseInt(blogIndex)
  
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
        <Banner title="Blog" backgroundName="banner-about.jpg"  description="Our aim is to apply Technological Solutions to your Business Objectives & Ideas"  />
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
                <SocialLink />
                <Link className="content-navigation-button" to={`/blog/post/${currentIndex+1}`}>next</Link>
              </div>
            </div>
            <div className="post-content-right col-md-4 col-sm-12 col-12">
              <div className="content-suggestion">
                <h4>recent post</h4>
                <ul className="suggestion-lists">
                  {postsData && postsData.map((post,index) =>(
                    <li key={index} className="suggestion-item">
                      <a href={`/blog/post/${index}`}>
                        <img src={post.image} alt="Thumbnail" />
                        <span>
                          {post.lang[languages.lang].title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="contact-form-container"> 
                <h4>Let us know how we can help!</h4>
                <form className="contact-form" method="post">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" name="name" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" name="email"  />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Your Mobile" name="mobile" />
                  </div>
                  <div className="form-group">
                    <textarea rows="5" placeholder="Your Message" name="message" ></textarea>
                  </div>
                  <div className="form-group">
                    <button  type="submit ">Send</button>
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
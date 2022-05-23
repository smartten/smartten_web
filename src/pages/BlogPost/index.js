import {React, useEffect, useState} from 'react'
import { Link, useParams} from 'react-router-dom'
import blogApi from '../../api/blogApi'
import './style.css'
import SocialLink from '../../components/layout/SocialLink'
import Banner from '../../components/layout/BlogBanner'

function BlogPost() {
  const [posts, setPosts] = useState([])
  
  const [post, setPost] = useState([])


  let { blogIndex } = useParams();

  let currentIndex = parseInt(blogIndex)
  

  useEffect(() => {
    async function getPost(){
        let postsData = await blogApi.getBlogs('blogs')
        setPosts(postsData.blogs)
        setPost(postsData.blogs[blogIndex])
        return postsData
    }
    getPost()
  },[blogIndex])
  

  return (
    <div className="post">
        <Banner title="Blog" backgroundName="banner-about.e753733f9a6577572b57.jpg"  description="Our aim is to apply Technological Solutions to your Business Objectives &amp; Ideas"  />
        <div className="post-content-container">
          <div className="post-content">
            <div className="post-content-left">
              <div className="content-details">
                <img src={post.image} alt="Thumbnail" />
                <h2>{post.title}</h2>
                <p>{post.text}</p>
              </div>
              <div className="content-navigation">
                <Link className="content-navigation-button" to={`/blog/post/${currentIndex-1}`}>prev</Link>
                <SocialLink />
                <Link className="content-navigation-button" to={`/blog/post/${currentIndex+1}`}>next</Link>

              </div>
            </div>
            <div className="post-content-right">
              <div className="content-suggestion">
                <h3>Recent Post</h3>
                <ul className="suggestion-lists">
                  {posts && posts.map((post,index) =>(
                    <li key={index} className="suggestion-item">
                      <a href={`/blog/post/${index}`}>
                        <img src={post.image} alt="Thumbnail" />
                        <span>{post.title}</span>
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
                    <button type="submit">Send</button>
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
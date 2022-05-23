import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import blogApi from '../../api/blogApi'
import BlogBanner from '../../components/layout/BlogBanner'

function Blog() {
    const [posts, setPosts] = useState([])
    const [postsDisplay, setPostsDisplay] = useState()
    const [postsIndex, setPostsIndex] = useState(0)

   

    useEffect(() => {
        async function getPosts(){
            let postsData = await blogApi.getBlogs('blogs')
            setPosts(postsData.blogs)
            return postsData
        }
        getPosts()
    },[posts])
    
    useEffect(() => {
        async function slicePosts(){
            let slicePosts = posts?.slice(postsIndex, postsIndex + 3)
            setPostsDisplay(slicePosts)
            return slicePosts
        }
        slicePosts()
    },[posts,postsIndex])

  return (
    <div className="blog">
        <BlogBanner title="Blog" backgroundName="banner-about.e753733f9a6577572b57.jpg" description="Our aim is to apply Technological Solutions to your Business Objectives &amp; Ideas" />
        <div className="blog-posts">
            <ul className="posts-lists">
                {postsDisplay && postsDisplay.map((post,index) =>(
                    <li key={index} className="post-item">
                        <Link to={`post/${index}`} >
                            <img src={post.image} alt="post" />
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="blog-pagination">
            <div className="pagination-container">
                <button onClick={() => postsIndex === 0 ? setPostsIndex(0) :(setPostsIndex(postsIndex-3))}>
                    <i className="fa-solid fa-chevron-left"></i>
                    Previous
                </button>
                <button onClick={() => (setPostsIndex(postsIndex+3))}> 
                    Next
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
  )
    }

export default Blog
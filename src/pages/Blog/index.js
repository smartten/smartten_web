import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import BlogBanner from '../../components/layout/BlogBanner'

function Blog( { languages, postsData } ) {
    const [postsDisplay, setPostsDisplay] = useState()

    const [postIndex, setPostIndex] = useState(0)

    let postsPerPages = 3




    useEffect(() => {
        async function slicePosts(){
            let slicePosts = postsData?.slice(postIndex, postIndex + postsPerPages)
            setPostsDisplay(slicePosts)
            return slicePosts
        }
        slicePosts()
    },[postsData,postsPerPages,postIndex])

  return (
    <div className="blog">
        <BlogBanner title="Blog" backgroundName="banner-blog.jpeg" description="Our aim is to apply Technological Solutions to your Business Objectives & Ideas" />
        <div className="blog-posts">
            <ul className="posts-lists">
                {postsDisplay && postsDisplay.map((post,index) =>(
                    <li key={index} className="post-item">
                        <div className="blog-image">
                            <Link className="image-scale" to={`/blog/post/${index}`}>
                                <img src={post.image} alt="Blog" />
                            </Link>
                        </div>
                        <div className="blog-content post-entry-content">                                       
                            <Link to={`/blog/post/${index}`}>
                                <h2>{post.lang[languages.lang].title}</h2>
                            </Link>
                            <ul className="post-detail-ul">
                                <li><i className="fa fa-calendar"></i>{post.createdAt.slice(0,10)}</li>
                                <li><i className="fa fa-user"></i> Admin</li>
                            </ul>
                            <p>{post.lang[languages.lang].description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <div className="blog-pagination">
            <div className="pagination-container">
                <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item" style={{cursor: 'pointer'}} >
                    <div className="page-link" href="#" aria-label="Previous" onClick={() => postIndex <= 0 ? setPostIndex(0) : (setPostIndex(postIndex - postsPerPages))}>
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </div>
                    </li>
                  
                    <li className="page-item"  style={{cursor: 'pointer'}} >
                        <div className="page-link" onClick={() => setPostIndex(0)} >1</div>
                    </li>

                      
                    <li className="page-item" style={{cursor: 'pointer'}} >
                    <div className="page-link" href="#" aria-label="Next" onClick={() => setPostIndex(postIndex + 3)}>
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </div>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
    </div>
  )
    }

export default Blog

import React from 'react'
import { Link } from 'react-router-dom';
import BlogBanner from '../../components/layout/BlogBanner'
import Slider from "react-slick";
import './style.css'

function TestingAndAssurance() {

  return (
    <div className="testing-and-assurance">
        <BlogBanner title="Testing and Quality Assurance" description="Meeting the strictest of standards for software" backgroundName="banner-testing-and-assurance.jpeg" />
        <div className="testing-definition">
          <div className="container">
            <div className="col-md-6 col-sm-12 col-12">
              <div className="image-wrap">
                <img   src={require('../../assets/images/testing-services-definition.png')} alt=" " />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
              <div className="content-wrap">  
                <h1>
                  Test early, test often
                </h1>
                <h2>
                Making sure nothing escapes our attention

                </h2>
                <p>
                Testing is an essential part of our process. We thoroughly test all the software we build or rewrite in manual, automation, and performance tests. All our testing steps like regression, load and stress tests, automation and CI are meant to make your software more efficient, usable, and reliable. We know earlier stability and fewer bugs mean shorter time to market and higher customer satisfaction.


                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testing-experience">
          <div className="container">
            <div className="col-md-4 col-sm-4 ">
              <div className="expertise">
                <h1>
                  Our Expertise
                </h1>
                <div>
                  <h4>Manual testing</h4>
                  <h4>Automated testing</h4>
                  <h4>Performance testing</h4>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-8 col-12">
              <Slider
              >
                <div>
                    <h1>
                Manual testing
                </h1>
                <span>
                Sharing the user’s perspective. 
                </span>
                <p>
                We test your
                    system based on the documentation and user stories to follow
                    real-life user scenarios. We prepare the test plans and test
                    cases to keep the requirements up to date. Our testing cycle
                    also includes exploratory and accessibility testing.
                  
                </p>
                <Link to="/contact-us" >Let’s talk</Link>
                  
                  </div>  
                <div>
                    <h1>
                Manual testing
                </h1>
                <span>
                Sharing the user’s perspective. 
                </span>
                <p>
                We test your
                    system based on the documentation and user stories to follow
                    real-life user scenarios. We prepare the test plans and test
                    cases to keep the requirements up to date. Our testing cycle
                    also includes exploratory and accessibility testing.
                  
                </p>
                <Link to="/contact-us" >Let’s talk</Link>
                  
                  </div>  
                <div>
                    <h1>
                Manual testing
                </h1>
                <span>
                Sharing the user’s perspective. 
                </span>
                <p>
                We test your
                    system based on the documentation and user stories to follow
                    real-life user scenarios. We prepare the test plans and test
                    cases to keep the requirements up to date. Our testing cycle
                    also includes exploratory and accessibility testing.
                  
                </p>
                <Link to="/contact-us" >Let’s talk</Link>
                  
                  </div>  
              </Slider>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default TestingAndAssurance
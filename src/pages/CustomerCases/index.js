import React from 'react'
import BlogBanner from '../../components/layout/BlogBanner'
import './style.css'

function CustomerCases() {
  return (
    <div className="customer-cases">
        <BlogBanner title="Customer Cases" backgroundName="background-customer-case.jpeg"  />
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="case-content">
                        <h1>Document Management System (DMS)</h1>
                        <p>How to accomplish what previous vendors couldn't? Find out!</p>
                        <a href="/" className="read-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="case-img">
                        <img src={require('../../assets/images/backgroup_customer-case.png')} alt=" " />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="case-content">
                        <h1>Language Exchange - HeyPal Nebula Software Corp</h1>
                        <p>An online eco-friendly P2B marketplace for sharing electric cars with tenants through insurance companies and car repair shops.</p>
                        <a href="/" className="read-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="case-img">
                        <img src={require('../../assets/images/background-customer-case2.png')} alt=" " />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="case-content">
                        <h1>MIC E-claim Military Insurance Company</h1>
                        <p>Building and expanding one of the largest online stores in Norway, Sweden, and Denmark.</p>
                        <a href="/" className="read-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="case-img">
                        <img src={require('../../assets/images/background-customer-case3.png')} alt=" " />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="case-content">
                        <h1>ゲームテクター (Gametector) Tabeena,Inc.</h1>
                        <p>How to accomplish what previous vendors couldn't? Find out!</p>
                        <a href="/" className="read-btn" >Read more</a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                    <div className="case-img">
                        <img src={require('../../assets/images/background-customer-case4.png')} alt=" " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerCases
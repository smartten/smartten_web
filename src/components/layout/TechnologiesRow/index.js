import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'

export default function SyncSlider() {

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

    return (
        <div className="technologies-row">
                <div className="container">
                <h2>Software quality assurance</h2>
                <p>Always testing to keep improving Handing your QA over to SMARTTEN will improve the quality of your software while reducing costs, saving development time, and maximizing your ROI.</p>
                <Slider className="technologies-slide-nav d-md-block d-none"
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        slidesToShow={6}
                        swipeToSlide={true}
                        focusOnSelect={true}
                >
                        <div>
                        <span>
                                <strong> e-Com</strong><br />
                                e-Commerce
                                </span>
                        </div>
                        <div>
                        <span>
                                <strong> UX</strong><br />
                                User Experience
                                </span>
                        </div>
                        <div>
                        <span>
                                <strong> QA</strong><br />
                                Quality Assurance
                                </span>
                        </div>
                        <div>
                        <span>
                                <strong> Azure</strong><br />
                                Cloud
                                </span>
                        </div>
                        <div>
                        <span>
                                <strong> Dynamics</strong><br />
                                MS Dynamics
                                </span>
                        </div>
                        <div>
                        <span>
                                <strong> DevOps</strong><br />
                                Services
                                </span>
                        </div>
                </Slider>
                <Slider className="technologies-slide-content" asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                        <div>
                                <span className="col-md-4 col-sm-4 col-4">
                                        
                                        <h2 >e-Com</h2>
                                        <h4>e-Commerce</h4>
                                </span>
                                <div className=" text col-md-8 col-sm-8 col-8">
                                        We support our clients throughout the entire ecommerce
                                        process, and we care about the success of their ventures.
                                        We’ve created multiple successful ecommerce solutions ranging
                                        from initial consulting to strategy and process design, to
                                        technical implementation and integration with existing IT
                                        infrastructure. We create solutions based on B2C and B2B
                                        models and work with platforms like Episerver, SAP Hybris,
                                        Shopify and Magento.
                                </div>
                        </div>
                        <div>
                        <span className="col-md-4 col-sm-4 col-4">
                                
                                        <h2 >UX</h2>
                                        <h4>
                                        User Experience <br />
                                        Design
                                        </h4>
                                </span>
                                <div className=" text col-md-8 col-sm-8 col-8">

                                Without a first-rate user experience, you’ll never stand out
                                in the crowd of local and international online stores. Our
                                designers can help you with interaction design, graphic
                                design, and user experiences that will keep your customers
                                coming back. We focus on designing a holistic customer
                                experience, with designs that look good and sell well.
                                </div>
                        </div>
                        <div>
                                <span className="col-md-4 col-sm-4 col-4">
                                        
                                        <h2 >QA</h2>
                                        <h4>Quality Assurance</h4>
                                </span>
                                <div className=" text col-md-8 col-sm-8 col-8">
                                QA is key for creating high-quality software while reducing
                                costs, saving development time, and maximizing your ROI from
                                newly developed IT solutions. SMARTTEN offers testing as part
                                of software development or a standalone service, for a single
                                application or your entire IT system. Our spectrum of testing
                                services is based on five cornerstones: functionality,
                                usability, security, performance, and compatibility testing.
                                </div>
                        </div>
                        <div>
                        <span className="col-md-4 col-sm-4 col-4">
                                
                                        <h2 >Azure</h2>
                                        <h4>Cloud</h4>
                                </span>
                                <div className=" text col-md-8 col-sm-8 col-8">
                                        We can help you build or integrate your public cloud
                                        applications with your existing IT environment using the
                                        Microsoft Azure cloud platform. Microsoft Azure provides
                                        on-demand compute and storage to host, scale, and manage web
                                        applications through Microsoft datacentres.
                                </div>
                        </div>
                        <div>
                        <span className="col-md-4 col-sm-4 col-4">
                                
                                <h2 >Dynamics</h2>
                                <h3>ERP</h3>
                                <h4>
                                MS Dynamics 365
                                </h4>
                                </span>
                                <div className=" text col-md-8 col-sm-8 col-8">
                                MS Dynamics 365 is one of Enterprise Resources Planning.<br /><br />
                                In need of interconnected solution to move your entire
                                business to the next level of effectiveness, you can trust the
                                SMARTTEN team. We can help you understand and embrace its
                                impact on business and IT, based on your priorities. We can
                                also organize workshops and roadmaps to detail and justify
                                your strategy for MS Dynamix 365 with business scenario
                                evaluation, target architecture, transformation roadmap,
                                implementation strategy, and business case.
                                </div>
                        </div>
                        <div>
                        <span className="col-md-4 col-sm-4 col-4">
                                
                                <h2 >DevOps</h2>
                                <h4>Services</h4>
                                </span>
                                <div className=" text col-md-8 col-sm-8 col-8">
                                Our DevOps services will guide you on the path to transforming
                                your software development lifecycle. Use the proven SMARTTEN
                                methodology to break down organizational silos, automate
                                software testing, streamline software release management, and
                                drive agility, while eliminating the bottleneck of sequential
                                development.
                                </div>
                        </div>
                </Slider>
                </div>
        </div>
  );
}
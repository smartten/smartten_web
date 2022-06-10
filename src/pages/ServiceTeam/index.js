import React from 'react'
import BlogBanner from '../../components/layout/BlogBanner'
import CountUp from 'react-countup';
import './style.css' 

function ServiceTeam() {
    

    

  return (
    <div className="team">
        <BlogBanner title="Dedicated Development Teams" backgroundName="banner-team.jpeg" description="Find best tech talent and rapidly scale your delivery capability. Let our engineers walk you through any challenges with deep expertise & great experience." />        
        <div className="container">
            <div className="team-achievements">
                <div className="col-md-12">
                    <div className="achievements-top">
                        <h1>What we do</h1>
                        <p>
                            Are you struggling to find the right talent for your business? Do you need a short term back-up for your core team? Do you need to scale quickly to meet customers' expectations?
                            <br/>
                            If your answers are “ Yes”, the Dedicated Team model might be a good fit for you.
                            <br />
                            At your request, we will pick the best-suited developers, and help you build up and manage your new development team.
                        </p>
                    </div>
                </div>
                <div className="col-md-12 ">
                    <div className="achievements-bottom">
                        <li className="col-md-4 col-sm-6 col-12">
                            <h4>
                                <span >
                                    <CountUp start={0} end={45} duration={4}></CountUp>
                                </span>+
                            </h4>
                            <div ></div>
                            <h6>Successful projects</h6>
                        </li>
                        <li className="col-md-4 col-sm-6 col-12">
                            <h4>
                                <span >
                                    <CountUp start={0} end={70} duration={4}></CountUp>
                                </span>+
                            </h4>
                            <div ></div>
                            <h6>IT Consultants</h6>
                        </li>
                        <li className="col-md-4 col-sm-6 col-12">
                            <h4>
                                <span >
                                    <CountUp start={0} end={25} duration={4}></CountUp>
                                </span>+
                            </h4>
                            <div ></div>
                            <h6>Engineers (Average team size)</h6>
                        </li>
                    </div>
                </div>
            </div>
        </div>
        <div className="team-services">
            <div className="container">
            <h1>What you get</h1>
            <div className="row-list">
                <div className="col-md-6 col-sm-12 col-12">
                    <img src={require('../../assets/images/team-service1.jpeg')} alt=" "/>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <div style={{width: '100%', padding:"35px 25px"}}>
                        <h2>
                        FIND NICHE EXPERTS AND SCALE UP QUICKLY

                        </h2>
                        <p>
                        Skills gap can be a headache, and recruitment is not always easy. That’s why we can help solve your problem by providing access to our huge talent pool.

                        </p>
                        <div className="line"></div>
                        <h2>
                        FULL DEDICATION TO THE PROJECT AND CLIENT

                        </h2>
                        <p>
                        Our team will work dedicately on your project full-time By establishing long term cooperation, you can leverage their skills to better serve your business.

                        </p>
                    </div>
                </div>
            </div>
            <div className="row-list">
                <div className="col-md-6 col-sm-12 col-12">
                    <img src={require('../../assets/images/team-service2.jpeg')} alt=" "/>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <div style={{width: '100%', padding:"35px 25px"}}>
                        <h2>
                        FULL CONTROL OVER THE TEAM

                        </h2>
                        <p>
                        You are free to assign the workload to the team, and can change your request at any moment.

                        </p>
                        <div className="line"></div>
                        <h2>
                        COMMUNICATION
                        </h2>
                        <p>
                        Day to day communication. Easy management by using web tools like Jira, Github, Slack...

                        </p>
                    </div>
                    </div>
            </div>
            <div className="row-list">
                <div className="col-md-6 col-sm-12 col-12">
                    <img src={require('../../assets/images/team-service3.jpeg')} alt=" "/>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <div style={{width: '100%', padding:"35px 25px"}}>
                        <h2>
                        PREDICTABLE COST

                        </h2>
                        <p>
                        No hidden fees. Our pricing is quite transparent and easy to predict.

                        </p>
                        <div className="line"></div>
                        <h2>
                        NO DAY-TO-DAY ADMIN WORK

                        </h2>
                        <p>
                        We handle all the operational duties including contract, payroll, employee retention, insurance, team building...etc.

                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="team-process">
            <div className="container">
                <h1>
                Working process

                </h1>
                <div className="process-list">
                    <div className="col-md-3 col-sm-6 col-12">
                        <div style={{backgroundColor:"#fff",height:"100%",padding:"25px", borderRadius:"10px", boxShadow:"0 0 2px rgb(0 0 0 /25%"}}>

                        <img src={require('../../assets/images/team-process-img1.png')} alt=""/>
                        <h1>
                        REQUIREMENTS DEFINITION

                        </h1>
                        <p>
                        After collecting requirements from you, we will scan our talents base to find appropriate talents and send you their profiles.

                        </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div style={{backgroundColor:"#fff",height:"100%",padding:"25px", borderRadius:"5px", boxShadow:"0 0 2px rgb(0 0 0 /25%"}}>

                        <img src={require('../../assets/images/team-process-img2.png')} alt=""/>
                        <h1>
                        INTERVIEWING/ TESTING PROCESS


                        </h1>
                        <p>
                        You can interview the candidates or give them online tests to make sure that they fit your criteria.


                        </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div style={{backgroundColor:"#fff",height:"100%",padding:"25px", borderRadius:"5px", boxShadow:"0 0 2px rgb(0 0 0 /25%"}}>

                        <img src={require('../../assets/images/team-process-img3.png')} alt=""/>
                        <h1>
                        PROJECT START


                        </h1>
                        <p>
                        After all details are ironed out and the teams are aligned, we will schedule a kick-off meeting to clarify the final details and begin working.


                        </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div style={{backgroundColor:"#fff",height:"100%",padding:"25px", borderRadius:"5px", boxShadow:"0 0 2px rgb(0 0 0 /25%"}}>

                        <img src={require('../../assets/images/team-process-img4.png')} alt=""/>
                        <h1>
                        ONGOING SUPPORT

                        </h1>
                        <p>
                        You will have full control over the team. We shall support you in your daily activity to ensure high productivity, efficiency, and motivation.

                        </p>
                        </div>
                    </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceTeam
import React from 'react'
import homeBanner from '../../assets/images/banner-home.jpg'
import homeExplode from '../../assets/images/home-explore.jpg'
import homeFounders from '../../assets/images/home-founders.jpg'
import CountUp from 'react-countup';
import './style.css'

function Home() {
  return (
    <div className='home'>
      <div className="home-banner">
        <div className='banner-image'>
          <img src={homeBanner} alt="homeBanner"></img>
        </div> 
        <div className="banner-content">
          <div className="content-container">
            <h1>ENCODE INNOVATION<br /> INTO YOUR BUSINESS</h1>
            <h2>We love helping start-up become brand names<br /> and corporation launch new products</h2>
            <button>
              <a href='#getQuoteModal'>get a free quote</a>
            </button>
          </div>
        </div>
        <div className="banner-index">
          <div className="index-lists">
            <div className="index-item">
              <span>
                <CountUp 
                  start={0} 
                  end={100}
                  duration={3.5}> 
                </CountUp>
                  +
              </span>
              <h3>
                Happy Clients
              </h3>
            </div>
            <div className="index-item">
              <span>
                <CountUp 
                  start={0} 
                  end={82}
                  duration={3.5}> 
                </CountUp>
                  %
              </span>
              <h3>
              Repeat Clients
              </h3>
            </div>
            <div className="index-item">
              <span>
                <CountUp 
                  start={0} 
                  end={300}
                  duration={3.5}> 
                </CountUp>
                  +
              </span>
              <h3>
              Finished Project

              </h3>
            </div>
            <div className="index-item">
              <span>
                <CountUp 
                  start={0} 
                  end={20}
                  duration={3.5}> 
                </CountUp>
                  +
              </span>
              <h3>
              Countries

              </h3>
            </div>
            <div className="index-item">
              <span>
                <CountUp 
                  start={0} 
                  end={15}
                  duration={3.5}> 
                </CountUp>
                  +
              </span>
              <h3>
              Resource Strength
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="home-explore">
        <div className="explore-image">
          <img src={homeExplode} alt="homeExplode" />
        </div>
        <div className="explore-content">
          <h2>INTERNET OF THINGS</h2>
          <p>As an IT Company, we offers you solutions through our services, our team experts combine the synergy of the traditional with modern to give you an innovative experience.
              We don’t just dream, we make I(o)T happen using excellent strategies:
              We believe making a DIFFERENCE can make businesses THRIVE.
              It has been working since our launch. We, at VolanSoft The Software Development Company, have steered new and established businesses to stun their clients with world-class digital experiences. In the course of time, VolanSoft has transformed into an industry Giant by implementing latest technology realms in our processes, while enhancing standards of quality, project management and, engineering. We develop long-lasting associations with our customers and put a great emphasis on quality and delivery.
          </p>
          <button>explore now</button>
          <button>start discussion</button>
        </div>
      </div>
      <div className="home-intro">
        <div className="intro-top">
          <p>The team at VolanSoft is challenging, pushy and innovative when it comes to design, development and inspired creativity. In short, we are the best where your nest your business.</p>
          <p>The digital market has been very competitive, while being critical for your business to get the best our technology. We empower your business to take advantage of new technologies. Our expert team allows your business to be responsive enough to enhance customer experience and productivity.</p>
        </div>
        <div className="intro-bottom">
          <img src={homeFounders} alt="homeFounders">
          </img>
          <div className="bottom-technology">
            <h2>TECHNOLOGIES</h2>
            <p>Volansoft IT company in Jaipur get to work with different technologies to offer tailored, flexible, integrated and scalable solutions to renovate your business strategy to meet the requirements of the digital world that we live in today.</p>
          </div>
          <div className="bottom-success">
            <h2>OUR SUCCESS</h2>
            <p>VolanSoft’s Success: Having been into the IoT sphere for several years and delivered more than 300 astonishing technology projects, we have gained expertise, experience and determination our clients look for in their development partners.</p>
          </div>
        </div>
      </div>
      <div className="home-services">
        <h2>Our Services</h2>
        <div className="services-lists">
          <div className="services-item ">
            <i className="fa-solid fa-laptop-code"></i>
            <h3>Web Development</h3>
            <p>The web development experts at VolanSoft help our clients with numerous aspects of the development process. We specialize in PHP, JS, and Java along with several other complex technologies.</p>
          </div>
          <div className="services-item ">
            <i className="fa-solid fa-mobile-screen"></i>
            <h3>Mobile App Development</h3>
            <p>With the technology team proficient in mobile architecture, testing and coding, VolanSoft builds and maintains Android, and iOS applications for its clients. We help our clients no matter what.</p>
          </div>
          <div className="services-item ">
            <i className="fa-solid fa-rocket"></i>
            <h3>Digital Marketing</h3>
            <p>Regardless of your market reach, internet marketing plays a crucial role in your business. Our Web Marketing team helps businesses from different industries, while customizing the services provided to them.</p>
          </div>
          <div className="services-item ">
            <i className="fa-solid fa-desktop"></i>
            <h3>User Experience Design</h3>
            <p>VolanSoft is one among the best UX design firms out there, with a proven track record of handcrafting stunning User Experience designs to meet its clients’ goals and vision.We believe that UX design is more about content-centric than user-centric. Our professional team crafts innovative experiences.</p>
          </div>
          <div className="services-item ">
            <i class="fa-regular fa-note-sticky"></i>
            <h3>Blockchain Development</h3>
            <p>We have extensive experience and comprehensive knowledge in Blockchain development, we have gained a detailed understanding of Blockchain technology, cloud services, AI and IoT. This makes our team deliver excellent Blockchain development services.</p>
          </div>
          <div className="services-item ">
            <i className="fa-solid fa-user-group"></i>
            <h3>IT Consultancy</h3>
            <p>We are a committed with best IT company consulting services company dedicated to empowering enterprises to thrive in the current complicated business atmosphere. We help our clients in defining the quantifiable business profits which can be achieved together. </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
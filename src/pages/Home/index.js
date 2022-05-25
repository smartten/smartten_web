import './style.scss';
import React from "react";
import Button from "../../components/layout/Button/Button"

import Process from "../../components/layout/Process/Process";
import background from "../../img/s1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCheck,
  faEnvelopesBulk,
  faPhone,
  faLayerGroup,
  faGem,
  faMobileScreen,
  faEnvelopeOpenText,
  faSquarePhoneFlip,
  faDesktop,
  faBook,
  faUserGroup,
  faRocket,
  faDisplay,
  faScrewdriverWrench,
  faPenNib,
  faTabletScreenButton,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import CountUp from "react-countup";

import exploreImg from "../../img/explore.jpg";

import foundersImg from "../../img/founders.jpg";

import backgroundHow from "../../img/dark_dot.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import ic1Img from "../../img/ic1.png";
import ic2Img from "../../img/ic2.png";
import ic3Img from "../../img/ic3.png";
import ic4Img from "../../img/ic4.png";
import ic5Img from "../../img/ic5.png";

import ic6Img from "../../img/ic6.png";
import ic7Img from "../../img/ic7.png";
import ic8Img from "../../img/ic8.png";
import ic9Img from "../../img/ic9.png";
import ic10Img from "../../img/ic10.png";
import ic11Img from "../../img/ic11.png";
import ic12Img from "../../img/ic12.png";
import ic13Img from "../../img/ic13.png";
import ic14Img from "../../img/ic14.png";
import ic15Img from "../../img/ic15.png";
import ic16Img from "../../img/ic16.png";
import ic17Img from "../../img/ic17.png";
import ic18Img from "../../img/ic18.png";
import ic19Img from "../../img/ic19.png";
import ic20Img from "../../img/ic19.png";

import backgroundFb from '../../img/bg2.jpg'
import cl1Img from '../../img/cl1.jpg'
import cl2Img from '../../img/cl2.jpg'
import cl3Img from '../../img/cl3.jpg'

function Home({ languages }) {
  const newsData = [
    {
      imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
      dataText: "17 Feb 2020",
      title: "Top Reasons to Choose Offshore App Developers",
      content:
        "As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
    },
    {
      imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
      dataText: "17 Feb 2020",
      title: "Top Reasons to Choose Offshore App Developers",
      content:
        "As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
    },
    {
      imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
      dataText: "17 Feb 2020",
      title: "Top Reasons to Choose Offshore App Developers",
      content:
        "As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
    },
    {
      imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
      dataText: "17 Feb 2020",
      title: "Top Reasons to Choose Offshore App Developers",
      content:
        "As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
    },
    {
      imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
      dataText: "17 Feb 2020",
      title: "Top Reasons to Choose Offshore App Developers",
      content:
        "As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
    },
    {
      imgUrl: "https://www.volansoft.com/upload/blog/1964985659184366816.png",
      dataText: "17 Feb 2020",
      title: "Top Reasons to Choose Offshore App Developers",
      content:
        "As indicated by market research, it has been assessed that there are over 2.7 billion smartphone users today. Hence, mobile app development... ",
    },
  ];

  return (
    <div className="home-page">
      <div className="home-banner"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="home-banner-container ">
          <div className="banner-intro">
            <div>
              <h1 className="banner-intro-title">ENCODE INNOVATION <br/> INTO YOUR BUSINESS</h1>

              <p className="banner-intro-title-desc">
                We love helping start-up become brand names <br/> and corporation launch new products
              </p>
              <button className="qoute">
                <a href="/">GET A FREE QUOTE</a>
              </button>
            </div>

            <div className="notice">
              <div className="notice-item">
                <span>
                  <CountUp start={0} end={100} duration={1.5} />+
                </span>
                <p className="banner-menu-desc">Happy Clients</p>
              </div>
              <div className="notice-item">
                <span>
                  <CountUp start={0} end={82} duration={1.5} />%
                </span>

                <p className="banner-menu-desc textWhite">Repeat Clients</p>
              </div>
              <div className="notice-item">
                <span>
                  <CountUp start={0} end={300} duration={1.5} />+
                </span>
                <p className="banner-menu-desc">Finished Project</p>
              </div>
              <div className="notice-item">
                <span>
                  <CountUp start={0} end={20} duration={1.5} />+
                </span>
                <p className="banner-menu-desc">Countries</p>
              </div>

              <div className="notice-item">
                <span>
                  <CountUp start={0} end={15} duration={1.5} />+
                </span>
                <p className="banner-menu-desc">Resource Strength</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="home-desc">
        <div className="home-desc-description">
          <div className="explore-img">
            <img src={exploreImg}></img>
          </div>
          <div className="home-square"></div>
          <div className="home-desc-text">
            <h1 className="home-desc-text-one">INTERNET OF THINGS</h1>
            <p className="home-desc-two tit beau  ">
              As an IT Company, we offers you solutions through our services,
              our team experts combine the synergy of the traditional with
              modern to give you an innovative experience.
            </p>
            <p className="home-desc-three beau">
              We don’t just dream, we make I(o)T happen using excellent
              strategies:
            </p>
            <p className="home-desc-desc-four tit beau  ">
              We believe making a DIFFERENCE can make businesses THRIVE.
            </p>
            <p className="desc-five beau">
              It has been working since our launch. We, at VolanSoft{" "}
              <span className="Desc-one tit ">
                The Software Development Company
              </span>
              , have steered new and established businesses to stun their
              clients with world-class digital experiences. In the course of
              time, VolanSoft has transformed into an industry Giant by
              implementing latest technology realms in our processes, while
              enhancing standards of quality, project management and,
              engineering. We develop long-lasting associations with our
              customers and put a great emphasis on quality and delivery.
            </p>
            <div className="home-desc-btn">
              <button className="desc-btn-bt-ex ">

                  <a href="/">EXPLORE NOW</a>

              </button>
              <button className="desc-btn-bt-ex ">

                  <a href="/"> START DISCUSSION</a>

              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-category-container">
          <div className="home-category">
                <div className="category-top">
                  <div className="cate-t-left">
                    <p>
                      The team at VolanSoft is challenging, pushy and innovative when it
                      comes to design, development and inspired creativity. In short, we
                      are the best where your nest your business.
                    </p>
                  </div>

                  <div className="cate-t-right">
                    <p>
                      The digital market has been very competitive, while being critical
                      for your business to get the best our technology. We empower your
                      business to take advantage of new technologies. Our expert team
                      allows your business to be responsive enough to enhance customer
                      experience and productivity.
                    </p>
                  </div>
                </div>

            <div className="category-down">
              <div className="category-d-left">
                <div className="founders-img">
                  <img className="img-child" src={foundersImg}></img>
                </div>
              </div>

              <div className="category-d-right">
                <div className="cate-d-right-card">
                  <div className="cate-d-right-card-icon">
                    <a>
                      {" "}
                      <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
                    </a>
                  </div>
                  <h1>TECHNOLOGIES</h1>
                  <p>
                    Volansoft{" "}
                    <span className="jaipur-title">IT company in Jaipur</span> get
                    to work with different technologies to offer tailored, flexible,
                    integrated and scalable solutions to renovate your business
                    strategy to meet the requirements of the digital world that we
                    live in today.
                  </p>
                </div>

                <div className="cate-d-right-card">
                  <div className="cate-d-right-card-icon">
                    <a>
                      {" "}
                      <FontAwesomeIcon icon={faGem}></FontAwesomeIcon>
                    </a>
                  </div>
                  <h1>OUR SUCCESS</h1>
                  <p>
                    VolanSoft’s Success: Having been into the IoT sphere for several
                    years and delivered more than 300 astonishing technology
                    projects, we have gained expertise, experience and determination
                    our clients look for in their development partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="home-service-container">
        <div className="home-service">
          <div className="services">
            <h1 className="services-title">Our Services</h1>
          </div>
          <div className="services-option">
            <div className="services-option-above  ">
              <div className="above-one frame bro">
                <div className="ic">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="title">Web Development</h1>
                <p className="jus">
                  The web development experts at VolanSoft help our clients with
                  numerous aspects of the development process. We specialize in
                  PHP, JS, and Java along with several other complex technologies.
                </p>
              </div>

              <div className="above-one frame bro">
                <div className="ic">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faMobileScreen}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="title">Mobile App Development</h1>
                <p className="jus">
                  With the technology team proficient in mobile architecture,
                  testing and coding, VolanSoft builds and maintains Android, and
                  iOS applications for its clients. We help our clients no matter
                  what.
                </p>
              </div>

              <div className="above-one frame bro">
                <div className="ic">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="title">Digital Marketing</h1>
                <p className="jus">
                  Regardless of your market reach, internet marketing plays a
                  crucial role in your business. Our Web Marketing team helps
                  businesses from different industries, while customizing the
                  services provided to them.
                </p>
              </div>
            </div>
            <div className="services-option-below">
              <div className="above-one frame bro">
                <div className="ic">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faDisplay}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="title">User Experience Design</h1>
                <p className="jus">
                  VolanSoft is one among the best UX design firms out there, with
                  a proven track record of handcrafting stunning User Experience
                  designs to meet its clients’ goals and vision.We believe that UX
                  design is more about content-centric than user-centric. Our
                  professional team crafts innovative experiences.
                </p>
              </div>

              <div className="above-one frame bro">
                <div className="ic">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="title">Mobile App Development</h1>
                <p className="jus">
                  We have extensive experience and comprehensive knowledge in
                  Blockchain development, we have gained a detailed understanding
                  of Blockchain technology, cloud services, AI and IoT. This makes
                  our team deliver excellent Blockchain development services.
                </p>
              </div>

              <div className="above-one frame bro">
                <div className="ic">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="title">IT Consultancy</h1>
                <p className="jus">
                  We are a committed with best IT company consulting services
                  company dedicated to empowering enterprises to thrive in the
                  current complicated business atmosphere. We help our clients in
                  defining the quantifiable business profits which can be achieved
                  together.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="News">
        <div className="News-container">
          <h2 className="News-Title">Latest Blogs, News And Insights</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={56}
            slidesPerGroup={3}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {newsData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="NewsItem">
                  <div className="NewsItemImg">
                    <img src={data.imgUrl} alt="" className="ItemImg" />
                    <div className="NewsItemInfo">
                      <span className="ItemDateText">{data.Text}</span>
                      <span className="Admin">Admin</span>
                    </div>
                  </div>
                  <div className="NewsItemMain">
                    <h3 className="ItemTitle">{data.title}</h3>
                    <p className="ItemContent">{data.content}</p>
                    <Button
                      color={"#fff"}
                      padding="12px 16px"
                      content={"Read more"}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Process />
      <div className="home-how">
        <div className="how"
          style={{ backgroundImage: `url(${backgroundHow})` }}
        >
          <div className="how-title">
            <h1>How We Stand Out</h1>
          </div>

          <div className="how-desc">
            <div className="how-desc-container">
              <div className="how-desc-one-t">
                <div className="how-icon">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="font">Full-Stack Development</h1>
                <p className="how-icon-bt-h">We do it all. Top to Bottom. Front to Back.</p>
              </div>

              <div className="how-desc-one-t">
                <div className="how-icon">
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faScrewdriverWrench}
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="font">Easily Updatable</h1>
                <p className="how-icon-bt-h">
                  We build with the future in mind by ensuring future updates
                  are easy and quick
                </p>
              </div>

              <div className="how-desc-one-t">
                <div className="how-icon">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faPenNib}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="font">Fabulous Design</h1>
                <p className="how-icon-bt-h">
                  We focus a lot of effort on design. What looks good, feels
                  good.
                </p>
              </div>
              <div className="how-desc-one-t">
                <div className="how-icon">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="font">Performance</h1>
                <p className="how-icon-bt-h">We create light-weight, high-speed software</p>
              </div>

              <div className="how-desc-one-t">
                <div className="how-icon">
                  <a>
                    {" "}
                    <FontAwesomeIcon
                      icon={faTabletScreenButton}
                    ></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="font">Fully Responsive</h1>
                <p className="how-icon-bt-h">Mobile is the future... We design for it</p>
              </div>

              <div className="how-desc-one-t">
                <div className="how-icon">
                  <a>
                    {" "}
                    <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon>
                  </a>
                </div>
                <h1 className="font">Support</h1>
                <p className="how-icon-bt-h">We are always here for you 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-client">
        <div className="client">
          <div className="client-title">
            <h1>Our Client</h1>
            <p>We love our clients and the feeling is mutual.</p>
          </div>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={true}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            loopFillGroupWithBlank={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="client-swiper">
                <a href="https://github.com/">
                  <img className="img-icon" src={ic1Img}></img>
                </a>
              </div>

              <div></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-swiper">
                <a href="https://github.com/">
                  <img className="img-icon" src={ic2Img}></img>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic3Img}></img>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic4Img}></img>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic5Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic6Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic7Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic8Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic9Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic10Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic11Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic12Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic13Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic14Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic15Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic16Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic17Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic18Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic19Img}></img>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="client-swiper">
                <a>
                  <img className="img-icon" src={ic20Img}></img>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="fb">
        <div
          className="fb-say"
          style={{ backgroundImage: `url(${backgroundFb})` }}
        >
          <div className="fb-titl">
            <h1>Our Clients Say</h1>
          </div>

          <div className="fb-des">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="fb-swiper">
                  <img className="cl-img" src={cl1Img}></img>
                  <div>
                    <h1>
                      VolanSoft is a truly professional company. They have
                      helped our company get to a new level of service
                      excellence!
                    </h1>
                  </div>

                  <div>
                    <p className="fname">Mr. Ashish Somani</p>
                    <p className="fdesc">CEO, Somani Threads</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="fb-swiper">
                  <img className="cl-img" src={cl2Img}></img>
                  <div>
                    <h1>
                      VolanSoft came in and saved the day! They are very easy to
                      work with, and very understanding of changes as the
                      project moved along.
                    </h1>
                  </div>

                  <div>
                    <p className="fname">Mr. Olaoluwa Izuchi</p>
                    <p className="fdesc">Founder, Diadal Nigeria LTD</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="fb-swiper">
                  <img className="cl-img" src={cl3Img}></img>
                  <div>
                    <h1>
                      Flexibility and on-time delivery. VolanSoft team has
                      strong technical experience and execution capabilities.
                    </h1>
                  </div>

                  <div>
                    <p className="fname">Mr. Pankaj Marothiya</p>
                    <p className="fdesc">Founder, Centreum</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;

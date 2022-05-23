import React from 'react';
import foundersImg from '../../../img/founders.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faLocationDot, faEnvelopeOpenText, faSquarePhoneFlip, faLayerGroup, faGem } from '@fortawesome/free-solid-svg-icons';
import './style.css';



export default function Category() {
    return (




        <div className="category">
            <div className="category-top">
                <div className="cate-t-left">
                    <p>The team at VolanSoft is challenging, pushy and innovative when it comes to design, development and inspired creativity. In short, we are the best where your nest your business.</p>
                </div>

                <div className="cate-t-right">
                    <p>The digital market has been very competitive, while being critical for your business to get the best our technology. We empower your business to take advantage of new technologies. Our expert team allows your business to be responsive enough to enhance customer experience and productivity.</p>
                </div>
            </div>
            <div className="category-down">
                <div className="category-d-left">
                    <div className="founders-img"><img className="img-child" src={foundersImg}></img></div>
                </div>

                <div className="category-d-right">
                    <div className="cate-d-right-card">
                        <div className="icon"><a> <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon></a></div>
                        <h1>TECHNOLOGIES</h1>
                        <p>Volansoft <span className="jaipur-title">IT company in Jaipur</span> get to work with different technologies to offer tailored, flexible, integrated and scalable solutions to renovate your business strategy to meet the requirements of the digital world that we live in today.</p>
                    </div>

                    <div className="cate-d-right-card">
                        <div className="icon" ><a> <FontAwesomeIcon icon={faGem}></FontAwesomeIcon></a></div>
                        <h1>OUR SUCCESS</h1>
                        <p>VolanSoft’s Success: Having been into the IoT sphere for several years and delivered more than 300 astonishing technology projects, we have gained expertise, experience and determination our clients look for in their development partners.</p>
                    </div>
                </div>


            </div>
        </div>





    )
}

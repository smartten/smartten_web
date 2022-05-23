import React from 'react'

import exploreImg from '../../../img/explore.jpg'
import './style.css'
// import exploreImg from '../../image/explore.jpg'
// export default function Desc() {
//   return (
//     <div>
//         <p>hgj</p>
//     </div>
//   )
// }

const Desc = () => {
  return (
    <>
      <div>
          <div className="description">
            <div className="explore-img"><img src={exploreImg}></img></div>
            <div className="square"></div>
            <div className="desc-text">
                  <h1 className="desc-one  ">INTERNET OF THINGS</h1>
                  <p className="desc-two tit beau  ">As an IT Company, we offers you solutions through our services, our team experts combine the synergy of the traditional with modern to give you an innovative experience.</p>
                  <p className="desc-three beau">We don’t just dream, we make I(o)T happen using excellent strategies:</p>
                  <p className="desc-four tit beau  ">We believe making a DIFFERENCE can make businesses THRIVE.</p>
                  <p className="desc-five beau">It has been working since our launch. We, at VolanSoft <span className="Desc-one tit ">The Software Development Company</span>, have steered new and established businesses to stun their clients with world-class digital experiences. In the course of time, VolanSoft has transformed into an industry Giant by implementing latest technology realms in our processes, while enhancing standards of quality, project management and, engineering. We develop long-lasting associations with our customers and put a great emphasis on quality and delivery.</p>
                <div className="desc-btn">
                    <button className="bt-ex ">
                        <p className="bt-ex-one"><a>EXPLORE NOW</a></p>
                    </button>
                    <button className="bt-ex ">
                        <p className="bt-ex-two"><a> START DISCUSSION</a></p>
                    </button>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Desc
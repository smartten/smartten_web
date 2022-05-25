import React from "react";
import "./Career.scss";
import backgroundCareer1 from "../../img/banner-career.jpg";
import backgroundCareer2 from "../../img/career2.png";
const Career = () => {
  return (
    <div className="Career">
      <div className="CareerTop">
        <div
          className="CareerTopBg"
          style={{ backgroundImage: `url(${backgroundCareer1})` }}
        >
          <div className="TopBgDesc">
            <h1>Career</h1>
            <p>
              Our aim is to apply Technological Solutions to your Business
              Objectives & Ideas
            </p>
          </div>
        </div>
      </div>

      <div className="CareerBottom">
        <div className="CareerBottomLeft">
          <div
            className="BottomLeftBg"
            style={{ backgroundImage: `url(${backgroundCareer2})` }}
          ></div>
          <div className="BottomLeftDesc">
            <h2>Why join VolanSoft???</h2>
            <p>
              Simple. <span>We love what we do.</span>
              We’ve been creating amazing mobile and connected experiences since
              5+ years. We are working in a direction to set some era in the
              web/mobile app development field.
            </p>

            <p>
              We believe in passionate people. Our skilled team work together to
              do what’s never been done before, everyday. Combining the office
              in Jaipur and the world’s prestigious global clients, we create
              the best opportunity for learning and expanding your know-how.
              Today, VolanSoft is actively designing and developing meaningful
              and challenging projects, using cutting-edge tech only, with the
              ultimate goad of raising the bar even higher.
            </p>

            <p>Reasons to join us-</p>

            <p>VolanSoft would love to hire your awesomeness.</p>
            <p>We do the projects others think are too hard to manage.</p>
            <p>Obsessed with what’s next, and cutting-edge tech.</p>
            <p>We strive for the better and think globally.</p>

            <p>
              Grow your career at VolanSoft. Come work and play with the very
              best developers, designers and strategists. Don’t just take our
              word for it: We’ve been named a Great Place to Work, come here and
              you’ll see how much we love working.
            </p>
          </div>
        </div>
        <div className="CareerBottomRight">
          
        </div>
      </div>
    </div>
  );
};

export default Career;

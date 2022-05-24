import React from "react";
import "./Career.scss";
import backgroundCareer from "../../img/banner-career.jpg";

const Career = () => {
  return (
    <div>
      <div
      className="Career"
      style={{ backgroundImage: `url(${backgroundCareer})` }}
    >
      <div className="CareerDesc">
        <h1 className="DescTitle">Career</h1>
        <p className="DescSub">
          Our aim is to apply Technological Solutions to your Business
          Objectives & Ideas
        </p>
      </div>
    </div>
    
    </div>

   

   
  );
};

export default Career;

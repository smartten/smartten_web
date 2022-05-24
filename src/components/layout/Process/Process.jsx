import React from "react";
import "./Process.scss";
import TimeLine from "../TimeLine/TimeLine";

const Process = () => {
  return (
    <div className="Process">
      <div className="Process-container">
        <div className="Process-container-content">
          <div className="Process-Title">
            Web And Mobile App Development Process
          </div>
          <div className="Process-Desc">
            We are well-known for crafting eye catchy and most innovative Web &
            Mobile Apps. We provide our clients with a wide array of customized
            software services{" "}
            <a href="">in the mobile and web app development</a> realm. Our
            products and skilled team are engineered for bringing growth to our
            clients’ businesses. Moreover, we understand that it is the most
            important thing to deliver services without making any compromise on
            quality and time.
          </div>
        </div>
      </div>
      <TimeLine />
    </div>
  );
};

export default Process;

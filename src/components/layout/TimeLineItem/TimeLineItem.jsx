import React from "react";
import TimePoints from "../TimePoints/TimePoints";
import "./TimeLineItem.scss";

const TimeLineItem = ({ name, description, direction, num }) => {
  return (
    <div className="TimeLineItem">
      <div className="TimeLineItem-container">
        {direction && (
          <>
            <div className="TimeLineItem-name">{name}</div>
            <div className="TimeLineItem-description">{description}</div>
          </>
        )}
      </div>
      <TimePoints direction={direction} num={num} />
      <div className="TimeLineItem-container">
        {!direction && (
          <>
            <div className="TimeLineItem-name">{name}</div>
            <div className="TimeLineItem-description">{description}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default TimeLineItem;

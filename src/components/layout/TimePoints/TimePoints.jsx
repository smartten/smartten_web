import React from "react";
import "./TimePoints.scss";
const TimePoints = ({ direction, num }) => {
	return (
		<div className="TimePoints">
			<div
				style={{
					backgroundColor: direction ? "#000" : "transparent",
				}}
				className="TimePoints-up"
			></div>
			<div className="TimePoints-num">{num}
      <div className="TimePoints-horizontal"></div>
      </div>
			<div
				style={{
					backgroundColor: !direction ? "#000" : "transparent",
				}}
				className="TimePoints-down"
			></div>
		</div>
	);
};

export default TimePoints;
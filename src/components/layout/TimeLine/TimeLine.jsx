import React from "react";
import TimeLineItem from "../TimeLineItem/TimeLineItem";
import "./TimeLine.scss";

const timelineData = [
  {
    name: "Discovery",
    description:
      "First, we’ll take a deep dive into your documentation, requirements, business objectives and goals.",
  },
  {
    name: "Planning",
    description:
      "We set up the formative designs that supports the software usability and findability of its information.",
  },
  {
    name: "Design",
    description:
      "Now, we’ll create a structural design that supports the software usability and findability of its information.",
  },

  {
    name: "Development",
    description:
      "Let the coding begin! In this phase, our software engineers build, implement, test, and document.",
  },


  {
    name: "Testing – QA – Launch",
    description: "Checking the apps for gaps and bugs to rid the same if any.",
  },
  {
    name: "Maintenance",
    description:
      "Once Applications are launched, VolanSoft keeps the Apps updated through innovative programs and processes.",
  },
];

const TimeLine = () => {
  return (
    <div className="TimeLine">
      {timelineData.map((data, index) => (
        <TimeLineItem
          key={index}
          name={data.name}
          description={data.description}
          direction={index % 2 === 0}
          num={index + 1}
        />
      ))}
    </div>
  );
};

export default TimeLine;

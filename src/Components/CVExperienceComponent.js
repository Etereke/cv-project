import React from "react";

const CVExperienceComponent = (props) => {
  let { sectionName, companyList } = props;
  return (
    <div className="CVExperienceComponent">
      <h1>{sectionName}</h1>
      {companyList.map((item) => {
        return (
          <div key={item.id}>
            {item.name ? item.name : "Company name"},{" "}
            {item.city ? item.city : "City name"} -{" "}
            {item.position ? item.position : "Position"},{" "}
            {item.duration ? item.duration : "duration"} years
          </div>
        );
      })}
    </div>
  );
};

export default CVExperienceComponent;

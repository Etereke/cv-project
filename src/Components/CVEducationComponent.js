import React from "react";

const CVEducationComponent = (props) => {
  let { sectionName, schoolList } = props;

  return (
    <div className="CVEducationComponent">
      <h1>{sectionName}</h1>
      {schoolList.map((item) => {
        return (
          <div key={item.id}>
            {item.name ? item.name : "School name"}, finished in{" "}
            {item.finishDate ? item.finishDate : "finish date"}
          </div>
        );
      })}
    </div>
  );
};

export default CVEducationComponent;

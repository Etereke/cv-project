import React from "react";
import CVEducationComponent from "./CVEducationComponent";
import CVExperienceComponent from "./CVExperienceComponent";

const CVComponent = (props) => {
  let { generalInfo, schoolList, companyList } = props;
  return (
    <div className="cvWrapper">
      <div className="cv-component">
        <div className="CVGeneralInfo">
          <h1>{generalInfo.name ? generalInfo.name : "Name"}</h1>
          <h6>{generalInfo.email ? generalInfo.email : "email@email"}</h6>
          <h6>{generalInfo.phone ? generalInfo.phone : "+36123456789"}</h6>
          <h6>
            {generalInfo.address
              ? generalInfo.address
              : "1111 Nekeresd, Nincsmeg u. 999"}
          </h6>
        </div>
        <CVEducationComponent sectionName="Education" schoolList={schoolList} />
        <CVExperienceComponent
          sectionName="Experience"
          companyList={companyList}
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.toggleDisplayMode(false);
        }}
      >
        Edit CV
      </button>
    </div>
  );
};

export default CVComponent;

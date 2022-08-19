import React, { Component } from "react";
import CVEducationComponent from "./CVEducationComponent";
import CVExperienceComponent from "./CVExperienceComponent";

class CVComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { generalInfo, schoolList, companyList } = this.props;
    return (
      <div className="cv-component">
        <h1>{generalInfo.name}</h1>
        <h6>{generalInfo.email}</h6>
        <h6>{generalInfo.phone}</h6>
        <h6>{generalInfo.address}</h6>
        <CVEducationComponent sectionName="Education" schoolList={schoolList} />
        <CVExperienceComponent
          sectionName="Experience"
          companyList={companyList}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.toggleDisplayMode(false);
          }}
        >
          Edit CV
        </button>
      </div>
    );
  }
}

export default CVComponent;

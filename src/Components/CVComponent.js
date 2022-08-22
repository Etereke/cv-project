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
          <CVEducationComponent
            sectionName="Education"
            schoolList={schoolList}
          />
          <CVExperienceComponent
            sectionName="Experience"
            companyList={companyList}
          />
        </div>
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

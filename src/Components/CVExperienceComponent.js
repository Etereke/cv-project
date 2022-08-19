import React, { Component } from "react";
import uniqid from "uniqid";

class CVExperienceComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { sectionName, companyList } = this.props;
    return (
      <div className="CVExperienceComponent">
        <h1>{sectionName}</h1>
        {companyList.map((item) => {
          return (
            <div key={uniqid()}>
              {item.name}, {item.city} - {item.position}, {item.duration}{" "}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CVExperienceComponent;

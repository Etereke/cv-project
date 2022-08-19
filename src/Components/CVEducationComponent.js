import React, { Component } from "react";
import uniqid from "uniqid";

class CVEducationComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { sectionName, schoolList } = this.props;
    return (
      <div className="CVEducationComponent">
        <h1>{sectionName}</h1>
        {schoolList.map((item) => {
          return (
            <div key={uniqid()}>
              {item.name}, finished in {item.finishDate}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CVEducationComponent;

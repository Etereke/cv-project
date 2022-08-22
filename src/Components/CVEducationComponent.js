import React, { Component } from "react";

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
            <div key={item.id}>
              {item.name ? item.name : "School name"}, finished in{" "}
              {item.finishDate ? item.finishDate : "finish date"}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CVEducationComponent;

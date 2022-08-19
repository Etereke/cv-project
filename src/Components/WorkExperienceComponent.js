import React, { Component } from "react";
import uniqid from "uniqid";

class WorkExperienceComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { legend, companyList, handlerFunctions } = this.props;

    return (
      <fieldset>
        <legend>
          {legend}{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              handlerFunctions.Add("company");
            }}
          >
            +Add
          </button>{" "}
        </legend>
        {companyList.map((item) => {
          return (
            <div key={item.id}>
              <label>Company</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => {
                  handlerFunctions.EditInfo(
                    "name",
                    e.target.value,
                    "company",
                    item.id
                  );
                }}
              />
              <label>Location</label>
              <input
                type="text"
                value={item.city}
                onChange={(e) => {
                  handlerFunctions.EditInfo(
                    "city",
                    e.target.value,
                    "company",
                    item.id
                  );
                }}
              />
              <label>Position</label>
              <input
                type="text"
                value={item.position}
                onChange={(e) => {
                  handlerFunctions.EditInfo(
                    "position",
                    e.target.value,
                    "company",
                    item.id
                  );
                }}
              />
              <label>Duration (years)</label>
              <input
                type="text"
                value={item.duration}
                onChange={(e) => {
                  handlerFunctions.EditInfo(
                    "duration",
                    e.target.value,
                    "company",
                    item.id
                  );
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlerFunctions.Delete(item.id, "company");
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </fieldset>
    );
  }
}

export default WorkExperienceComponent;

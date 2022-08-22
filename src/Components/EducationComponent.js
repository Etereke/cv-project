import React, { Component } from "react";

class EducationComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { legend, schoolList, handlerFunctions } = this.props;

    return (
      <fieldset className="educationComponent">
        <legend>
          {legend}{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              handlerFunctions.Add("school");
            }}
          >
            +Add
          </button>{" "}
        </legend>
        {schoolList.map((item) => {
          return (
            <div key={item.id} className="entityInputData">
              <div className="inputField">
                <label>School</label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => {
                    handlerFunctions.EditInfo(
                      "name",
                      e.target.value,
                      "school",
                      item.id
                    );
                  }}
                />
              </div>
              <div className="inputField">
                <label>Finish Date</label>
                <input
                  type="text"
                  value={item.finishDate}
                  onChange={(e) => {
                    handlerFunctions.EditInfo(
                      "finishDate",
                      e.target.value,
                      "school",
                      item.id
                    );
                  }}
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlerFunctions.Delete(item.id, "school");
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

export default EducationComponent;

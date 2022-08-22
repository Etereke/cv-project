import React, { Component } from "react";

class GeneralInfoComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { legend, generalInfo, handlerFunctions } = this.props;

    return (
      <fieldset className="generalInfo">
        <legend>{legend}</legend>
        <div className="inputField">
          <label>name</label>
          <input
            type="text"
            value={generalInfo.name}
            onChange={(e) => {
              handlerFunctions.EditInfo("name", e.target.value, "general");
            }}
          />
        </div>
        <div className="inputField">
          <label>email</label>
          <input
            type="text"
            value={generalInfo.email}
            onChange={(e) => {
              handlerFunctions.EditInfo("email", e.target.value, "general");
            }}
          />
        </div>
        <div className="inputField">
          <label>phone</label>
          <input
            type="text"
            value={generalInfo.phone}
            onChange={(e) => {
              handlerFunctions.EditInfo("phone", e.target.value, "general");
            }}
          />
        </div>
        <div className="inputField">
          <label>address</label>
          <input
            type="text"
            value={generalInfo.address}
            onChange={(e) => {
              handlerFunctions.EditInfo("address", e.target.value, "general");
            }}
          />
        </div>
      </fieldset>
    );
  }
}

export default GeneralInfoComponent;

import React, { Component } from "react";
import uniqid from "uniqid";

class GeneralInfoComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { legend, generalInfo, handlerFunctions } = this.props;

    return (
      <fieldset>
        <legend>{legend}</legend>
        <div>
          <label>name</label>
          <input
            type="text"
            value={generalInfo.name}
            onChange={(e) => {
              handlerFunctions.EditInfo("name", e.target.value, "general");
            }}
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="text"
            value={generalInfo.email}
            onChange={(e) => {
              handlerFunctions.EditInfo("email", e.target.value, "general");
            }}
          />
        </div>
        <div>
          <label>phone</label>
          <input
            type="text"
            value={generalInfo.phone}
            onChange={(e) => {
              handlerFunctions.EditInfo("phone", e.target.value, "general");
            }}
          />
        </div>
        <div>
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

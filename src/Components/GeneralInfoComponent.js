import React from "react";

const GeneralInfoComponent = (props) => {
  let { legend, generalInfo, handlerFunctions } = props;

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
            console.log(e.target.value);
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
};

export default GeneralInfoComponent;

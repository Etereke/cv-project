import React from "react";

const WorkExperienceComponent = (props) => {
  let { legend, companyList, handlerFunctions } = props;

  return (
    <fieldset className="workExperienceComponent">
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
          <div key={item.id} className="entityInputData">
            <div className="inputField">
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
            </div>
            <div className="inputField">
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
            </div>
            <div className="inputField">
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
            </div>
            <div className="inputField">
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
            </div>
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
};

export default WorkExperienceComponent;

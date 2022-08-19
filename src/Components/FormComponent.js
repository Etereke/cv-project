import React, { Component } from "react";
import FormSectionComponent from "./FormSectionComponent";
import uniqid from "uniqid";

class FormComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      handlerFunctions,
      toggleDisplayMode,
      schoolList,
      companyList,
      generalInfo,
    } = this.props;
    return (
      <div className="form-component">
        <form action="" id="cvForm">
          <h1>CV Application</h1>
          <fieldset>
            <legend>General info</legend>
            <div>
              <label>name</label>
              <input
                type="text"
                value={generalInfo.name}
                onChange={(e) => {
                  handlerFunctions.EditGeneralInfo("name", e.target.value);
                }}
              />
            </div>
            <div>
              <label>email</label>
              <input
                type="text"
                value={generalInfo.email}
                onChange={(e) => {
                  handlerFunctions.EditGeneralInfo("email", e.target.value);
                }}
              />
            </div>
            <div>
              <label>phone</label>
              <input
                type="text"
                value={generalInfo.phone}
                onChange={(e) => {
                  handlerFunctions.EditGeneralInfo("phone", e.target.value);
                }}
              />
            </div>
            <div>
              <label>address</label>
              <input
                type="text"
                value={generalInfo.address}
                onChange={(e) => {
                  handlerFunctions.EditGeneralInfo("address", e.target.value);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>
              Education{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlerFunctions.AddSchool();
                }}
              >
                +Add
              </button>{" "}
            </legend>
            {schoolList.map((item) => {
              return (
                <div key={item.id}>
                  <label>School</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      handlerFunctions.EditSchoolInfo(
                        item.id,
                        "name",
                        e.target.value
                      );
                    }}
                  />
                  <label>Finish Date</label>
                  <input
                    type="text"
                    value={item.finishDate}
                    onChange={(e) => {
                      handlerFunctions.EditSchoolInfo(
                        item.id,
                        "finishDate",
                        e.target.value
                      );
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handlerFunctions.DeleteSchool(item.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </fieldset>
          <fieldset>
            <legend>
              Past work experience{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlerFunctions.AddCompany();
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
                      handlerFunctions.EditCompanyInfo(
                        item.id,
                        "name",
                        e.target.value
                      );
                    }}
                  />
                  <label>Location</label>
                  <input
                    type="text"
                    value={item.city}
                    onChange={(e) => {
                      handlerFunctions.EditCompanyInfo(
                        item.id,
                        "city",
                        e.target.value
                      );
                    }}
                  />
                  <label>Position</label>
                  <input
                    type="text"
                    value={item.position}
                    onChange={(e) => {
                      handlerFunctions.EditCompanyInfo(
                        item.id,
                        "position",
                        e.target.value
                      );
                    }}
                  />
                  <label>Duration (years)</label>
                  <input
                    type="text"
                    value={item.duration}
                    onChange={(e) => {
                      handlerFunctions.EditCompanyInfo(
                        item.id,
                        "duration",
                        e.target.value
                      );
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handlerFunctions.DeleteCompany(item.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </fieldset>
          {/* <FormSectionComponent groupName="General info" />
          <FormSectionComponent
            groupName="Education"
            AddItem={handlerFunctions.AddSchool}
            itemList={schoolList}
          />
          <FormSectionComponent
            groupName="Previous work experience"
            AddItem={handlerFunctions.AddCompany}
            itemList={companyList}
          /> */}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              toggleDisplayMode(true);
            }}
          >
            Generate CV
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;

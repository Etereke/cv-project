import React, { Component } from "react";
import FormSectionComponent from "./FormSectionComponent";

class FormComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { handlerFunctions, toggleDisplayMode, schoolList, companyList } =
      this.props;
    return (
      <div className="form-component">
        <form action="" id="cvForm">
          <h1>CV Application</h1>
          <FormSectionComponent
            groupName="General info"
            fieldNames={["name", "email", "phone", "address"]}
            hasButtons={false}
          />
          <FormSectionComponent
            groupName="Education"
            fieldNames={["school", "finish date"]}
            hasButtons={true}
            AddItem={handlerFunctions.AddSchool}
            itemList={schoolList}
          />
          <FormSectionComponent
            groupName="Previous work experience"
            fieldNames={["company", "position", "city", "duration"]}
            hasButtons={true}
            AddItem={handlerFunctions.AddCompany}
            itemList={companyList}
          />
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

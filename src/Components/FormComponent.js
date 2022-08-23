import React from "react";
import GeneralInfoComponent from "./GeneralInfoComponent";
import EducationComponent from "./EducationComponent";
import WorkExperienceComponent from "./WorkExperienceComponent";
const FormComponent = (props) => {
  let {
    handlerFunctions,
    toggleDisplayMode,
    schoolList,
    companyList,
    generalInfo,
  } = props;
  return (
    <div className="form-component">
      <form action="" id="cvForm">
        <h1>CV Application</h1>
        <GeneralInfoComponent
          legend="General info"
          generalInfo={generalInfo}
          handlerFunctions={handlerFunctions}
        />
        <EducationComponent
          legend="Education"
          schoolList={schoolList}
          handlerFunctions={handlerFunctions}
        />
        <WorkExperienceComponent
          legend="Past work experience"
          companyList={companyList}
          handlerFunctions={handlerFunctions}
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
};

export default FormComponent;

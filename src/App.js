import "./App.css";
import React, { useState } from "react";
import CVComponent from "./Components/CVComponent";
import FormComponent from "./Components/FormComponent";
import { GeneralInfo, School, Company } from "./Data classes/classes.js";

const App = (props) => {
  const [displayMode, setDisplayMode] = useState(false);
  const [generalInfo, setGeneralInfo] = useState(
    new GeneralInfo("", "", "", "")
  );
  const [schoolList, setSchoolList] = useState([]);
  const [companyList, setCompanyList] = useState([]);

  let toggleDisplayMode = (value) => {
    setDisplayMode(value);
  };

  let Add = (type) => {
    switch (type) {
      case "school":
        setSchoolList(schoolList.concat(new School("", "")));
        break;
      case "company":
        setCompanyList(companyList.concat(new Company("", "", "", "")));
        break;
      default:
    }
  };

  let EditInfo = (name, value, type, id) => {
    console.log(`${name}, ${value}, ${type}, ${id}`);
    switch (type) {
      case "school":
        const tempSchools = schoolList;
        tempSchools.find((item) => {
          return item.id === id;
        })[name] = value;
        setSchoolList(tempSchools);
        break;
      case "company":
        const tempCompanies = companyList;
        tempCompanies.find((item) => {
          return item.id === id;
        })[name] = value;
        setCompanyList(tempCompanies);
        break;
      case "general":
        let tempInfo = generalInfo;
        console.log(generalInfo);
        tempInfo[name] = value;
        setGeneralInfo(tempInfo);
        break;
      default:
    }
    console.log(generalInfo);
  };

  let Delete = (id, type) => {
    switch (type) {
      case "school":
        const tempSchools = schoolList.filter((item) => {
          return item.id !== id;
        });
        setSchoolList(tempSchools);
        break;
      case "company":
        const tempCompanies = companyList.filter((item) => {
          return item.id !== id;
        });
        setCompanyList(tempCompanies);
        break;
      default:
    }
  };

  let handlerFunctions = {
    Add: Add,
    EditInfo: EditInfo,
    Delete: Delete,
  };
  return (
    <div className="App">
      {displayMode ? (
        <CVComponent
          toggleDisplayMode={toggleDisplayMode}
          generalInfo={generalInfo}
          schoolList={schoolList}
          companyList={companyList}
        />
      ) : (
        <FormComponent
          toggleDisplayMode={toggleDisplayMode}
          handlerFunctions={handlerFunctions}
          generalInfo={generalInfo}
          schoolList={schoolList}
          companyList={companyList}
        />
      )}
    </div>
  );
};

export default App;

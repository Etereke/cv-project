import "./App.css";
import React, { Component } from "react";
import CVComponent from "./Components/CVComponent";
import FormComponent from "./Components/FormComponent";
import { GeneralInfo, School, Company } from "./Data classes/classes.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayMode: false,
      generalInfo: new GeneralInfo("", "", "", ""),
      schoolList: [],
      companyList: [],
    };
    this.toggleDisplayMode = this.toggleDisplayMode.bind(this);
    this.ModifyGeneralInfo = this.ModifyGeneralInfo.bind(this);
    this.AddSchool = this.AddSchool.bind(this);
    this.AddCompany = this.AddCompany.bind(this);
    this.EditGeneralInfo = this.EditGeneralInfo.bind(this);
    this.EditSchoolInfo = this.EditSchoolInfo.bind(this);
    this.DeleteSchool = this.DeleteSchool.bind(this);
    this.EditCompanyInfo = this.EditCompanyInfo.bind(this);
    this.DeleteCompany = this.DeleteCompany.bind(this);
  }
  toggleDisplayMode(value) {
    this.setState({
      displayMode: value,
    });
  }

  ModifyGeneralInfo = (e) => {
    const input = e.target;
  };

  AddSchool() {
    this.setState({
      schoolList: this.state.schoolList.concat(new School("", "")),
    });
  }

  AddCompany() {
    this.setState({
      companyList: this.state.companyList.concat(new Company("", "", "", "")),
    });
  }

  EditGeneralInfo(target, value) {
    let tempInfo = this.state.generalInfo;
    tempInfo[target] = value;
    this.setState({
      generalInfo: tempInfo,
    });
  }

  EditSchoolInfo(id, name, value) {
    const tempSchools = this.state.schoolList;
    tempSchools.find((item) => {
      return item.id === id;
    })[name] = value;
    this.setState({
      schoolList: tempSchools,
    });
  }

  DeleteSchool(id) {
    const tempSchools = this.state.schoolList.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      schoolList: tempSchools,
    });
  }

  EditCompanyInfo(id, name, value) {
    const tempCompanies = this.state.companyList;
    tempCompanies.find((item) => {
      return item.id === id;
    })[name] = value;
    this.setState({
      companyList: tempCompanies,
    });
  }

  DeleteCompany(id) {
    const tempCompanies = this.state.companyList.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      companyList: tempCompanies,
    });
  }

  render() {
    let { displayMode, generalInfo, schoolList, companyList } = this.state;
    let handlerFunctions = {
      ModifyGeneralInfo: this.ModifyGeneralInfo,
      AddSchool: this.AddSchool,
      AddCompany: this.AddCompany,
      EditGeneralInfo: this.EditGeneralInfo,
      EditSchoolInfo: this.EditSchoolInfo,
      DeleteSchool: this.DeleteSchool,
      EditCompanyInfo: this.EditCompanyInfo,
      DeleteCompany: this.DeleteCompany,
    };
    return (
      <div className="App">
        {displayMode ? (
          <CVComponent
            toggleDisplayMode={this.toggleDisplayMode}
            generalInfo={generalInfo}
            schoolList={schoolList}
            companyList={companyList}
          />
        ) : (
          <FormComponent
            toggleDisplayMode={this.toggleDisplayMode}
            handlerFunctions={handlerFunctions}
            generalInfo={generalInfo}
            schoolList={schoolList}
            companyList={companyList}
          />
        )}
      </div>
    );
  }
}

export default App;

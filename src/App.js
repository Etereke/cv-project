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

  render() {
    let { displayMode } = this.state;
    return (
      <div className="App">
        {displayMode ? (
          <CVComponent
            toggleDisplayMode={this.toggleDisplayMode}
            generalInfo={this.state.generalInfo}
            schoolList={this.state.schoolList}
            companyList={this.state.companyList}
          />
        ) : (
          <FormComponent
            toggleDisplayMode={this.toggleDisplayMode}
            handlerFunctions={{
              ModifyGeneralInfo: this.ModifyGeneralInfo,
              AddSchool: this.AddSchool,
              AddCompany: this.AddCompany,
            }}
            schoolList={this.state.schoolList}
            companyList={this.state.companyList}
          />
        )}
      </div>
    );
  }
}

export default App;

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
    this.Add = this.Add.bind(this);
    this.EditInfo = this.EditInfo.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  toggleDisplayMode(value) {
    this.setState({
      displayMode: value,
    });
  }

  Add(type) {
    switch (type) {
      case "school":
        this.setState({
          schoolList: this.state.schoolList.concat(new School("", "")),
        });
        break;
      case "company":
        this.setState({
          companyList: this.state.companyList.concat(
            new Company("", "", "", "")
          ),
        });
        break;
      default:
    }
  }

  EditInfo(name, value, type, id) {
    switch (type) {
      case "school":
        const tempSchools = this.state.schoolList;
        tempSchools.find((item) => {
          return item.id === id;
        })[name] = value;
        this.setState({
          schoolList: tempSchools,
        });
        break;
      case "company":
        const tempCompanies = this.state.companyList;
        tempCompanies.find((item) => {
          return item.id === id;
        })[name] = value;
        this.setState({
          companyList: tempCompanies,
        });
        break;
      case "general":
        let tempInfo = this.state.generalInfo;
        tempInfo[name] = value;
        this.setState({
          generalInfo: tempInfo,
        });
        break;
      default:
    }
  }

  Delete(id, type) {
    switch (type) {
      case "school":
        const tempSchools = this.state.schoolList.filter((item) => {
          return item.id !== id;
        });
        this.setState({
          schoolList: tempSchools,
        });
        break;
      case "company":
        const tempCompanies = this.state.companyList.filter((item) => {
          return item.id !== id;
        });
        this.setState({
          companyList: tempCompanies,
        });
        break;
      default:
    }
  }

  render() {
    let { displayMode, generalInfo, schoolList, companyList } = this.state;
    let handlerFunctions = {
      Add: this.Add,
      EditInfo: this.EditInfo,
      Delete: this.Delete,
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

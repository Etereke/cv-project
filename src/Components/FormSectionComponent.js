import React, { Component } from "react";
import uniqid from "uniqid";

class FormSectionComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { groupName, fieldNames, hasButtons, AddItem, itemList, modifyItem } =
      this.props;

    return (
      <fieldset className="FormSectionComponent">
        <legend>
          {groupName}{" "}
          {hasButtons ? (
            <button type="button" onClick={(e) => AddItem()}>
              +Add
            </button>
          ) : (
            ""
          )}
        </legend>
        {
          itemList ? (
            fieldNames.map((item) => {
              return (
                <div key={uniqid()}>
                  <label>{item}</label>
                  <input type="text" name={item} id={uniqid()} />
                </div>
              );
            })
          ) : (
            <div></div>
          ) //itemList.map((item) => {
          //     return fieldNames.map((fieldName) => {
          //       return (
          //         <div key={uniqid()}>
          //           <label>{fieldName}</label>
          //           <input
          //             type="text"
          //             name={fieldName}
          //             id={item.id}
          //             onChange={(e) => {}}
          //           />
          //         </div>
          //       );
          //     });
          //   })}
        }
        {fieldNames.map((item) => {
          return (
            <div key={uniqid()}>
              <label>{item}</label>
              <input type="text" name={item} id={item} />
            </div>
          );
        })}
        {hasButtons ? <button type="button">Delete item</button> : ""}
      </fieldset>
    );
  }
}

export default FormSectionComponent;

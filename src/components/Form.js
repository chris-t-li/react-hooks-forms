import React from "react";
import DisplayData from "./DisplayData";
import FormValidation from "./FormValidation";

function Form({
  firstName, lastName, handleFirstNameChange, handleLastNameChange,
}) {
  return (
    <div>
      <form>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      <DisplayData firstName={firstName} lastName={lastName} />
      <FormValidation />
    </div>
  );
}

export default Form;

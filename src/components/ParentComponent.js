import React, { useState } from "react";
import Form from "./Form";

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    function handleFirstNameChange(e) {
        setFirstName(e.target.name);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.name);
    }

    return (
        <Form
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
        />
    );
}

export default ParentComponent;
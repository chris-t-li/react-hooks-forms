import React, { useState } from "react";

function FormValidation() {
    const [number, setNumber] = useState(0);
    const [isInvalidNumber, setIsInvalidNumber] = useState(null);

    function handleNumberChange(e) {
        const newNumber = parseInt(e.target.value);
        if (newNumber >= 0 && newNumber <= 5) {
            setNumber(newNumber);
            setIsInvalidNumber(null);
        } else {
            setIsInvalidNumber(`${newNumber} is not a valid number!`);
        }
    }

    return (
        <form>
            <input type="number" value={number} onChange={handleNumberChange} />
            {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
        </form>
    );
}

export default FormValidation;
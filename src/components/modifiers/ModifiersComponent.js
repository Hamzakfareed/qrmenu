import React, { useState } from "react";

import AddModifierComponent from "./AddModifierComponent";
import EditModifierComponent from "./EditModifierComponent";
import ListModifierComponent from "./ListModifierComponent";

const ModifiersComponent = () => {

    const modifiersList = [
        { id: 1, name: "Pepsi", description: "this is for testing", price: 2 },
        { id: 2, name: "Coca cola", description: "This for testing", price: 5 }
    ];

    const [modifiers, selectedModifiers] = useState(modifiersList);
    const [selectedModifier, setSelectedModifier] = useState(null);

    const addHandleSubmit = (event) => {

    }

    const editHandleSubmit = (event) => {

    }

    const handleEditClick = (modifier) => {
        console.log("Modiifer :", modifier);
        setSelectedModifier(modifier);
    }

    return (
        <div>
            {selectedModifier ? (<EditModifierComponent modifier={selectedModifier} editHandleSubmit={editHandleSubmit} />) : (<AddModifierComponent addHandleSubmit={addHandleSubmit} />)}
            <ListModifierComponent handleEditClick={handleEditClick} modifiers={modifiers} />
        </div>
    );
}

export default ModifiersComponent;
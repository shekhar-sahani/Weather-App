import React, {useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name" : "Shekhar",
        "class": "2"
    }
    const [state, setState] = useState(s1)

    const toggleUpdate = () => {
        setTimeout(() => {
            setState({
                "name" : "Shekhar Sahani",
                "class": "2.0"
            })
        }, 2000);
    }

    return (
        <NoteContext.Provider value={{state, toggleUpdate}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
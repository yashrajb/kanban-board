import React from "react";
import { useContext } from "react";
import CTX from "../../store";
function AddNewBtn(){

    const ctx = useContext(CTX);

    const onAddNew = function(e){

        ctx.setState((prev) => {
            return {
                ...prev,
                showModal:true
            }
        })

    }

    return (
        <button onClick={() => onAddNew()}>Add New</button>
    )

}

export default AddNewBtn
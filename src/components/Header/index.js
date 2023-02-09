import React from "react";
import { useContext } from "react";
import CTX from "../../store";
import AddNewBtn from "../../commons/AddNew";
function Header(){

    const ctx = useContext(CTX);


    return (
        <div>
            <h1>Kanban Board</h1>
            <AddNewBtn />
        </div>
    )

}

export default Header;
import React from "react";

function Task({description,user,date}){

    return (
        <div>
            <h1>{description}</h1>
            <p>Due - {date} </p>
            <p><span className="user">{user}</span></p>
        </div>
    )

}

export default Task;
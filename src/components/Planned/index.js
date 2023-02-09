import React from "react";
import Task from "../../commons/Task";

function Planned(props){

    let mocks = [{
        description:'Hello world',
        date:"12/02/2021",
        user:'user 1'
    }]

    return (

        <div>
            <h1>Planned</h1>
            {mocks.map((el) => {

                return <Task {...el} />

            })}
        </div>

    )

}

export default Planned;
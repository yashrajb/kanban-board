import React from "react";
import Task from "../../commons/Task";

function Started(props){

    let mocks = [{
        description:'Hello world',
        date:"12/02/2021",
        user:'user 1'
    }]

    return (

        <div>
            <h1>Started</h1>
            {mocks.map((el) => {

                return <Task {...el} />

            })}
        </div>

    )

}

export default Started;
import React from "react";

function Info(props) {
    return (
        <div>
            <span>
            Hi, my name is Anthony Doe. Briefly introduce yourself here. You can also provide a link to the about page.
            </span>
            <br/>
            <a href={"www.google.com"} style={{color:"white"}}>
                Find out more about me
            </a>
        </div>
    )
}
export default Info;
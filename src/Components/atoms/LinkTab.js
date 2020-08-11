import Tab from "@material-ui/core/Tab";
import React from "react";

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={props.onClick}
            {...props}
        />
    );
}
export default LinkTab;
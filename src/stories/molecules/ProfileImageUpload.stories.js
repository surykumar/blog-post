import React from "react";
import {color, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";
import { createMuiTheme } from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";
import ProfileImageUpload from "../../Components/molecules/ProfileImageUpload";
import {action} from "@storybook/addon-actions";

const userDefaultValue = {
    given_name: "",
    family_name: "",
    picture: ""
}
storiesOf("Components/molecules",module)
    .addDecorator(withKnobs)
    .add("Profile Image Change", ()=>{
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: color("Icon on Hover Color","#54B689")
                },
                secondary: {
                    main: color("Icon color","#505050")
                },
                neutral: {
                    main: color("Icon Background Color","#f5f5f5")
                }
            },
            spacing: factor => `${0.25 * factor}rem`
        })
        const profileUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy1FCk4ILwKxcNzcvjHpj0lqPVfuUCGKeg2w&usqp=CAU"
        return (
            <MuiThemeProvider theme={theme}>
                <ProfileImageUpload profileUrl={profileUrl} user={userDefaultValue} handleImageChange={action("Profile image change triggered!")}/>
            </MuiThemeProvider>
        )
    })
import React from "react";
import { storiesOf } from "@storybook/react";
import {withKnobs, text, color, number} from "@storybook/addon-knobs";
import { object } from '@storybook/addon-knobs';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import StoryRouter from 'storybook-react-router';
import BlogLeftNav from "../../Components/organisms/BlogLeftNav";


const userDefaultValue = {
    given_name: "",
    family_name: "",
    picture: ""
}

const stories = storiesOf("Components/organism", module)
    .addDecorator(withKnobs)
    .addDecorator(StoryRouter())
    .add("Blog Left Nav", ()=>{
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: color("Primary","#54B689")
                },
                secondary:{
                    main: color("Secondary","#505050")
                },
                neutral: {
                    main: color("Neutral","#f5f5f5")
                }
            },
            typography: {
                h3: {
                    fontSize: "1.75rem",
                    fontWeight: 500,
                },
                body1: {
                    fontSize: text("User info Font Size", "1.5rem"),
                    fontFamily: text("User info Font Family", "Arial"),
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                },
                iconButton: {
                    fontSize: text("Icon Button fontSize", "1.5rem"),
                },
                button: {
                    fontSize: number("Blog Action Button Font Size", 15),
                    fontStyle: text("Blog Action Button Font Style", "Arial"),
                    textTransform: text("Blog Action Button Text Transform", "uppercase")
                }

            },

            spacing: factor => `${0.25 * factor}rem`
        })
        userDefaultValue.bio = "";
        const user = object('User', userDefaultValue, "USER");
        return(
            <MuiThemeProvider theme={theme}>
                <BlogLeftNav user={user} />
            </MuiThemeProvider>)
    })

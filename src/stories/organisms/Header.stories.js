import React from "react";
import {action} from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import {withKnobs, text, color, number} from "@storybook/addon-knobs";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import StoryRouter from 'storybook-react-router';
import Header from "../../Components/organisms/Header";

const stories = storiesOf("Components/organism", module)
    .addDecorator(withKnobs)
    .addDecorator(StoryRouter())
    .add("Header", ()=>{
        const theme = createMuiTheme({
            palette: {
                neutral: {
                    main: color("Button Color","#f5f5f5")
                },
                header: {
                    main: color("Header color","#808080")
                }
            },
            typography: {
                button: {
                    fontSize: number("Header Button Font Size", 15),
                    fontStyle: text("Header Button Font Style", "Arial"),
                    textTransform: text("Header Button Text Transform", "uppercase")
                }

            },

            spacing: factor => `${0.25 * factor}rem`
        })
        return(
            <MuiThemeProvider theme={theme}>
                <Header loginWithRedirect={action("LoginAction Triggered")} logout={action("LogOut action Triggered")} />
            </MuiThemeProvider>)
    })
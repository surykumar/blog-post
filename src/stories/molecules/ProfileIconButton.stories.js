import React from "react";
import {color, number, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";
import { createMuiTheme } from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";
import ProfileIconButton from "../../Components/molecules/ProfileIconButton";
import StoryRouter from "storybook-react-router";

    storiesOf("Components/molecules",module)
    .addDecorator(withKnobs)
        .addDecorator(StoryRouter())
        .add("Profile Icon Button", ()=>{
        const theme = createMuiTheme({
            palette: {
                neutral: {
                    main: color("Color","#505050")
                }
            },
            typography: {
                button: {
                    fontSize: number("Font Size", 15),
                    fontStyle: text("Font Style", "Arial"),
                    textTransform: text("Text Transform", "uppercase")
                }
            },
            spacing: factor => `${0.25 * factor}rem`
        })
        return (
            <MuiThemeProvider theme={theme}>
                <ProfileIconButton name={text("Button", "Profile")}/>
            </MuiThemeProvider>
        )
    })

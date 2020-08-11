import React from "react";
import {color, number, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";
import { createMuiTheme } from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";
import ConnectButtons from "../../Components/molecules/ConnectButtons";


storiesOf("Components/molecules",module)
    .addDecorator(withKnobs)
    .add("Connect Buttons", ()=>{
        const padding = number("Icon padding", 1);
        const theme = createMuiTheme({
            palette: {
                neutral: {
                    main: color("Icon Color","#54B689")
                }
            },
            typography: {
                iconButton: {
                    fontSize: text("Icon Button fontSize", "1.5rem"),
                }
            },
            spacing: factor => `${(padding * factor)/2}rem`
        })
        return (
            <MuiThemeProvider theme={theme}>
                <ConnectButtons />
            </MuiThemeProvider>
        )
    })
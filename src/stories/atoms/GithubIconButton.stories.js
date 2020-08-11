import React from "react";
import {color, number, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";
import { createMuiTheme } from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";
import GitHubIconButton from "../../Components/atoms/GitHubIconButton";

    storiesOf("Components/atoms",module)
    .addDecorator(withKnobs)
    .add("GitHub IconButton", ()=>{
        const padding = text("Icon padding", "2rem");
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
            spacing: factor => padding
        })
        return (
            <MuiThemeProvider theme={theme}>
                <GitHubIconButton />
            </MuiThemeProvider>
        )

    })
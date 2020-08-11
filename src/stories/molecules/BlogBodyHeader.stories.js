import React, {useState} from "react";
import {color, number, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";
import { createMuiTheme } from '@material-ui/core/styles';
import {MuiThemeProvider} from "@material-ui/core";
import BlogBodyHeader from "../../Components/molecules/BlogBodyHeader";

    storiesOf("Components/molecules",module)
    .addDecorator(withKnobs)
    .add("Blog Body Header", ()=>{
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: color("Title text Color","#54B689")
                },
                secondary: {
                    main: color("Body text color","#505050")
                },
            },
            typography: {
                subtitle2: {
                    fontStyle: text("Title Font Style", "Arial"),
                    fontSize: text("Title Font Size", "1.5rem"),
                },
                h4: {
                    fontStyle: text("Body Font Style", "Arial"),
                    fontSize: text("Body Font Size", "1.15rem"),
                    fontWeight: 500,
                    lineHeight: 1.2,
                }
            },
        })
        return (
            <MuiThemeProvider theme={theme}>
                <BlogBodyHeader />
            </MuiThemeProvider>
        )
    })
import React from "react";
import {action} from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import {withKnobs, text, boolean, color, number} from "@storybook/addon-knobs";
import {MuiThemeProvider, createMuiTheme, Button} from '@material-ui/core';
import StoryRouter from 'storybook-react-router';
import CreatePost from "../../Components/organisms/CreatePost";


const stories = storiesOf("Components/organism", module)
    .addDecorator(withKnobs)
    .addDecorator(StoryRouter())
    .add("Create Post", ()=>{
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
                h2: {
                    fontSize: text("Post reactTestDemo Font Size", "2rem"),
                    fontStyle: text("Post reactTestDemo Font Style", "Arial"),
                },
                h5: {
                    fontSize: text("Post Body Font Size", "1rem"),
                    fontStyle: text("Post Body Font Style", "Arial"),
                },
                button: {
                    fontSize: number("Header Button Font Size", 15),
                    fontStyle: text("Header Button Font Style", "Arial"),
                }
            },
            spacing: factor => `${0.25 * factor}rem`
        })
        return(
            <MuiThemeProvider theme={theme}>
                <CreatePost handleCreatePost={action("Handle create post action!")}/>
            </MuiThemeProvider>)
    })

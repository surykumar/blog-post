import React, {useState} from "react";
import {color, number, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";
import { createMuiTheme } from '@material-ui/core/styles';
import {Box, Button, MuiThemeProvider} from "@material-ui/core";
import ConnectButtons from "../Components/molecules/ConnectButtons";
import ProfileImageUpload from "../Components/molecules/ProfileImageUpload";
import {action} from "@storybook/addon-actions";
import StoryRouter from "storybook-react-router";
import ProfileIconButton from "../Components/molecules/ProfileIconButton";
import BlogActionButtons from "../Components/molecules/BlogActionButtons";
import BlogBodyHeader from "../Components/molecules/BlogBodyHeader";

const userDefaultValue = {
    given_name: "",
    family_name: "",
    picture: ""
}
const stories = storiesOf("Components/molecules",module)
    .addDecorator(withKnobs)
    .addDecorator(StoryRouter())
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
    .add("Blog Action Button", ()=>{
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
                <BlogActionButtons />
            </MuiThemeProvider>
        )
    })
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
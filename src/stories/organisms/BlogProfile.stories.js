import React from "react";
import {action} from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import {withKnobs, text, boolean, color, number} from "@storybook/addon-knobs";
import BlogCard from "../Components/organisms/BlogCard";
import { object } from '@storybook/addon-knobs';
import {MuiThemeProvider, createMuiTheme, Button} from '@material-ui/core';
import StoryRouter from 'storybook-react-router';
import BlogProfile from "../../Components/organisms/BlogProfile";


const userDefaultValue = {
    given_name: "",
    family_name: "",
    picture: ""
}
const stories = storiesOf("Components/organism", module)
    .addDecorator(withKnobs)
    .addDecorator(StoryRouter())
    .add("Blog Profile", ()=>{
        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: color("Primary","#54B689")
                },
                secondary:{
                    main: color("Secondary","#505050")
                },
                neutral: {
                    main: "#f5f5f5"
                }
            },
            typography: {
                subtitle1: {
                    fontSize: "1.5rem",
                },
                subtitle2: {
                    fontSize: "1.5rem",
                },
                button: {
                    fontSize: 15,
                    textTransform: "none"
                },
                h4: {
                    fontSize: text("Post reactTestDemo fontSize", "1.15rem"),
                    fontFamily: text("Post reactTestDemo fontFamily", "Roboto san-serif"),
                    fontWeight: 500,
                    lineHeight: 1.2,
                },
                h5: {
                    fontSize: "1rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                },
                h3: {
                    fontSize: "1.75rem",
                    fontWeight: 500,
                },
                body1: {
                    fontSize: "1rem",
                    fontFamily: '"Roboto" "san-serif"',
                    "-webkit-font-smoothing": "antialiased",
                    "-moz-osx-font-smoothing": "grayscale",
                },
                body2: {
                    fontSize: text("Post Body fontSize", "1rem"),
                    fontFamily: text("Post Body fontFamily", "Roboto san-serif"),
                    lineHeight: 1.5,
                }
            },
            spacing: factor => `${0.25 * factor}rem`
        })
        const user = object('User', userDefaultValue, "USER");
        return(
            <MuiThemeProvider theme={theme}>
                <BlogProfile user={user}  handleUpdateProfile={action("update profile requested")}/>
            </MuiThemeProvider>)
    })

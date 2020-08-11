import React from "react";
import {action} from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import {withKnobs, text, boolean, color, number} from "@storybook/addon-knobs";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import StoryRouter from 'storybook-react-router';
import BlogBody from "../../Components/organisms/BlogBody";

const userDefaultValue = {
    given_name: "",
    family_name: "",
    picture: ""
}

const stories = storiesOf("Components/organism", module)
    .addDecorator(withKnobs)
    .addDecorator(StoryRouter({},{ initialEntries: ['//edit/1'] }))
    .add("Edit Post", ()=>{
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
        const posts = [];
        const postDefaultValue = {
            reactTestDemo: 'This is the first post for editing!',
            text:'Body of the first post',
            image: 'https://thejournal.com/-/media/EDU/THEJournal/Images/2015/02/20150224test644.jpg',
            createdAt:'',
            id:1
        }
        posts.push(postDefaultValue);
        return(
            <MuiThemeProvider theme={theme}>
                <BlogBody posts={posts} user={userDefaultValue} handleCreatePost={action("Handle create post action!")}
                          handleEditPost={action("Edited")}
                          handleDeletePost={action("Deleted")}
                          handleUpdateProfile={action("Updated profile")}/>
            </MuiThemeProvider>)
    })

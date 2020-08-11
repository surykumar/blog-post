import {storiesOf} from "@storybook/react";
import {color, number, text, withKnobs} from "@storybook/addon-knobs";
import StoryRouter from "storybook-react-router";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import BlogBody from "../../Components/organisms/BlogBody";
import {action} from "@storybook/addon-actions";
import React from "react";
const userDefaultValue = {
    given_name: "",
    family_name: "",
    picture: ""
}
const stories = storiesOf("Components/organism", module)
    .addDecorator(withKnobs)
    .addDecorator(StoryRouter({},{ initialEntries: ['//preview/1'] }))
    .add("Preview Post", ()=>{
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
            createdAt: 1596582159973,
            id:1,
            user: {
                given_name: "Suryakant",
                family_name: "Kumar",
                picture: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
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
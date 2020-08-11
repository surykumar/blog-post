import React from "react";
import {color, number, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";
import ProfileAvatar from "../Components/atoms/ProfileAvatar";
import { createMuiTheme } from '@material-ui/core/styles';
import GitHubIconButton from "../Components/atoms/GitHubIconButton";
import {MuiThemeProvider} from "@material-ui/core";

const stories = storiesOf("Components/atoms",module)
    .addDecorator(withKnobs)
    .add("ProfileAvatar", ()=>{
        const name = text("Name", "Thomas");
        const src = text("image link", "https://mlqmtwka8c9g.i.optimole.com/gOh5_1g-vwaQyZsF/w:366/h:153/q:85/dpr:2.6/https://www.competethemes.com/wp-content/uploads/2016/12/link-new-tab.png");
        return <ProfileAvatar picture={src} name={name}/>
    })
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
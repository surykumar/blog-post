import React from "react";
import {text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";
import ProfileAvatar from "../../Components/atoms/ProfileAvatar";

    storiesOf("Components/atoms",module)
    .addDecorator(withKnobs)
    .add("ProfileAvatar", ()=>{
        const name = text("Name", "Thomas");
        const src = text("image link", "https://mlqmtwka8c9g.i.optimole.com/gOh5_1g-vwaQyZsF/w:366/h:153/q:85/dpr:2.6/https://www.competethemes.com/wp-content/uploads/2016/12/link-new-tab.png");
        return <ProfileAvatar picture={src} name={name}/>
    })
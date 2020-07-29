import React from "react";
import {action} from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import {withKnobs, text, boolean, color} from "@storybook/addon-knobs";
import Main from "../src/pages/main";

// export default {
//     title: "Test"
// };
// export const test =()=><textarea onClick={action("clicked")}>Thomas text area in a story book!</textarea>
const stories = storiesOf("Storybook knobe",module)
    .addDecorator(withKnobs)
    // .add("with a button", ()=>(
    //     <button style={{backgroundColor:color("Color","red")}} disabled={boolean("Disabled",false)}>{text("label","hi thomas")}</button>
    // ))
    // .add("as a dynamic variables", ()=> {
    //     const name = text("Name", "Thomas");
    //     const content = `Hi I'm ${name}. Nice to meet you`;
    //     return <div>{content}</div>
    // })
    .add("Render Main component", ()=>{
        const _user = {
            "id": "thomas.edition@zyz.com",
            "email": "thomas.shelby@zyz.com",
            "password": "xyz",
            "profile": {
                "avatar":"https://watchmojo.com/uploads/thumbs720/WMUK-Fi-M-Top10-Cillian-Murphy-Performances_O2B3A3.jpg",
                "firstName": text("user first name", "Thomas"),
                "lastName": text("user last name", "Shelby"),
                "email": "thomas.shelby@zyz.com",
            },
            "posts": [
                {   "id": 1,
                    "user_id": "thomas.edition@zyz.com",
                    "full name": "Thomas Shelby",
                    "title": "My first post!",
                    "text": "Hey this post is about Java Script!",
                    "image": "https://www.mail-signatures.com/wp-content/uploads/2019/02/How-to-find-direct-link-to-image_Blog-Picture.png",
                    "createdAt": 1596029068573,
                    "comments" : [
                        {
                            "user_id": "",
                            "comment": "",
                            "replies": [
                                {
                                    "user_id": "",
                                    "reply" : ""
                                }
                            ]
                        }
                    ]
                },
                {   "id": 2,
                    "user_id": "surya.kant@zyz.com",
                    "full name": "Surya kant",
                    "title": "Java script Event loop!",
                    "text": "What the heck is javascript event loop!",
                    "image": "https://skywell.software/wp-content/uploads/2019/09/javascript-test-tools-1024x637.jpg",
                    "createdAt": 1596029068573,
                    "comments" : [
                        {
                            "user_id": "",
                            "comment": "",
                            "replies": [
                                {
                                    "user_id": "",
                                    "reply" : ""
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        // const name = text("Allowed login user is", "Thomas");
        // const content = `Hi I'm ${name}. Nice to meet you`;
        // const allowLogin = boolean("allowLogin", true);
        const disabled = boolean("allowLogin",false);
        const colo = disabled ? "green" : "green";
        // return <button style={{backgroundColor:color("Color","green")}} disabled={disabled}>{`hi ${_user.profile.firstName} ${disabled}`}</button>

        return <div><Main _user={_user} allowLogin={disabled}/></div>
    })
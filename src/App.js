import React from 'react';
import './App.css';
import Main from "./pages/main"
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
      primary: {
          main:"#5e6ca8"
      },
        secondary:{
          main:"#505050"
        },
        neutral: {
            main:"#24b620"
        }
    },
    typography: {
        // fontFamily: 'Arial',
        subtitle1: {
            // fontSize: 20,
            fontSize: "1.5rem",
            // fontWeight: 400,
            // lineHeight: 1.334,
            // letterSpacing: "0em"
        },
        // body1: {
        //     fontWeight: 500,
        // },
        button: {
            fontSize: 15,
            // fontStyle: 'Arial',
            textTransform: "none"
        }
    },
})

function App() {
    const _user = {
        "id": "thomas.edition@zyz.com",
        "email": "thomas.shelby@zyz.com",
        "password": "xyz",
        "profile": {
            "avatar":"https://watchmojo.com/uploads/thumbs720/WMUK-Fi-M-Top10-Cillian-Murphy-Performances_O2B3A3.jpg",
            "firstName": "Thomas",
            "lastName": "Shelby",
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
  return (
      <MuiThemeProvider theme={theme}>
        <Main _user={_user} allowLogin={false}/>
      </MuiThemeProvider>
  );
}

export default App;

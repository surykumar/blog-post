import React from 'react';
import './App.css';
import Main from "./pages/Main"
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {grey, red} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
      primary: {
          main:"#54B689"
      },
    secondary:{
      main:"#505050"
    },
    neutral: {
        main: "#f5f5f5"
    },
    header: {
      main: "#808080"
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
        subtitle2: {
            fontSize: "1.5rem",
        },
        button: {
            fontSize: 15,
            // fontStyle: 'Arial',
            textTransform: "none"
        },
        h4: {
            fontSize: "1.15rem",
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h5: {
            fontSize: "1rem",
            fontFamily: "Arial",
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
            lineHeight: 1.5,
        },
        iconButton: {
            fontSize: 25
        },
        h2: {
            fontSize: "2rem",
            fontFamily: "Arial"
        }
    },
    spacing: factor => `${0.25 * factor}rem`
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

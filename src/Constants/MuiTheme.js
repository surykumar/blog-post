import {createMuiTheme} from "@material-ui/core";
const MuiAppTheme = createMuiTheme({
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
export default MuiAppTheme;
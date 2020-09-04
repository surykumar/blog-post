import React, {useState} from "react";
import ReactQuill from 'react-quill';
import {Grid} from "@material-ui/core";
import 'react-quill/dist/quill.snow.css';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > .ql-container': {
        height: "450px",
        }
    }

}));

function QuillEditor(props) {
    // const [quillBody, setQuillBody] = useState('');
    const classes = useStyles();
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    // const handleChange = (value)=> {
    //     setQuillBody(value)
    // }
    return (
            <ReactQuill className={classes.root} value={props.text}
                        modules={modules}
                        formats={formats}
                        theme="snow"
                        placeholder="Start writing your post here. Add images and more."
                    onChange={props.handleChange} />
    )
}
export default QuillEditor;
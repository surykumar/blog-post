import React from 'react';
import HomeLeftNav from "../Components/organisms/HomeLeftNav";
import {BrowserRouter as Router} from "react-router-dom";
import {Grid} from "@material-ui/core";
import Homeconatiner from "../Components/templates/HomeContainerTemplate";

const Home = (props) => {
    return (
        <Grid>
            <Homeconatiner posts={props.posts}/>
        </Grid>
    )

}
export default Home;
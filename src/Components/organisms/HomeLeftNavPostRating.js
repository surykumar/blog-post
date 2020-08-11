import React, {useState} from "react";
import {Grid, Typography} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Rating from '@material-ui/lab/Rating';

function HomeLeftNavPostRating(props) {
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
    });
    const [value, setValue] = useState({
        ratingA:5,
        ratingB:4,
        ratingC:3,
        ratingD:2,
        ratingE:1,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <Grid>
            <Typography variant="h6">
                Ratings
            </Typography>
            <FormGroup column style={{margin: "2% 15%"}}>
                <FormControlLabel
                    control={<Checkbox style={{color:"white"}} checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label={<Rating name="read-only" value={value.ratingA} readOnly />}
                />
                <FormControlLabel
                    control={<Checkbox style={{color:"white"}} checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                    label={<Rating name="read-only" value={value.ratingB} readOnly />}
                />
                <FormControlLabel
                    control={<Checkbox  style={{color:"white"}} checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                    label={<Rating name="read-only" value={value.ratingC} readOnly />}
                />
                <FormControlLabel
                    control={<Checkbox style={{color:"white"}} checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                    label={<Rating name="read-only" value={value.ratingD} readOnly />}
                />
                <FormControlLabel
                    control={<Checkbox style={{color:"white"}} checked={state.checkedE} onChange={handleChange} name="checkedE" />}
                    label={<Rating name="read-only" value={value.ratingE} readOnly />}
                />
            </FormGroup>
        </Grid>
    )
}
export default HomeLeftNavPostRating;
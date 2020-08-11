import React from "react";
import {Grid, Typography} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function HomeLeftNavPostCategory(props) {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
        checkedD: true,
        checkedE: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <Grid>
            <Typography variant="h6">
                Tag Cloud
            </Typography>
            <FormGroup column style={{margin: "2% 15%"}}>
                <FormControlLabel
                    control={<Checkbox style={{color:"white"}} checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Lifestyle"
                />
                <FormControlLabel
                    control={<Checkbox style={{color:"white"}} checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                    label="Health"
                />
                <FormControlLabel
                    control={<Checkbox  style={{color:"white"}} checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                    label="Technology"
                />
                <FormControlLabel
                    control={<Checkbox style={{color:"white"}} checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                    label="Travel"
                />
                <FormControlLabel
                    control={<Checkbox style={{color:"white"}} checked={state.checkedE} onChange={handleChange} name="checkedE" />}
                    label="Food"
                />
            </FormGroup>
        </Grid>
    )
}
export default HomeLeftNavPostCategory;
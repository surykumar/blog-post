import React from 'react';
import {render, screen} from '@testing-library/react'
import {MuiThemeProvider} from "@material-ui/core";
import MuiAppTheme from "../Constants/MuiTheme";
import ConnectButtons from "../Components/molecules/ConnectButtons";

describe('Connect Buttons', ()=> {
    test('Test if connect buttons are in DOM', ()=> {
        render(
            <MuiThemeProvider theme={MuiAppTheme}>
                <ConnectButtons />
            </MuiThemeProvider>
        )
        expect(screen.getByLabelText('Github')).toBeInTheDocument();
        expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
        expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
        expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
        expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    })
})
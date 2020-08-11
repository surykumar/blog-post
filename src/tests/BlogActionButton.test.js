import React from 'react';
import {render, screen} from '@testing-library/react'
import {MuiThemeProvider} from "@material-ui/core";
import MuiAppTheme from "../Constants/MuiTheme";
import BlogActionButtons from "../Components/molecules/BlogActionButtons";
import { MemoryRouter } from 'react-router-dom'

describe('Blog Action Buttons', ()=> {
    test('Test if action buttons in dom', ()=> {
        render(
            <MuiThemeProvider theme={MuiAppTheme}>
                <BlogActionButtons/>
            </MuiThemeProvider>, { wrapper: MemoryRouter })
        // screen.debug(screen.getAllByRole('button'));
        // screen.getAllByRole('button');
        expect(screen.getByText('Posts')).toBeInTheDocument();
        expect(screen.getByText('Create')).toBeInTheDocument();
        expect(screen.getByText('Profile')).toBeInTheDocument();
    })
})
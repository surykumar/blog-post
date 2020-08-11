import React from 'react';
import {render, screen} from '@testing-library/react'
import ProfileImageUpload from "../Components/molecules/ProfileImageUpload";
import {MuiThemeProvider} from "@material-ui/core";
import MuiAppTheme from "../Constants/MuiTheme";
import userEvent from '@testing-library/user-event';

describe('Profile Image Upload', ()=> {
    test('Profile Icon Avatar', ()=> {
        const profileUrl = "https://lh3.googleusercontent.com/ogw/ADGmqu-Vk7RvYKCAFie-NsnSg9XHlxGT_c06RdbFYu5Z=s83-c-mo";
        const user = {
            given_name: "Suryakant",
            family_name: "Kumar"
        }
        const handleImageChange = jest.fn();
        render(
            <MuiThemeProvider theme={MuiAppTheme}>
                <ProfileImageUpload
                    profileUrl={profileUrl}
                    user={user}
                    handleImageChange={handleImageChange}
                    />
            </MuiThemeProvider>)
        expect(screen.getByAltText(`${user.given_name} ${user.family_name}`)).toBeInTheDocument();
    })
    test('Profile Icon Label Input', ()=> {
        const profileUrl = "https://lh3.googleusercontent.com/ogw/ADGmqu-Vk7RvYKCAFie-NsnSg9XHlxGT_c06RdbFYu5Z=s83-c-mo";
        const user = {
            given_name: "Suryakant",
            family_name: "Kumar"
        }
        const handleImageChange = jest.fn();
        render(
            <MuiThemeProvider theme={MuiAppTheme}>
                <ProfileImageUpload
                    profileUrl={profileUrl}
                    user={user}
                    handleImageChange={handleImageChange}
                />
            </MuiThemeProvider>)
        expect(screen.getByLabelText("Upload BlogProfile image")).toBeInTheDocument();
    })
    test('Test image upload', async ()=> {
        const profileUrl = "https://lh3.googleusercontent.com/ogw/ADGmqu-Vk7RvYKCAFie-NsnSg9XHlxGT_c06RdbFYu5Z=s83-c-mo";
        const _user = {
            given_name: "Suryakant",
            family_name: "Kumar"
        }
        const handleImageChange = jest.fn();
        render(
            <MuiThemeProvider theme={MuiAppTheme}>
                <ProfileImageUpload
                    profileUrl={profileUrl}
                    user={_user}
                    handleImageChange={handleImageChange}
                />
            </MuiThemeProvider>)
        const imageInput = screen.getByLabelText('Upload profile');
        // screen.debug(imageInput)
        const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
        userEvent.upload(imageInput, file);
        expect(imageInput.files[0]).toStrictEqual(file);
        expect(handleImageChange).toHaveBeenCalledTimes(1);
    })
})
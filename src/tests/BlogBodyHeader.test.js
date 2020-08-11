import React from 'react';
import {render, screen} from '@testing-library/react'
import BlogBodyHeader from "../Components/molecules/BlogBodyHeader";

describe('BlogBodyHeader', ()=> {
    test('Test BlogBodyHeader Default Header value', ()=> {
        render(<BlogBodyHeader />);
        expect(screen.getByText('A Blog About All And Life')).toBeInTheDocument();
        expect(screen.getByText('Welcome to Home Blog. Start creating new post!')).toBeInTheDocument();
    })
})
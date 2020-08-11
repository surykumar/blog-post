import React from 'react';
import {render, screen} from '@testing-library/react'
import Info from "../Components/molecules/Info";

describe('Info', ()=> {
    test('Test Component Info', ()=> {
        const infoText ="This is my bio!"
        render(<Info bio= {infoText}/>);
        expect(screen.getByText('This is my bio!')).toBeInTheDocument();
        expect(screen.queryByText('This is my bio')).toBeNull();
        // screen.debug();
    })
})
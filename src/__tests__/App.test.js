import React from 'react';
import { render } from 'react-testing-library';
import App from '../App';

describe('testing App.js', () => {
    test('it renders', () => {
        render(<App />);
    });
});

import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";

it('renders "Previous" button', () => {
    const { getByText, findByText } = render(<StarWarsCharacters/>);
    act(() => {
        fireEvent.click(getByText("Previous"));
    });
    findByText(/previous/i);

    });

    it('renders "Next" Button', () => {
        const { getByText, findByText } = render(<StarWarsCharacters/>);

        act(() => {
            fireEvent.click(getByText("Next"));

        });
        findByText(/next/i)
    });
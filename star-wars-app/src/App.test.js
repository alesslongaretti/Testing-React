import React from "react";
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import axios from 'axios';

jest.mock("axios", () => {
  return {
    get: jest.fn(() => Promise.resolve({
      data: {
        results: [ {name:"ALE"}]
      }
    }))
  
}});


it('made an api call', async () => {
  const wrapper = rtl.render(<App />);
  await wrapper.getAllByText(/next/i);
  expect(axios.get).toHaveBeenCalled();
})

it('renders characters', async () => {
    const wrapper = rtl.render(<App />);
    const charactersList = await wrapper.findAllByText(/ALE/i);
    expect(charactersList[0]).toBeVisible();
})




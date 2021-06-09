import React from "react"
import {render, screen, waitFor} from "@testing-library/react"
import Display from "../Display"
import mockFetchShow from '../api/fetchShow.js'
import testShow from "./Episode.test"
import userEvent from "@testing-library/user-event"

test('renders & options equal to selection display func is called', () =>{
    render(<Display/>)
    mockFetchShow.mockResolvedValueOnce(testShow)
    const button = screen.getByRole('button')
    userEvent.click(button)

    const selection = document.querySelector("[id='seasons']");
    const showContainer = await screen.queryByTestId('show-container')
    
    expect(selection.children).toHaveLength(3);
    expect(button).not.toBeInTheDocument
    expect(showContainer).toBeInTheDocument
})


///Tasks:
//1. Add in nessisary (seriously?) imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.
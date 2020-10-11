import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.getByText(/checkout form/i)
    expect(formHeader).toBeInTheDocument(); //passes
});


test("fillout form and submit", async() => {
    render(<CheckoutForm />);


    
const firstName = screen.getByLabelText(/first name/i);
const lastName = screen.getByLabelText(/last name/i);
const address = screen.getByLabelText(/address/i);
// const city = screen.getByLabelText(/cities/i); <- test to break code
const city = screen.getByLabelText(/city/i);
const state = screen.getByLabelText(/state/i);
const zipCode = screen.getByLabelText(/zip/i);

fireEvent.change(firstName, {target: { value: "harrison"}});
fireEvent.change(lastName, {target: { value: "aguiar"}});
fireEvent.change(address, {target: { value: "123 main st"}});
fireEvent.change(city, {target: { value: "hyannis"}});
fireEvent.change(state, {target: { value: "massachusetts"}});
fireEvent.change(zipCode, {target: { value: "00000"}});

expect(firstName).toHaveValue("harrison"); //broke this code on purpose so testing workes properly

const button = screen.getByRole("button", {name: /checkout/i});
fireEvent.click(button);
//after filling out the fom the state changed to true in my terminal and then when grabbing and checking for the seccess message the test passed

const successMessage = await screen.getByText(/you have ordered/i);
expect(successMessage).toBeInTheDocument();
})
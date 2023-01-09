import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AtmPage from "../components/atm-page";


test("ATM deposits", async ()=>{
    render(<AtmPage/>);
   
    const [dep5btn, dep10btn] = await screen.findAllByText(/Add/);

    userEvent.click(dep5btn)
    userEvent.click(dep10btn);


    const heading = await screen.findByText(/Balance:/);
    expect(heading.innerHTML).toContain("15");
});

test("ATM custom deposit", async ()=>{
    render(<AtmPage/>);
   
    const depoBtn = await screen.findByText(/Deposit/);
    const inputField = await screen.findByLabelText(/Amount/);

    userEvent.type(inputField,"17");
    userEvent.click(depoBtn);

    const heading = await screen.findByText(/Balance:/);
    expect(heading.innerHTML).toContain("17");

});
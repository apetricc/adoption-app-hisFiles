import { render, screen } from "@testing-library/react"
import Card from "../Card"
import userEvents from "@testing-library/user-event";

//set up a var with default props for our Card components:
const cardProps = {
    name: "Sydney",
    phone: "555-555-5555",
    email: "drew@gmail.com",
    image: {
        url: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x1.jpg", alt: "cute cat"
    },
    favoured: false
}

describe("Card", () => {
    test("should show name of cat", () => {
        //render the Card & pass in some props
        render(
            <Card
                //destructure the props from a variable instead of manually adding the props here:
                {...cardProps}
            />
        )//render
        expect(
            screen.getByRole("heading", {
                name: /sydney/i
            })
        ).toBeInTheDocument();
    });

    test("should show phone number for cat", () => {
        render(
            <Card
                //if we want to rename one of the props, we do it like this:
                {...cardProps}
            //name: "newName"
            />
        )//render
        expect(
            // we can get this by role but we're trying getByText()
            screen.getByText(/555-555-5555/i)).toBeInTheDocument();
    });

    test("should show email for cat", () => {
        render(
            <Card
                {...cardProps}
            />
        )//render
        expect(
            screen.getByText(/drew@gmail.com/i)).toBeInTheDocument();
    });

    test("should get the picture of cat", () => {
        render(
            <Card
                {...cardProps}
            />
        )//render
        //get the element by the alt text, then check that the element is the url in our Card component
        expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
    });

    test("should show outlined heart", () => {
        render(<Card {...cardProps} />);
        expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
    });

    test("should show filled heart", () => {
        //use default props except overwrite the 'favoured' prop:
        render(<Card {...cardProps} favoured = {true} />);
        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
    });

    test("Should toggle heart status", () => {
        render(<Card {...cardProps} />);
        //first click should fill heart
        userEvents.click(screen.getByRole("button"));
        expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

        //2nd click should clear the heart
        userEvents.click(screen.getByRole("button"));
        expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
        expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();


    });

});//describe 'Card'


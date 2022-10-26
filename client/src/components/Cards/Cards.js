//must import the 'Card' component to use it here
import { useContext } from "react";
import Card from "../Card/Card"
import { PetsContext } from "../Pets/Pets";
import "./Cards.css";
//we'll probably be getting an input array
const Cards = () => {

    const { cats } = useContext(PetsContext);


//we moved this to 'Card.js' in using the 'useContext'
    // // take in the index of object we want to update, and whatever the favoured status is true/false
    // const updateFavourite = (index, favoured) => {
    //     //initially gets the value of the cats array... we use the 'spread' operator prefix--> "..."
    //     const updatedCats = [...cats]; 
    //     // I think this lets us edit the values more easily..? Although I don't know this sytax too well;
    //     // but we update the index passed in w/ the favoured status passed in
    //     updatedCats[index].favoured = favoured; 
    //     //then we pass the updated array to setCats, which updates our cats array; 
    //     // We also have to call this function in the Cards JSX, where we want to call this function;
    //     setCats(updatedCats)
    // }

    return (
        <div>
            {/* return ( */}
            <div className="pet-cards-container">
                {cats.map((cat, index) => {
                    return <Card
                        key={cat.id}
                        name={cat.name}
                        phone={cat.phone}
                        email={cat.email}
                        image={cat.image}
                        favoured={cat.favoured}
                        index={index}
                    />
                })}
            </div>
            {/* ); */}
        </div>
    );
};

export default Cards;
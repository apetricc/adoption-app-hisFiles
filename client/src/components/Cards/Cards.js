//must import the 'Card' component to use it here
import Card from "../Card/Card"
import "./Cards.css";
//we'll probably be getting an input array
const Cards = ({ cats }) => {
    return (
        <div>
            {/* return ( */}
            <div className="pet-cards-container">
                {cats.map((cat) => {
                    return <Card
                        key={cat.id}
                        name={cat.name}
                        phone={cat.phone}
                        email={cat.email}
                        image={cat.image}
                        favoured={cat.favoured}
                    />
                })}
            </div>
            {/* ); */}
        </div>
    );
};

export default Cards;
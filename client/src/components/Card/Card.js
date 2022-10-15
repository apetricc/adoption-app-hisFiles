import { useState } from "react";
import heartFilled from "../../svgs/heartFilled.svg"
import heartOutlined from "../../svgs/heartOutlined.svg"
import "./Card.css";

// src/svgs/heartFilled.svg
const Card = ({ name, phone, email, image, favoured }) => {
    //setting up a localState w/ initial value from our props that came in with anon func
    const [isFavoured, setIsFavoured] = useState(favoured);
    const toggleFavoured = () => {
        setIsFavoured(!isFavoured);
    };
    return (
        <article className="card">
            <div className="card-header">
                <img src={image.url} alt={image.alt} className="card-img" />
                {/* in the card-header we use a ternary expression to show the right heart svg */}
                <button className="heart" onClick={toggleFavoured}>
                    {isFavoured ? (
                        <img src={heartFilled} alt="filled heart" />
                    ) : <img src={heartOutlined} alt="outlined heart" />}
                </button>
            </div>  {/* closing the card-header div */}
            <div className="card-content">
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </article>
    );
};

export default Card;
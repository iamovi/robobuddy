import React from "react";

const Card = ({ name, email, id }) => {
    return (
        <div className="main">
            <img src={`https://robohash.org/${id}`} alt="" className="robo_img"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
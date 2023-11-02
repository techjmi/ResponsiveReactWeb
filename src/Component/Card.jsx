import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, keywords }) => {
   const imageUrl = `https://source.unsplash.com/random/800x350/?${keywords}`;
  return (
    <div className="col-md-4 col-12 mx-auto">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

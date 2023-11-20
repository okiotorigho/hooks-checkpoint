import React from "react";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <img
        src={posterURL}
        alt={`${title} poster`}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;

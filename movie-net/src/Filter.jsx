import React from "react";

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div>
      <label htmlFor="titleFilter">Title:</label>
      <input type="text" id="titleFilter" onChange={onTitleChange} />
      <br />
      <label htmlFor="ratingFilter">Rating:</label>
      <input
        type="number"
        id="ratingFilter"
        min="1"
        max="10"
        onChange={onRatingChange}
      />
    </div>
  );
};

export default Filter;

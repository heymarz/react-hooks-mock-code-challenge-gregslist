import React, { useState } from "react";

function ListingCard({ listing, onHandleDelete }) {
  const [favoriteStar, setFavoriteStar] = useState(false);
  const { image, description, location, id } = listing

  function handleDeleteListing() {
    fetch(`http://localhost:6001/listings${id}`, {
      method: "DELETE",
    })
    .then ((r)=> r.json())
    .then (()=> {
      onHandleDelete(id)
    })
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteStar ? (
          <button onClick= {()=>setFavoriteStar(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick= {()=> setFavoriteStar(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span>{location}</span>
        <button onClick={handleDeleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

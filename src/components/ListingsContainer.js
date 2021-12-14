import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((r)=>r.json())
    .then((listings)=>setListings(listings))
  },[])
  
  function handleDelete(id){
    const updatedArray= listings.filter(
      (listing)=> listing.id !== id
      );
    setListings(updatedArray)
  }

  const filterListingArray = listings.filter((listing)=>{
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })
  console.log(filterListingArray)

  const listingCards = listings.map((listingObj)=>{
    return <ListingCard 
    key={listingObj.id} 
    listing={listingObj}
    onHandleDelete={handleDelete}
    />
  })
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;

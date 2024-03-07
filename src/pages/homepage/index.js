import React from "react";
import './style.css'
import ItemCard from "../../components/ItemCard/ItemCard";

const Homepage = () => {
  return <div className="horizontal-scroller">
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
  </div>;
};

export default Homepage;

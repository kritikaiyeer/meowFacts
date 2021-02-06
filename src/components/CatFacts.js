import React from "react";

const CatFacts = ({ cat, fact }) => {
  const { url } = cat;
  return (
    <div className="recipe">
      <h2>{fact.fact}</h2>
      <img src={url} alt='' />
    </div>
  );
};

export default CatFacts;
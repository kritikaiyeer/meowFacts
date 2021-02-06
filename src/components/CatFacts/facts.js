import React from "react";
import {FactCardContent,FactCardH2, FactCardImg} from './CatFactsElements';

const CatFacts = ({ cat, fact }) => {
  const { url } = cat;
  return (
    <FactCardContent>
      <FactCardImg src={url} alt='' />
      <FactCardH2>{fact ? fact.fact : ''}</FactCardH2>
    </FactCardContent>
  );
};

export default CatFacts;
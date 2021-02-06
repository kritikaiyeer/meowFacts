import React from "react";
import {FactCardContent,FactCardH2, FactCardImg} from './CatFactsElements';

const CatFacts = ({ cat, fact }) => {
  const { url } = cat;
  return (
    <FactCardContent>
      <FactCardH2>{fact ? fact.fact : ''}</FactCardH2>
      <FactCardImg src={url} alt='' />
    </FactCardContent>
  );
};

export default CatFacts;
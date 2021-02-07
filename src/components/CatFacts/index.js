import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  CarouselContainer,
  CarouselContent,
  CarouselLeft,
  CarouselItem,
  CarouselRight,
  CarouselP,
} from "./CatFactsElements";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


const Carousel = () => {

  const [facts, setfacts] = useState([]);
  const [cats, setCats] = useState([]);
  console.log(facts, cats)

  const getFacts = async () => {
    const response = await Axios.get('https://hidden-dawn-56454.herokuapp.com/random')
    console.log({response})
      setCats(response.data.image);
      setfacts(response.data.fact);
  };

  useEffect(() => {
    if (facts.length === 0 && cats.length === 0) {
      getFacts();
    }
  },[facts, cats]);

  return (
      <CarouselContainer>
        <CarouselContent
          style={{ backgroundImage: `url(${cats})` }}
        >
          <CarouselLeft
            onClick={() => {getFacts();}}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </CarouselLeft>
          <CarouselItem>
            <CarouselP>{facts}</CarouselP>
          </CarouselItem>
          <CarouselRight
            onClick={() => {getFacts();}}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </CarouselRight>
        </CarouselContent>
      </CarouselContainer>
  );
};

export default Carousel;

import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  CarouselContainer,
  CarouselContent,
  CarouselLeft,
  CarouselItem,
  CarouselRight,
  CarouselP,
  FactCardImg,
} from "./CatFactsElements";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Carousel = () => {
  const [facts, setfacts] = useState([]);
  const [cats, setCats] = useState([]);
  const [load, setLoad] = useState(false);

  const getFacts = async () => {
    const response = await Axios.get(
      "https://hidden-dawn-56454.herokuapp.com/random"
    );
    setCats(response.data.image);
    setfacts(response.data.fact);
  };

  useEffect(() => {
    if (facts && facts.length === 0 && cats.length === 0) {
      getFacts();
    }
  }, [facts, cats]);

  return (
    <CarouselContainer>
      <CarouselContent>
        <CarouselLeft
          onClick={() => {
            getFacts();
            setCats([]);
            setfacts([]);
            setLoad(false);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </CarouselLeft>
        {load && (
          <CarouselItem>
            <CarouselP>{facts}</CarouselP>
          </CarouselItem>
        )}
        <CarouselRight
          onClick={() => {
            getFacts();
            setCats([]);
            setfacts([]);
            setLoad(false);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </CarouselRight>
      </CarouselContent>
      <FactCardImg src={cats} alt="" onLoad={() => setLoad(true)} />
    </CarouselContainer>
  );
};

export default Carousel;

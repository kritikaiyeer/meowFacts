import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  CarouselContainer,
  CarouselContent,
  CarouselLeft,
  CarouselItem,
  CarouselH1,
  CatFactsBody,
  CarouselRight,
  CarouselP,
} from "./CatFactsElements";
import { images } from "../data";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CatFacts from "./facts";

const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);

  const [facts, setfacts] = useState([]);
  const [cats, setCats] = useState([]);

  const facturl = "https://catfact.ninja/facts?limit=20&max_length=140";
  const catsurl =
    "https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&format=json&limit=20";

  const getFacts = async () => {
    const response = await Axios.get(facturl, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "eb9fa05e-20ce-4463-8e50-812e16ad1d60",
      },
    });
    if (response.data) {
      setfacts(response.data.data);
    }
  };

  const getCats = async () => {
    const response = await Axios.get(catsurl);
    console.log({ response });
    if (response.data) {
      setCats(response.data);
    }
  };

  useEffect(() => {
    if (facts.length === 0 && cats.length === 0) {
      getFacts();
      getCats();
    }
  });

  return (
    <>
      <CarouselContainer>
        <CarouselContent
          style={{ backgroundImage: `url(${images[currImg].url})` }}
        >
          <CarouselLeft
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </CarouselLeft>
          <CarouselItem>
            <CarouselP>{images[currImg].subtitle}</CarouselP>
          </CarouselItem>
          <CarouselRight
            onClick={() => {
              currImg < images.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </CarouselRight>
        </CarouselContent>
      </CarouselContainer>
      <CatFactsBody>
        {cats !== [] &&
          cats.map((cat, index) => (
            <CatFacts key={uuidv4()} cat={cat} fact={facts[index]} />
          ))}
      </CatFactsBody>
    </>
  );
};

export default Carousel;

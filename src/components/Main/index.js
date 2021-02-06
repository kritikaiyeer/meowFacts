import React, { useState } from "react";
import NavBar from "../NavBar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./MainElements";
import CatFacts from "../CatFacts";

const Hero = () => {
  const [state, setState] = useState("start");
  return (
    <>
      {state === "start" && (
        <HeroContainer>
          <NavBar />
          <HeroContent>
            <HeroItems>
              <HeroH1>Did you know these facts about pet CATS ?</HeroH1>
              <HeroP>Read in 60 seconds</HeroP>
              <HeroBtn onClick={() => setState("fact")}>GET STARTED</HeroBtn>
            </HeroItems>
          </HeroContent>
        </HeroContainer>
      )}
      {state === "fact" && (
          <CatFacts />
      )}
    </>
  );
};

export default Hero;

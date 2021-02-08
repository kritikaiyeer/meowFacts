import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: rgb(4, 51, 8);
  border: '3px solid rgba(0, 0, 0, 0.05)', 
`;

export const CarouselContent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  place-items: center;
  background-position: center;
`;

export const CarouselItem = styled.div`
  flex: 80%;
  height: 100%;
  display: grid;
  place-items: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  text-align-last: center;
  
`;

export const CarouselLeft = styled.div`
  flex: 2%;
  height: 100%;
  background-color: transparent;
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
`;

export const CarouselRight = styled.div`
    flex: 2%;
    height: 100%;
    background-color: transparent;
    display: grid;
    place-items: center;
    color: white;
    cursor: pointer;
}
`;

export const CarouselH1 = styled.h1`
  font-size: 5rem;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 9px;
`;

export const CarouselP = styled.p`
  font-size: 2rem;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 9px;
`;

export const FactCardContent = styled.div`
  width: 40%;
  height: 40%;
  margin: 3rem;
  display: flex;
  flex: wrap;
  flex-direction: column;
  background-color: #d3d3d3;
  padding: 2rem;
  position: relative;
  border-radius: 0.5rem;
`;

export const FactCardH2 = styled.h2`
  border-radius: 0.5rem;
  font-size: 2.5rem;
  font-weight: #bold;
  color: #000;
`;

export const FactCardImg = styled.img`
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
`;

import styled from 'styled-components';
import ImgBg from './wood.jpg';

export const CarouselContainer = styled.div`
    width: 100%;
    height: 450px;
    background-color: rgb(4, 51, 8);
`;

export const CarouselContent = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
`;

export const CarouselItem = styled.div`
    flex: 80%;
    height: 100%;
    display: grid;
    place-items: center;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    text-align-last:center;
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

export const CatFactsBody = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
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
    width: 30rem;
    margin: 3rem;
    display: flex;
    flex-direction: column;
    background-color: #d3d3d3;
    padding: 2rem;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 2rem 3rem 5rem #aaa;
`;

export const FactCardH2 = styled.h2`   
    border-radius: 0.5rem;
    padding: 0.3rem 0.5rem;
    position: absolute;
    top: 2.5rem;
    left: 2.5rem;
    right: 2.5rem;
    font-size: 2rem;
    font-weight: 400;
    text-shadow: 0 0.5rem 0.5rem #555;
    color: #fff;
`;

export const FactCardImg = styled.img`   
    border-radius: 0.5rem;
    object-fit: cover;
`;
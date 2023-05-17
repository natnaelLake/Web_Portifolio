import styled from "@emotion/styled";

export const CardContainer = styled.div`
  /* background: url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80);
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Playfair Display", serif;
  } */
`;
export const ContainerOne = styled.div`
  @media (min-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CyanCard = styled.div`
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  padding: 30px;
  margin: 20px;
  background-color: white;
  border-top: 3px solid hsl(180, 62%, 55%);
  p {
    color: hsl(229, 6%, 66%);
  }
  h2 {
    color: hsl(234, 12%, 34%);
    font-weight: 600;
  }
  @media (max-width: 450px) {
    height: 200px;
  }
  @media (max-width: 950px) and (min-width: 450px) {
    text-align: center;
    height: 180px;
  }
  @media (min-width: 950px) {
    position: relative;
    top: 150px;
    width: 20%;
  }
`;
export const RedCard = styled.div`
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  padding: 30px;
  margin: 20px;
  background-color: white;
  border-top: 3px solid hsl(0, 78%, 62%);

  p {
    color: hsl(229, 6%, 66%);
  }
  h2 {
    color: hsl(234, 12%, 34%);
    font-weight: 600;
  }
  @media (max-width: 450px) {
    height: 200px;
  }
  @media (max-width: 950px) and (min-width: 450px) {
    text-align: center;
    height: 180px;
  }
  @media (min-width: 950px) {
    width: 20%;
  }
`;

export const BlueCard = styled.div`
  border-top: 3px solid hsl(212, 86%, 64%);
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  padding: 30px;
  background-color: white;
  margin: 20px;
  p {
    color: hsl(229, 6%, 66%);
  }
  h2 {
    color: hsl(234, 12%, 34%);
    font-weight: 600;
  }
  @media (max-width: 450px) {
    height: 200px;
  }
  @media (max-width: 950px) and (min-width: 450px) {
    text-align: center;
    height: 180px;
  }
  @media (min-width: 950px) {
    position: relative;
    top: 150px;
    width: 20%;
  }
`;
export const OrangeCard = styled.div`
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
  padding: 30px;
  margin: 20px;
  background-color: white;
  border-top: 3px solid hsl(34, 97%, 64%);

  p {
    color: hsl(229, 6%, 66%);
  }
  h2 {
    color: hsl(234, 12%, 34%);
    font-weight: 600;
  }
  @media (max-width: 450px) {
    height: 200px;
  }
  @media (max-width: 950px) and (min-width: 450px) {
    text-align: center;
    height: 180px;
  }
  @media (min-width: 950px) {
    width: 20%;
  }
`;
export const ContainerTwo = styled.div`
  @media (min-width: 950px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardHeader = styled.div`
  margin: 20px;
  h1 {
    text-align: center;
    font-size: 3rem;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
  }
`;
export const CardListContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px 20px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 60px;
  > div {
    box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.5);
  }
`;
export const CardImage = styled.div`
  width: 400px;
  height: 250px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
`;
export const CardText = styled.div`
  margin: -30px auto;
  margin-bottom: -50px;
  height: 300px;
  width: 300px;
  background-color: #1d1c20;
  color: #fff;
  padding: 20px;
  p {
    font-size: 1.25rem;
  }
`;
export const P1 = styled.p`
  font-style: italic;
`;
export const CardTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
  margin-top: 5px;
`;
export const CardPrice = styled.div`
  width: 100px;
  height: 100px;
  background-color: #970c0a;
  color: #fff;
  margin-left: auto;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

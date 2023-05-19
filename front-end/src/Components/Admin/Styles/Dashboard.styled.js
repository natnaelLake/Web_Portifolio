import styled from "@emotion/styled";

export const DashContainer = styled.div`
 --color: rgba(30, 30, 30);
  --bgColor: rgba(245, 245, 245);
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 2rem;
  font-family: "Exo 2", sans-serif;
  color: var(--color);
  background: var(--bgColor);
  @media screen and (max-width:768px){
    width:100%
  }
  h1 {
    text-align: center;
  }
`;

export const ListHolder = styled.ol`
  width: min(60rem, 90%);
  margin-inline: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  list-style: none;
  counter-reset: stepnr;
`;
export const List = styled.li`
  :nth-child(6n + 1) {
    --accent-color: #b8df4e;
  }
  :nth-child(6n + 2) {
    --accent-color: #4cbccb;
  }
  :nth-child(6n + 3) {
    --accent-color: #7197d3;
  }
  :nth-child(6n + 4) {
    --accent-color: #ae78cb;
  }
  :nth-child(6n + 5) {
    --accent-color: #7dc7a4;
  }
  :nth-child(6n + 6) {
    --accent-color: #f078c2;
  }
  counter-increment: stepnr;
  width: 18rem;
  --borderS: 2rem;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: calc(var(--borderS) + 2rem);
  position: relative;
  &::before,
  &::after {
    inset: 0;
  position: absolute;
  border-radius: 50%;
  border: var(--borderS) solid var(--bgColor);
  line-height: 1.1;
    }
    &::before {
        content: counter(stepnr);
  color: var(--accent-color);
  padding-left: 10rem;
  font-size: 12rem;
  font-weight: 700;
  overflow: hidden;
    }
    &::after {
        content: "";
        filter: drop-shadow(-0.25rem 0.25rem 0.0675rem rgba(0, 0, 0, 0.75))
        blur(5px);
    }
    > * {
        width: 7.5rem;
    }
    `;
export const Card = styled.div`
  font-size: 2rem;
  color: var(--accent-color);
  text-align: center;
`;
export const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;
export const CardDescr = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
`;

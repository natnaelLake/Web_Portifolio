import styled from "@emotion/styled";

export const ContactCard = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  display: grid;
  place-items: center;
  background-color: aliceblue;
  display: grid;
  grid-template-columns: 6fr 4fr;
  width: 90%;
  height: 100%;

  background: hsl(0, 0%, 95%);
  box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: auto;
    /* display: none; */
    flex-direction: column;
    overflow-y: scroll;
    height: 100vh;
  /* margin-bottom: 720px; */

  }
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  @media screen and (max-width: 768px) {
    gap: 1rem;
    width: 70%;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
  padding: 0 3em;
  /* width: minmax(80px, 80%); */
  display: flex;
  /* flex-direction: column; */
  /* gap: .75em; */
  @media screen and (max-width: 768px) {
    gap: 2em;
    padding: 0 2em;
    width: 100%;
  }
`;
export const Name = styled.div`
  width: 70%;
  font-size: 2.875rem;

  white-space: nowrap;
  color: transparent;
  -webkit-text-stroke: 1px #222222;
  /* &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10%;
    height: 5%;

    background: black;
  } */
  @media screen and (max-width: 768px) {
    content: "";
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5%;
    font-size: 1.5rem;
  }
`;
export const Content = styled.div`
  font-size: 1.5em;
  color: #404040;
`;
export const ListHolder = styled.ul`
  /* margin-left: %; */
  @media screen and (max-width: 768px) {
    /* margin-left: -25%; */
    padding: 0;
    /* margin-bottom: 5%; */
    width: 100%;
  }
`;
export const List = styled.li`
  display: flex;
  list-style-type: none;
  font-weight: lighter;
  font-family: "Times New Roman", Times, serif;
  padding-left: 15px;
  @media screen and (max-width: 768px) {
    margin-bottom: 5%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;
export const ContactButton = styled.button`
  font-size: 1.6em;
  color: white;
  padding: 0.4em 0.8em;
  width: max-content;
  background: #222222;
  border-radius: 4px;
  transition: all 250 ease-in-out;
  cursor: pointer;
  margin-bottom: 10%;
  &:hover {
    background: #444444;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 5%;
    width: 100%;
  }
`;
export const ImageContainer = styled.div`
  overflow: hidden;
  clip-path: polygon(35% 0%, 100% 0, 100% 100%, 8% 100%);
  object-fit: cover;
  @media screen and (max-width: 768px) {
    width: 70%;
  object-fit: cover;
  margin-top: 220px;
  margin-bottom: 410px;
  clip-path: none;
    /* display: flex; */
  }
`;
export const Image = styled.img`
  margin-top: 25px;
  height: 100%;
  width: 100%;
  margin-left: 50px;
`;

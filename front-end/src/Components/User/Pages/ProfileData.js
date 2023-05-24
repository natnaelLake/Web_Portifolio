import React from "react";
import {
  BlueCard,
  Card,
  CardContainer,
  CardHeader,
  CardImage,
  CardListContainer,
  CardPrice,
  CardText,
  ContainerOne,
  ContainerTwo,
  CyanCard,
  OrangeCard,
  P1,
  RedCard,
} from "../Styles/CardStyle.styled";
import { useNavigate } from "react-router-dom";
import ImageOne from '../../../assets/Hotel Management.png'
import ImageTwo from '../../../assets/E-learning.png'
import imageFour from '../../../assets/Web Portfolio.png'
import ImageThree from "../../../assets/Web Chat.png";
export default function ProfileData() {
  const navigate = useNavigate();
  return (
    <CardContainer>
      <ContainerOne>
        <CyanCard>
          <h2>Hotel Management System</h2>
          <p>
            This the full react and front end system that can used for hotels
            advetising page.
          </p>
          <br />
          <br />

          <img
            src={ImageOne}
            alt="Hotel Management"
            width='270px'
            height='150px'
          />
          <br />
          <br />
          <P1>Used Technologies</P1>
          <li>
            <a href="https://nodejs.org/en" target="_blank">
              ReactJs
            </a>
          </li>
          <li>
            <a href="https://legacy.reactjs.org/" target="_blank">
              NodeJs
            </a>
          </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank">
              Bootstrap
            </a>
          </li>
          <CardPrice
          target="_blank"
            href = "https://full-react-js-code.vercel.app/"
          >
            View
          </CardPrice>
        </CyanCard>

        <RedCard>
          <h2>E-learning Platform</h2>
          <p>
            This an online e-learning platform for students and teachers that can give an opportunity to access videos, files and other info from teachers
          </p>
          <br />
          <br />

          <img
            src={ImageTwo}
            alt="Hotel Management"
            width='270px'
            height='150px'
          />
          <br />
          <br />

          <P1>Used Technologies</P1>
          <li>
            <a href="https://nodejs.org/en" target="_blank">
              ReactJs
            </a>
          </li>
          <li>
            <a href="https://legacy.reactjs.org/" target="_blank">
              NodeJs
            </a>
          </li>
          <li>
            <a href="https://react-bootstrap.github.io/" target="_blank">
              React Bootstrap
            </a>
          </li>
          <li>
            <a href="https://expressjs.com/" target="_blank">
              Express Js
            </a>
          </li>
          <li>
            <a href="https://www.mongodb.com/" target="_blank">
              Mongodb
            </a>
          </li>
          <CardPrice
            href = "https://e-learning-web-app.onrender.com/"
            target="_blank"
          >
            View
          </CardPrice>
        </RedCard>

        <BlueCard>
          <h2>Web Chat App</h2>
          <p>
            This A Chat app that is used to communication with group and individual.
          </p>
          <br />
          <br />

          <img
            src={ImageThree}
            alt="Hotel Management"
            width='270px'
            height='150px'
          />
          <br />
          <br />

          <P1>Used Technologies</P1>
          <li>
            <a href="https://nodejs.org/en" target="_blank">
              ReactJs
            </a>
          </li>
          <li>
            <a href="https://legacy.reactjs.org/" target="_blank">
              NodeJs
            </a>
          </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank">
              Socket io
            </a>
          </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank">
              Material Ui
            </a>
          </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank">
              Express Js
            </a>
          </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank">
              Mongodb
            </a>
          </li>
          <CardPrice
            href = "https://web-chat-application.onrender.com/"
            target="_blank"
          >
            View
          </CardPrice>
        </BlueCard>
      </ContainerOne>
      <ContainerTwo>
        <OrangeCard>
          <h2>Web Portfolio</h2>
          <p>This website is the web which is used to introduce our self and our documentation for any Tech based companies.</p>
          <br />
          <br />
          <img
            src={imageFour}
            alt="Hotel Management"
            width='270px'
            height='150px'
          />
          <br />
          <br />

          <P1>Used Technologies</P1>
          <li>
            <a href="https://nodejs.org/en" target="_blank">
              ReactJs
            </a>
          </li>
          <li>
            <a href="https://legacy.reactjs.org/" target="_blank">
              NodeJs
            </a>
          </li>
          <li>
            <a href="https://emotion.sh/docs/introduction" target="_blank">
              Emotion
            </a>
          </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank">
              Express Js
            </a>
          </li>
          <li>
            <a href="https://getbootstrap.com/" target="_blank">
              Mongo Db
            </a>
          </li>
          <CardPrice href = 'https://my-web-portifolio.onrender.com' target="_blank">
            View
          </CardPrice>
        </OrangeCard>
      </ContainerTwo>
      {/* <CardHeader id="header">
        <h1>La Saveur</h1>
        <p>The Traditional Fench Taste</p>
      </CardHeader>
      <CardListContainer class="container">
        <Card class="card">
          <CardImage class="card-image">
            <img src="https://images.unsplash.com/photo-1604135307399-86c6ce0aba8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" />
          </CardImage>
          <CardText class="card-text">
            <P1 class="card-meal-type">Breakfast/Eggs</P1>
            <h2 class="card-title">Délicieux Bénédicte</h2>
            <p class="card-body">
              Eggs Benedict with hollandaise sauce, crispy bacon and an
              assortment of garden herbs.
            </p>
            <br />

            <P1>Used Technologies</P1>
            <li>
              <a href="https://nodejs.org/en" target="_blank">
                ReactJs
              </a>
            </li>
            <li>
              <a href="https://legacy.reactjs.org/" target="_blank">
                NodeJs
              </a>
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="_blank">
                Bootstrap
              </a>
            </li>
          </CardText>
          <CardPrice
            onClick={navigate("https://full-react-js-code.vercel.app/")}
          >
            View
          </CardPrice>
        </Card>
        <Card class="card">
          <CardImage class="card-image">
            <img src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80" />
          </CardImage>
          <CardText class="card-text">
            <P1 class="card-meal-type">Lunch/Meat</P1>
            <h2 class="card-title">Du bœuf Burger</h2>
            <p class="card-body">
              A beef burger with wholewheat patty, juicy lettuce and a side of
              gluten free fries
            </p>
            <br />

            <P1>Used Technologies</P1>
            <li>
              <a href="https://nodejs.org/en" target="_blank">
                ReactJs
              </a>
            </li>
            <li>
              <a href="https://legacy.reactjs.org/" target="_blank">
                NodeJs
              </a>
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="_blank">
                Bootstrap
              </a>
            </li>
          </CardText>
          <CardPrice
            onClick={navigate("https://full-react-js-code.vercel.app/")}
          >
            View
          </CardPrice>
        </Card>
        <Card class="card">
          <CardImage class="card-image">
            <img src="https://images.unsplash.com/photo-1635146037526-a75e6905ad78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" />
          </CardImage>
          <CardText class="card-text">
            <P1 class="card-meal-type">Soups/Meat</P1>
            <h2 class="card-title">Soupe à l’oignon</h2>
            <p class="card-body">
              The traditional French soup made with onions and beef with a
              dollop of garlic and saffaron mayonise.
            </p>
            <br />

            <P1>Used Technologies</P1>
            <li>
              <a href="https://nodejs.org/en" target="_blank">
                ReactJs
              </a>
            </li>
            <li>
              <a href="https://legacy.reactjs.org/" target="_blank">
                NodeJs
              </a>
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="_blank">
                Bootstrap
              </a>
            </li>
          </CardText>
          <CardPrice
            onClick={navigate("https://full-react-js-code.vercel.app/")}
          >
            View
          </CardPrice>
        </Card>
        <Card class="card">
          <CardImage class="card-image">
            <img src="https://images.unsplash.com/photo-1635146037526-a75e6905ad78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" />
          </CardImage>
          <CardText class="card-text">
            <P1 class="card-meal-type">Appetizers/Meat</P1>
            <h2 class="card-title">Coq au Vin</h2>
            <p class="card-body">
              Chickens doused in wine, mushrooms, pork, onions and garlic.
            </p>
            <br />

            <P1>Used Technologies</P1>
            <li>
              <a href="https://nodejs.org/en" target="_blank">
                ReactJs
              </a>
            </li>
            <li>
              <a href="https://legacy.reactjs.org/" target="_blank">
                NodeJs
              </a>
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="_blank">
                Bootstrap
              </a>
            </li>
          </CardText>
          <CardPrice
            onClick={navigate("https://full-react-js-code.vercel.app/")}
          >
            View
          </CardPrice>
        </Card>
        <Card class="card">
          <CardImage class="card-image">
            <img src="https://images.unsplash.com/photo-1635146037526-a75e6905ad78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80" />
          </CardImage>
          <CardText class="card-text">
            <P1 class="card-meal-type">Appetizers/Meat</P1>
            <h2 class="card-title">Coq au Vin</h2>
            <p class="card-body">
              Chickens doused in wine, mushrooms, pork, onions and garlic.
            </p>
            <br />
            <P1>Used Technologies</P1>
            <li>
              <a href="https://nodejs.org/en" target="_blank">
                ReactJs
              </a>
            </li>
            <li>
              <a href="https://legacy.reactjs.org/" target="_blank">
                NodeJs
              </a>
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="_blank">
                Bootstrap
              </a>
            </li>
          </CardText>
          <CardPrice
            onClick={navigate("https://full-react-js-code.vercel.app/")}
          >
            View
          </CardPrice>
        </Card> */}
      {/* </CardListContainer> */}
    </CardContainer>
  );
}

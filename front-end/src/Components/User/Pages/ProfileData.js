import React from "react";
import "./styl.css";
import ProfileImage from "../../../assets/photo_2023-04-26_19-15-45.jpg";
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

export default function ProfileData() {
  return (
    <CardContainer>
      <ContainerOne>
        <CyanCard>
          <h2>Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img
            src="https://assets.codepen.io/2301174/icon-supervisor.svg"
            alt=""
          />
        </CyanCard>

        <RedCard>
          <h2>Team Builder</h2>
          <p>
            Scans our talent network to create the optimal team for your project
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-team-builder.svg"
            alt=""
          />
        </RedCard>

        <BlueCard>
          <h2>Calculator</h2>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            src="https://assets.codepen.io/2301174/icon-calculator.svg"
            alt=" "
          />
        </BlueCard>
      </ContainerOne>
      <ContainerTwo>
        <OrangeCard>
          <h2>Karma</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
        </OrangeCard>
      </ContainerTwo>
      <CardHeader id="header">
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
          </CardText>
          <CardPrice class="card-price">$56</CardPrice>
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
          </CardText>
          <CardPrice class="card-price">$39</CardPrice>
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
          </CardText>
          <CardPrice class="card-price">$69</CardPrice>
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
          </CardText>
          <CardPrice class="card-price">$104</CardPrice>
        </Card>
      </CardListContainer>
    </CardContainer>
  );
}

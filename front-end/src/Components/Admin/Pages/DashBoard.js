import React from "react";
import { Card, CardDescr, CardTitle, DashContainer, List, ListHolder } from "../Styles/Dashboard.styled";

export default function DashBoard() {
  return (
    <DashContainer>
      <h1>Data Dashboard</h1>
      <ListHolder>
        <List>
          <Card class="icon">
            <i class="fa-solid fa-bicycle"></i>
          </Card>
          <CardTitle class="title">Step 1</CardTitle>
          <CardDescr class="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            porro.
          </CardDescr>
        </List>
        <List>
          <Card class="icon">
            <i class="fa-solid fa-car"></i>
          </Card>
          <CardTitle class="title">Step 2</CardTitle>
          <CardDescr class="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            porro.
          </CardDescr>
        </List>
        <List>
          <Card class="icon">
            <i class="fa-solid fa-helicopter"></i>
          </Card>
          <CardTitle class="title">Step 3</CardTitle>
          <CardDescr class="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            porro.
          </CardDescr>
        </List>
        <List>
          <Card class="icon">
            <i class="fa-solid fa-plane"></i>
          </Card>
          <CardTitle class="title">Step 4</CardTitle>
          <CardDescr class="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            porro.
          </CardDescr>
        </List>
        <List>
          <Card class="icon">
            <i class="fa-solid fa-rocket"></i>
          </Card>
          <CardTitle class="title">Step 5</CardTitle>
          <CardDescr class="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            porro.
          </CardDescr>
        </List>
        <List>
          <Card class="icon">
            <i class="fa-solid fa-bus"></i>
          </Card>
          <CardTitle class="title">Step 6</CardTitle>
          <CardDescr class="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            porro.
          </CardDescr>
        </List>
      </ListHolder>
      
    </DashContainer>
  );
}

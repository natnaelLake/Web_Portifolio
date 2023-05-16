import React from "react";
import { ContactButton, ContactCard, ContactInfo, Content, Description, Image, ImageContainer, List, ListHolder, Name } from "../Styles/Contact.styled";
import {ImLocation} from 'react-icons/im'
import {FiMail} from 'react-icons/fi'
import {Avatar} from 'rebass'
import {BsFillTelephoneFill} from 'react-icons/bs'
import ProfileImage from '../../../assets/photo_2023-04-26_19-15-45.jpg'
export default function Contact() {
  return (
    <div>
      <ContactCard>
            <ContactInfo>
               {/* <div class="nav"> */}
                {/* <ul class="navbar">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul> */}
              {/* </div>  */}
              <Description class="left">
                {/* <div class="block"> */}
                  <Name class="header">Hi, I'm Bewuketu Lake</Name>
                  <Content class="content">
                    <ListHolder>
                      <p>Contact Me With</p>
                      <List>
                        <BsFillTelephoneFill/>&nbsp;09 34 62 77 08
                      </List>
                      <List>
                        <ImLocation/>&nbsp;Addis Ababa Ethiopia
                      </List>
                      <List>
                        <FiMail/>&nbsp;bewuketulake1212 @gmail.com
                      </List>
                      
                    </ListHolder>
                  </Content>
                {/* </div> */}
                <ContactButton class="c2a">Contact me!</ContactButton>
              </Description>
            </ContactInfo>
            <ImageContainer >
              <Image
                src={ProfileImage}
                alt="Profile Image"
              />
            </ImageContainer>
      </ContactCard>
    </div>
  );
}

import React from "react";
import {
  ContactButton,
  ContactCard,
  ContactInfo,
  Content,
  Description,
  Image,
  ImageContainer,
  List,
  ListHolder,
  Name,
  SocilaMedia,
} from "../Styles/Contact.styled";
import { ImLocation } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import ProfileImage from "../../../assets/Profile Image.jpeg";
export default function Contact() {
  return (
    <div>
      <ContactCard>
        <ContactInfo>
          <Description class="left">
            <Name class="header">Hi, I'm Bewuketu Lake</Name>
            <Content class="content">
              <ListHolder>
                <p>Contact Me With</p>
                <List>
                  <BsFillTelephoneFill />
                  &nbsp;09 34 62 77 08
                </List>
                <List>
                  <ImLocation />
                  &nbsp;Addis Ababa Ethiopia
                </List>
                <List>
                  <FiMail />
                  &nbsp;bewuketulake1212 @gmail.com
                </List>
                <SocilaMedia>
                  <li>
                    <a href="https://github.com/natnaelLake" target="_blanck">
                      <AiFillGithub />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/Nati_L_man" target="_blanck">
                      <BsTelegram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/bewuketu-lake-471524228/"
                      target="_blanck"
                    >
                      <AiFillLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blanck">
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blanck">
                      <AiFillTwitterCircle />
                    </a>
                  </li>
                </SocilaMedia>
              </ListHolder>
            </Content>
            <ContactButton class="c2a">Contact me!</ContactButton>
          </Description>
        </ContactInfo>
        <ImageContainer>
          <Image src={ProfileImage} alt="Profile Image" />
        </ImageContainer>
      </ContactCard>
    </div>
  );
}

import React from 'react'
import { BodyContainer, MainContainer } from '../Styles/Container.styled'
import Header from './Header'
import DisplayScreen from './DisplayScreen'
import SideBar from './SideBar'

export default function Container() {
  return (
    <MainContainer>
        <Header/>
        <BodyContainer>
            <SideBar/>
            <DisplayScreen/>
        </BodyContainer>
    </MainContainer>
  )
}

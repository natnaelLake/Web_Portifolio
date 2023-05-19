import React from 'react'
import ProfileData from './ProfileData'
import UserDisplayScreen from './UserDisplayScreen'
import Header from './Header'
import { Container } from '../Styles/Container.styled'

export default function UserContainer() {
  return (
    <Container>
      <Header/>
      <UserDisplayScreen/>
      <ProfileData/>
    </Container>
  )
}

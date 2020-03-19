import React from 'react';
import { Segment, Image} from "semantic-ui-react";
import Pic from './banner.jpg';
import HeaderText from './HeaderText';
import styled from 'styled-components'

const Home = () => (
  <AppContainer>
    <Image src={Pic} size='massive' fluid/>
    <div>
    <HeaderText fSize="large">Welcome</HeaderText>
    <Segment as={Transparent}>
      <HeaderText fSize='small'>Sale</HeaderText>
    </Segment>
    <Segment as={Transparent}>
      <HeaderText>Contact</HeaderText>
    </Segment>
  </div>
  </AppContainer>
)

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, red, orange);
`;

const Transparent = styled.div`
  background: transparent !important;
`;

export default Home;
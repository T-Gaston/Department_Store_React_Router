import React from 'react';
import { Segment, Image} from "semantic-ui-react";
import Pic from './banner.jpg';
import HeaderText from './HeaderText';
import styled from 'styled-components';
import Women from './womensdept.jpg';
import Men from './mensdept.jpg';
import Children from './childrensdept.png';
import Shoes from './shoedept.jpeg';
import Accessories from './accesoriesdept.jpg';
import House from './homedept.jpg';

const Home = () => (
  <>
  <p>Free shipping and returns on all orders</p>
  <AppContainer>
    <div>
    <HeaderText fSize="large">Sale is now up to 60% off </HeaderText>
      <HeaderText fSize="small">new markdowns just added</HeaderText> 
    <Segment as={Transparent}>
      <HeaderText>prices as marked. exclusions apply.</HeaderText>
    </Segment>
    </div>
    </AppContainer>
  <Image src={Women} fluid/>
  <Image src={Men} fluid/>
  <br/>
  <div class="container2">
  <Image src={Children} fluid/>
  <div class="text-block2">
      <h1>Clothes as fun as they are</h1>
    </div>
  </div>
  <br/>
  <Image src={Accessories} fluid/>
  <br/>
  <div class="container">
  <Image src={Shoes} fluid/>
    <div class="text-block">
      <h1>Step 
      <br/>into 
      <br/>Spring</h1>
    </div>
  </div>
  <hr/>
  <div class="row">
  <div class="column">Shop</div>
  <div class="column">Careers</div>
  <div class="column">Customer Support</div>
  </div>
  <hr/>
  <br/>
  <br/>

  </>
)

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, red, orange);
`;

const Transparent = styled.div`
  background: transparent !important;
`;

export default Home;
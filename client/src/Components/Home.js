import React from 'react';
import { Container, Image} from "semantic-ui-react";
import Pic from './banner.jpg'

const Home = () => (
  <Container>
    <Image src={Pic} size='massive' fluid/>
  </Container>
)

export default Home;
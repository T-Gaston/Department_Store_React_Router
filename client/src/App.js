import React from 'react';
import './App.css';
import {Container} from 'semantic-ui-react';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import NoMatch from './Components/NoMatch';
import Departments from './Components/Departments';
import DepartmentForm from './Components/DepartmentForm';
import Department from './Components/Department';
import styled from 'styled-components';


const App = () => (
  <>
    <Navbar />
    <Container >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route exact path="/departments/:id" component={Department} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);



export default App;

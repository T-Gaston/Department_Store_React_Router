import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'semantic-ui-react';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import NoMatch from './Components/NoMatch';
import Departments from './Components/Departments';
import DepartmentForm from './Components/DepartmentForm';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;

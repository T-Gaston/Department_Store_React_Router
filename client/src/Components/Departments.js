import React from 'react';
import { Card, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from "styled-components";



export default class Departments extends React.Component {
  state = {
    departments: []
  }

  componentDidMount(){
    console.log('mounted')
    axios.get("/api/departments")
    .then((res) =>{
      this.setState({ departments: res.data })
    }).catch((err) => {

    })
  }

 
  renderDepartments = () => {
    const { departments, deleteDepartment, id} = this.state;
    
    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <StyledCard key={`department-${department.id}`}>
        <Card.Content>
          <Card.Header> { department.name } </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <StyledButton as={Link} to={`/departments/${department.id}`} color='blue'>
            View Department
          </StyledButton>
        </Card.Content>
      </StyledCard>
    ))
  }
  render (){
    return (
      <div>
        <Header as="h1">Departments</Header>
        <br />
        <Card.Group>
          { this.renderDepartments() }
        </Card.Group>
      </div>
    )
  }
}

const StyledCard = styled(Card) `
  text-align: center;
  
`;
const StyledButton = styled.div`
  display: flex;
  background: lightblue;
  color: white;
  padding: 15px 25px;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: #606060;
    transition: background 0.2s ease;
  }
`;
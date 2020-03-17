import React from 'react';
import { Card, Button, Header } from 'semantic-ui-react';
import axios from 'axios';



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
    const { departments, } = this.state;
    
    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <Card key={`department-${department.id}`}>
        <Card.Content>
          <Card.Header> { department.name } </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button color='blue'>
            View Department
          </Button>
        </Card.Content>
      </Card>
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
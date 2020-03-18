import React from 'react';
import { Card, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';



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

  deleteDepartment = (id) => {
    //update state here
    //make api call to delete menu
    axios.delete(`/api/departments/${id}`)
      .then((res)=>{
        const {departments} = this.state;
        this.setState({ departments: departments.filter(t => t.id !== id), })
        this.props.history.push('/departments')
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  renderDepartments = () => {
    const { departments, deleteDepartment, id} = this.state;
    
    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <Card key={`department-${department.id}`}>
        <Card.Content>
          <Card.Header> { department.name } </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${department.id}`} color='blue'>
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
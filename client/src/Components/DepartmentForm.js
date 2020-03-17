import React from 'react';
import {Form, Header} from 'semantic-ui-react';
import axios from 'axios';


export default class DepartmentForm extends React.Component {
  state = {name:''}

  handleChange = (e) => {
    console.log(e)
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    const department = { ...this.state }
    axios.post('/api/departments', department)
    .then((res) => {
      console.log(res)
      this.setState({name:''})
      this.props.history.push('/departments')
    }).catch((err) => {
      console.log(err)
    })
  }

  render(){
    const {name} = this.state
    return(
      <div>
      <Header as='h1'>New Department</Header>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Department Name"
            name="name"
            placeholder="Department"
            value={name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button color="blue">Submit</Form.Button>
      </Form>
      </div>
    )
  }
}







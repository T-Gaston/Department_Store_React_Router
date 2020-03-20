import React from 'react';
import {Form, Header, Button} from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';


export default class DepartmentForm extends React.Component {
  state = {
    name:'',
  }

  componentDidMount() {
    if (this.props.id) {
      this.setState({name: this.props.name})
    } 
  }

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
    // check if props, if so do edit function, otherwise do add
    const department = { ...this.state }
    if (this.props.id) {
      this.props.edit(this.props.id, department)
      this.props.toggle()

    } else {        
        axios.post('/api/departments', department)
        .then((res) => {
          console.log(res)
          this.setState({name:''})
          this.props.history.push('/departments')
        }).catch((err) => {
          console.log(err)
        })
      }
  }


  render(){
    const {name} = this.state
    return(
      <div>
      <Header as='h1'>{this.props.id ? "Edit Department" : "New Department"}</Header>
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
        <Button color="blue">Submit</Button>
      </Form>
      </div>
    )
  }
}

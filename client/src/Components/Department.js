import React from 'react';
import { Button, Header, Segment, } from "semantic-ui-react";
import axios from 'axios';
import DepartmentForm from './DepartmentForm';

export default class Department extends React.Component {
  state = {
    department: {},
    toggleForm: false,
  }

  componentDidMount(){
    axios.get(`/api/departments/${this.props.match.params.id}`)
    .then((res) => {
      this.setState({ department: res.data, });
    }).catch((err) => {
      console.log(err)
    })
  }


  deleteDepartment = (id) => {
    //update state here
    //make api call to delete menu
    axios.delete(`/api/departments/${id}`)
      .then((res)=>{
        
      })
      this.props.history.push('/departments')
      // .catch((err)=>{
      //   console.log(err)
      // })
  }

  // toggles that piece of state
  toggleEditForm = () => {
    this.setState({toggleForm: !this.state.toggleForm})
  }

  editDepartment = (id, department) => {
    // const { department} = this.state;
    axios.put(`/api/departments/${id}`, department)
    .then(res => {
      this.setState({department: res.data })
    }).catch((err) => {
      console.log(err)
    })
  }
  

  render(){
    const {name, id} = this.state.department
    return(
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}>Back</Button>
        <Button color="red" onClick={() => this.deleteDepartment(id)}>Delete</Button>
      <button onClick={this.toggleEditForm}>Edit Department</button>
      { this.state.toggleForm ? (
      <DepartmentForm  {...this.state.department} edit={this.editDepartment} toggle={this.toggleEditForm}/> ) : (<></>)}
    </div>
    )
  }
}

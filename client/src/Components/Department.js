import React from 'react';
import { Button, Header, Segment, Icon } from "semantic-ui-react";
import axios from 'axios';
import DepartmentForm from './DepartmentForm';
import Items from './Items';

export default class Department extends React.Component {
  state = {
    department: {},
    toggleForm: false,
    items: [],
  }

  componentDidMount(){
    const department_id = this.props.match.params.id;
    axios.get(`/api/departments/${department_id}`)
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
        this.props.history.push('/departments')
      })
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
  
  addItem = (departmentId, itemName, ) => {
    axios
      .post(`api/departments/${departmentId}/items`, {
        name: itemName,
      })
      .then(res => {
        console.log(res);
        const newDepartments = this.state.departments.map(department => {
          if (department.department_id != departmentId) return department;
          else return { ...department, items: [...department.items, res.data] };
        });
        this.setState({
          departments: newDepartments
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  render(){
    const {name, id, departmentId, items} = this.state.department
    return(
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
        </Segment>
        <br />
        <br />
        <Items props departmentId={this.props.match.params.id} />
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}>Back</Button>
        <Button color="red" onClick={() => this.deleteDepartment(this.props.match.params.id)}>
        <Icon name="trash" /></Button>
      <button onClick={this.toggleEditForm}>Edit Department</button>
      { this.state.toggleForm ? (
      <DepartmentForm  {...this.state.department} edit={this.editDepartment} toggle={this.toggleEditForm}/> ) : (<></>)}
    </div>
    )
  }
}

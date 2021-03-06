import React from 'react';
import axios from 'axios';
import {Segment, Header, Button, Form} from 'semantic-ui-react';
import DepartmentForm from './DepartmentForm'

export default class Items extends React.Component {
  state = { 
    items: [],
    toggleForm: false,
   };

  componentDidMount() {
    const { departmentId } = this.props;
    axios.get(`/api/departments/${departmentId}/items`)
    .then((res) =>{
      console.log(res);
      this.setState({
        items: res.data
      })
      // .catch((err) =>{
      //   console.log(err)
      // })
    })
  };

  deleteItem(id) {
    const { departmentId } = this.props;
    axios.delete(`/api/departments/${departmentId}/items/${id}`).then(()=>{
      const newitems = this.state.items.filter( item => item.id != id)
      this.setState({
        items:newitems
      })
    })
  }
  toggleEditForm = () => {
    this.setState({toggleForm: !this.state.toggleForm})
  }

  editItem = (id) => {
    const { departmentId } = this.props;
    // const { department} = this.state;
    axios.put(`/api/departments/${departmentId}/items/${id}`)
    .then(res => {
      this.setState({item: res.data })
    }).catch((err) => {
      console.log(err)
    })
  }

  handleChange =(e)=>{
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
  handleSubmit=(e)=>{
    const { departmentId } = this.props;
    axios.post(`/api/departments/${departmentId}/items`,{
      name: this.state.name,
    }).then((res)=>{
      this.setState({
        items:[res.data, ...this.state.items]
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  
  render() {
    const { name, } =this.state 
    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Add an item"
              value={name}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
        <Header as="h1">Items in Department</Header>
        {this.state.items.map(item => (
          <Segment key={`item=${item.id}`}>
            <Header as="h3">{item.name}</Header>
            <Button onClick={() => this.deleteItem(item.id)} color='red'>delete</Button>
            <button onClick={this.toggleEditForm}>Edit Item</button>
            { this.state.toggleForm ? (
          <Form  {...this.state.item} edit={this.editItem} toggle={this.toggleEditForm}/> ) : (<></>)}
          </Segment>
        ))}
      </Segment>
    )
  }
}
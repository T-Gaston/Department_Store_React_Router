import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import styled from 'styled-components';

class ItemForm extends Component {
  state = { name: "" };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name,  } = this.state;
    const { departmentId } = this.props;
    this.props.addItem(departmentId, name,);
    this.setState({ name: "" });
  };

  render() {
    const { name, } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="Item Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          />
          <StyledButton content="Submit" />
        </Form.Group>
      </Form>
    );
  }
}

const StyledButton = styled(Form.Button)`
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

export default ItemForm;
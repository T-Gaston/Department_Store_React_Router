import React, { Component } from "react";
import { Form } from "semantic-ui-react";

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
          <Form.Button content="Submit" />
        </Form.Group>
      </Form>
    );
  }
}

export default ItemForm;
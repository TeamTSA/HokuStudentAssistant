import React, { Component } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import {Stuffs, StuffSchema } from '../../api/stuff/stuff';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class AddStuff extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state;
    return (
        <Container>
        <Form>
          <Header as="h2" textAlign="center">Add Event</Header>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Event Name' placeholder='Event Name' />
          </Form.Group>
          <Form.Group inline>
            <Form.Field control={Input} label='Location' placeholder='Location' />
          </Form.Group>
          <Form.Group>
            <Form.Field control={Input} label='Date' placeholder='Date' />
            <Form.Field control={Input} label='Time' placeholder='Time' />
          </Form.Group>
          <Form.Field control={TextArea} label='Description' placeholder='Description' />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
        </Container>
    );
  }
}

export default AddStuff;

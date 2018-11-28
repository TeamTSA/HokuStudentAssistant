import React, { Component } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { Container, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import AutoField from 'uniforms-semantic/AutoField';
import SimpleSchema from 'simpl-schema';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class AddStuff extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    // TODO: (Cammy) add acceptable location codes & event types to schema accepted values for location and event types
    const { value } = this.state;
    const formSchema = new SimpleSchema({
      eventName: String,
      eventType: String,
      eventLocation: String,
      eventStartDate: Date,
      eventEndDate: Date,
      eventDescription: {
        type: String,
        required: false,
      },
    })
    return (
        <Container text className='add-event-container'>
        <AutoForm schema={formSchema}>
          <Header as="h2" textAlign="center">Add Event</Header>
          <Form.Group widths='equal'>
            <AutoField name='eventName' label='Event Name' placeholder='Event Name' />
          </Form.Group>
          <AutoField name='eventType' label='Event Type' placeholder='ex: Athletic, Academic' />
          <Form.Group inline>
            <AutoField name='eventLocation' label='Location' placeholder='Location' />
          </Form.Group>
          <Form.Group>
            <AutoField name='eventStartDate' label='Start Date' placeholder='Start Date' />
            <AutoField name='eventEndDate' label='End Date' placeholder='End Date' />
          </Form.Group>
          <AutoField name='eventDescription' label='Description' placeholder='Description' />
          <Form.Field control={Button}>Submit</Form.Field>
        </AutoForm>
        </Container>
    );
  }
}

export default AddStuff;

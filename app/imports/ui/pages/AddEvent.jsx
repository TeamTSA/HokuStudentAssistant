import React, { Component } from 'react';
import { Grid, Segment, Header, Button, Form, Input, TextArea } from 'semantic-ui-react';
import { Events, EventsSchema } from '/imports/api/events/events';
import { Container, } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import AutoField from 'uniforms-semantic/AutoField';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import DateField from 'uniforms-semantic/DateField'
import ErrorsField from 'uniforms-semantic/ErrorsField';
import SimpleSchema from 'simpl-schema';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class AddEvent extends Component {
  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}`, style: 'growl-bottom-right' });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded', style: 'growl-bottom-right' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { eventName, eventType, eventLocation, eventStartDate, eventEndDate, eventDescription } = data;
    Events.insert({ eventName, eventLocation, eventDescription, eventStartDate, eventEndDate, eventType }, this.insertCallback);
  }

  render() {
    // TODO: (Cammy) add acceptable location codes & event types to schema accepted values for location and event types
    //const { value } = this.state;
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
        <AutoForm ref={(ref) => { this.formRef = ref; }} schema={formSchema} onSubmit={this.submit}>
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

/*
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center">Add Event</Header>
              <AutoForm ref={(ref) => { this.formRef = ref; }} schema={formSchema} onSubmit={this.submit}>
                <Segment>
                  <TextField name='eventName'/>
                  <TextField name='eventType'/>
                  <TextField name='eventLocation'/>
                  <DateField name='eventStartDate'/>
                  <DateField name='eventEndDate'/>
                  <TextField name='eventDescription'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>*/
    );
  }
}

/** Uniforms adds 'model' to the props, which we use. */
AddEvent.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const eventsSubscription = Meteor.subscribe('Events');
  return {
    ready: eventsSubscription.ready(),
  };
})(withRouter(AddEvent));


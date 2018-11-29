import React, { Component } from 'react';
import { Courses } from '/imports/api/courses/courses';
import { CourseLocations } from '/imports/api/courses/courseLocations';
import { UserCourses } from '/imports/api/users/userCourses';
import SimpleSchema from 'simpl-schema';
import { Container, Header, Button, Form } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import AutoField from 'uniforms-semantic/AutoField';
import { Meteor } from 'meteor/meteor'


class AddClass extends Component {

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

  submit(data) {
    const username = Meteor.user().username;
    const { courseCRN } = data;
    UserCourses.insert({username: username, courseCRN: courseCRN}, this.insertCallback);
  }

  render() {
    const formSchema = new SimpleSchema({
      courseCRN: { type: Array },
      'courseCRN.$': { type: Number },
    });

    return (
        <Container text className='add-event-container'>
          <AutoForm ref={(ref) => { this.formRef = ref; }} schema={formSchema} onSubmit={this.submit}>
            <Header as="h2" textAlign="center">Add Class CRNs</Header>
            <Form.Group widths='equal'>
              <AutoField name='courseCRN' label='Class CRN' placeholder='CRN' />
            </Form.Group>
            <Form.Field control={Button}>Submit</Form.Field>
          </AutoForm>
        </Container>
    );
  }

}

export default AddClass;

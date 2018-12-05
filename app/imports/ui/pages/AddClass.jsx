import React, { Component } from 'react';
import { Courses } from '/imports/api/courses/courses';
import { CourseLocations } from '/imports/api/courses/courseLocations';
import { UserCourses } from '/imports/api/users/userCourses';
import SimpleSchema from 'simpl-schema';
import { Container, Header, Button, Form, Grid, Segment, Table } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import AutoField from 'uniforms-semantic/AutoField';
import { Meteor } from 'meteor/meteor'
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, Link } from 'react-router-dom';

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
    // TODO: Search for existing document with same username first, if not exist, insert; if it does, get _id and update.
    const username = Meteor.user().username.toString();
    console.log(username.toString())
    const { courseCRN } = data;
    const record = UserCourses.findOne({username: username});
    console.log(record);
    if (record == null) {
      console.log("inserted a new one");
      UserCourses.insert({username: username, courseCRN: courseCRN}, this.insertCallback);
    }
    else {
      const _id = record._id;
      console.log("Updated");
      UserCourses.update({_id: _id}, {$addToSet: { courseCRN: courseCRN }});
    }
  }

  render() {
    const formSchema = new SimpleSchema({
      courseCRN: { type: Array },
      'courseCRN.$': { type: Number },
    });

    return (
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={6}>
              <Container text className='add-class-container'>
                <AutoForm ref={(ref) => { this.formRef = ref; }} schema={formSchema} onSubmit={this.submit}>
                  <Header as="h2" textAlign="center">Add Class CRNs</Header>
                  <Form.Group widths='equal'>
                    <AutoField name='courseCRN' label='Class CRN' placeholder='CRN' />
                  </Form.Group>
                  <Form.Field control={Button}>Submit</Form.Field>
                </AutoForm>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container text className='class-table-container'>
                <Header as="h2" textAlign="center">Your Courses</Header>
                <Table unstackable>
                  <Table.Header>
                    <Table.HeaderCell>CRN</Table.HeaderCell>
                    <Table.HeaderCell>Course</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                  </Table.Header>
                  <Table.Body>
                  </Table.Body>
                </Table>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>

    );
  }

}

/** Uniforms adds 'model' to the props, which we use. */
AddClass.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const userCourseSubscription = Meteor.subscribe('UserCourses');
  return {
    ready: userCourseSubscription.ready(),
  };
})(withRouter(AddClass));


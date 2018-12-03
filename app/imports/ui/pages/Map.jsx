import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { NavLink } from 'react-router-dom';
import { Container, Card, Header, Loader, Message, Grid, Segment, Checkbox, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Machines } from '../../api/machine/machine';
import Calendar from 'react-calendar';
import GoogleMapReact, { GoogleApiWrapper, InfoWindow, Marker } from 'google-map-react';
import AddClass from './AddClass';
import userCourses, { UserCourses } from '../../api/users/userCourses';

// figure out how to get username
const uname = AddClass.username;
console.log(uname);



const AnyReactComponent = ({ text }) => <div>{text}</div>;
/** Renders a page with all the washing machines as a MachineCard */
class Map extends Component {
  state = {
      date: new Date(),
    };
  static defaultProps = {
    center: {
      lat: 21.296972,
      lng: -157.8230556,
    },
    zoom: 16,
  };

    onChange = date => this.setState({ date });

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Grid columns={2} stackable>
        <Grid.Row>
       <Grid.Column width={10}>
        <Container>
        <Header as='h1' textAlign='center'>Map</Header>
          <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDAAWx2DEvPtO50-cRMRkcCAwPe3WK7Onw\n' }}
                defaultCenter={Map.defaultProps.center}
                defaultZoom={Map.defaultProps.zoom}
            >
              <AnyReactComponent
                  lat={21.296972}
                  lng={-157.8230556}
                  text={'uh  manoa'}
              />
            </GoogleMapReact>
          </div>
        </Container>
        </Grid.Column>
   <Grid.Column width={6} floated="right">
   <Segment.Group>
     <Segment><Header as='h2' content='Display' textAlign='center'/></Segment>
     <Segment>
        <Checkbox label='Classes' className='checkbox'/>
        <br />
        <Checkbox label='Events' className='checkBox'/>
        <br />
        <Checkbox label='Food' className='checkBox'/>
        <br />
        <Checkbox label='Bathroom' className='checkBox'/>
     </Segment>
     <Segment>
     <Container className='calen'>
          <Calendar className='calen'
            onChange={this.onChange}
            value={this.state.date}
          />
        </Container>
        </Segment>
        <Segment>
        <Container className="addClass">
        <a href="/#/add-class">
        <Button primary className='addClassBut'>Add Classes</Button>
        </a>
        </Container>
        </Segment>
     </Segment.Group>
   </Grid.Column>
   </Grid.Row>
 </Grid>
    );
  }
}


/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Machine documents.
  const subscription = Meteor.subscribe('Machine');
  return {
    machines: Machines.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Map);

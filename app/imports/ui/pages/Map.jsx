import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { NavLink } from 'react-router-dom';
import { Container, Card, Header, Loader, Message, Grid, Segment, Checkbox, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import MachineCard from '/imports/ui/components/MachineCard';
import { UserCourses } from '../../api/users/userCourses';
import { Courses } from '../../api/courses/courses';
import { Locations } from '../../api/locations/locations.js';
import { Events } from '../../api/events/events';
import { Bathrooms } from '../../api/bathrooms/bathrooms.js';
import { FoodPlace } from '../../api/food/foodPlaces.js';
import AddWasher from '../components/AddWasher';
import AvailabilityCount from '../components/AvailabilityCount';
import Calendar from 'react-calendar';
import GoogleMapReact from 'google-map-react';

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

  constructor(props) {
    super(props);
  }

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
          <Grid.Column width={2}>
          </Grid.Column>
        <Grid.Column width={6}>
        <Container>
        <Header as='h1' textAlign='center'>Map</Header>
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDAAWx2DEvPtO50-cRMRkcCAwPe3WK7Onw\n' }}
                defaultCenter={Map.defaultProps.center}
                defaultZoom={Map.defaultProps.zoom}
            >
              <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text={'Kreyser Avrora'}
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

Map.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};


/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Machine documents.
  const subscription1 = Meteor.subscribe('UserCourses');
  const subscription2 = Meteor.subscribe('Courses');
  const locationSubscription = Meteor.subscribe('Locations');
  const eventSubscription = Meteor.subscribe('Events');
  const bathroomSubscriptipn = Meteor.subscribe('Bathrooms');
  const foodSubscription = Meteor.subscribe('FoodPlace');

  return {
    userCourses: UserCourses.find({}).fetch(),
    courses: Courses.find({}).fetch(),
    events: Events.find({}).fetch(),
    locations: Locations.find({}).fetch(),
    bathrooms: Bathrooms.find({}).fetch(),
    foodPlaces: FoodPlace.find({}).fetch(),
    ready: (subscription1.ready() &&
            subscription2.ready() &&
            locationSubscription.ready() &&
            eventSubscription.ready() &&
            bathroomSubscriptipn.ready() &&
            foodSubscription.ready()
      ),
  };
})(Map);

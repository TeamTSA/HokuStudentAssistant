import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { NavLink } from 'react-router-dom';
import { Container, Card, Header, Loader, Message, Grid, Segment, Checkbox, Button } from 'semantic-ui-react';
import Calendar from 'react-calendar';
import GoogleMapReact, { GoogleApiWrapper, InfoWindow } from 'google-map-react';
import { Marker } from 'google-maps-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import MachineCard from '/imports/ui/components/MachineCard';
import { UserCourses } from '../../api/users/userCourses';
import { Courses } from '../../api/courses/courses';
import { Locations } from '../../api/locations/locations.js';
import { Events } from '../../api/events/events';
import { Bathrooms } from '../../api/bathrooms/bathrooms.js';
import { FoodPlace } from '../../api/food/foodPlaces.js';
import AvailabilityCount from '../components/AvailabilityCount';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";

const loc = Locations.find();
const ucourses = UserCourses.find();
const arr = UserCourses.findOne();
loc.map(function (elem) {
  console.log(elem.locationCode);
});


const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
    this.state = { checked: false};
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    this.setState({
      checked: !this.state.checked
    })
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
       <Grid.Column width={10}>
        <Container>

        <Header as='h1' textAlign='center'>Map</Header>
          <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBrU0R8n2gfMK3jYkI9MwjwJ513SOcF9io' }}
                defaultCenter={Map.defaultProps.center}
                defaultZoom={Map.defaultProps.zoom}
            >

              {ucourses.map(function(elem){
                return elem.courseCRN.map(function(e){
                  return Courses.find({courseCRN: e}).map(function(elem2){
                    return Locations.find({ locationCode: elem2.courseLocationCode }).map(function(e2){
                      return <AnyReactComponent
                          class='ucourse'
                          lat = {e2.location_x}
                          lng = {e2.location_y}
                          text= {elem2.courseName + ' ' + elem2.courseNumber}/>;
                    });
                  });
                });
              })}

              {Bathrooms.find().map(function (elem) {
                return Locations.find({ locationCode: elem.locationCode }).map(function (e) {
                  return <AnyReactComponent
                      class = 'bathroom'
                      lat = {e.location_x}
                      lng = {e.location_y}
                      text= {'B'}/>;
                });
              })
              }
              {FoodPlace.find().map(function (elem) {
                return Locations.find({ locationCode: elem.locationCode }).map(function (e) {
                  return <AnyReactComponent
                      class = 'food'
                      lat = {e.location_x}
                      lng = {e.location_y}
                      text= {'B'}/>;
                });
              })
              }
              {Events.find().map(function (elem) {
                return Locations.find({ locationCode: elem.locationCode }).map(function (e) {
                  return <AnyReactComponent
                      class = 'events'
                      lat = {e.location_x}
                      lng = {e.location_y}
                      text= {'B'}/>;
                });
              })
              }
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
          <Header as='h5' textAlign='center'>(Drag and drop your courses around the scheduler)</Header>
          <DayPilotScheduler
                startDate = {DayPilot.Date.today().firstDayOfMonth()}
                days = {DayPilot.Date.today().daysInMonth()}
                scale = {"Day"}
                timeHeaders = {[
                    { groupBy: "Month"},
                    { groupBy: "Day", format: "d"}
                ]}
                resources = {[
                    {name: "Monday", id: "A", text: "Class 1", start: "2018-05-02T06:50:00", end: "2018-05-09T06:55:00", resource: "A"},
                    {name: "Tuesday", id: "B", text: "Class 2", start: "2018-05-03T00:00:00", end: "2018-05-10T00:00:00", resource: "B", barColor: "#38761d", barBackColor: "#93c47d" },
                    {name: "Wednesday", id: "C", text: "Class 3", start: "2018-05-02T00:00:00", end: "2018-05-08T00:00:00", resource: "C", barColor: "#f1c232", barBackColor: "#f1c232" },
                    {name: "Thursday", id: "D", text: "Class 4", start: "2018-05-02T00:00:00", end: "2018-05-08T00:00:00", resource: "E", barColor: "#cc0000", barBackColor: "#ea9999" },
                    {name: "Friday", id: "E", text: "Class 5", start: "2018-05-02T00:00:00", end: "2018-05-08T00:00:00", resource: "F", barColor: "#cc0000", barBackColor: "#ea9992"}

                ]}
                events = {[
                  {id: "A", text: "Class 1", start: "2018-05-02T06:50:00", end: "2018-05-09T06:55:00", resource: "A"},
                  {id: "B", text: "Class 2", start: "2018-05-03T00:00:00", end: "2018-05-10T00:00:00", resource: "B", barColor: "#38761d", barBackColor: "#93c47d" },
                  {id: "C", text: "Class 3", start: "2018-05-02T00:00:00", end: "2018-05-08T00:00:00", resource: "C", barColor: "#f1c232", barBackColor: "#f1c232" },
                  {id: "D", text: "Class 4", start: "2018-05-02T00:00:00", end: "2018-05-08T00:00:00", resource: "D", barColor: "#cc0000", barBackColor: "#ea9999" },
                  {id: "E", text: "Class 5", start: "2018-05-02T00:00:00", end: "2018-05-08T00:00:00", resource: "E", barColor: "#cc0000", barBackColor: "#ea9992" }
                ]}
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

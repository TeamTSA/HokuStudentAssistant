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

const loc = Locations.find();
const ucourses = UserCourses.find();
console.log(ucourses);

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
  }
/*
{stuff.map(function (stuf) {
              return (<AnyReactComponent key={stuf.locationCode}>
                lat = {stuf.location_x}
                lng={stuf.location_y}
                text={stuf.locationName}
                />);
            })}
       <GoogleMaps
                apiKey={ 'AIzaSyBrU0R8n2gfMK3jYkI9MwjwJ513SOcF9io' }
                style={{ height: '100%', width: '100%' }}
                zoom={16}
                center={{ lat: 21.296972, lng: -157.8230556 }}

                markers={ locations }
            />
 */
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
              {loc.map(function (stuf) {
                return (<AnyReactComponent key={stuf.locationCode}
                  lat = {stuf.location_x}
                  lng={stuf.location_y}
                  text={stuf.locationName}
                  />);
                  })}
              <AnyReactComponent
                  lat={21.296972}
                  lng={-157.8230556}
                  text={'uh manoa'}
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

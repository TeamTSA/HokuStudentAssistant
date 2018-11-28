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
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 21.3002778,
      lng: -157.8230556,
    },
    zoom: 20,
  };

  render() {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDAAWx2DEvPtO50-cRMRkcCAwPe3WK7Onw\n' }}
              defaultCenter={SimpleMap.defaultProps.center}
              defaultZoom={SimpleMap.defaultProps.zoom}
          >
            <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div>
    );
  }
}

export default SimpleMap;

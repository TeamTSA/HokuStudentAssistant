import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Icon, Header, Image, Button, Modal, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const inlineStyle = {
  modal: {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (

        <div className='hoku-landing-background'>
          <container>
          <Grid>
            <Grid.Row centered className='tops'>
              <Grid.Column textAlign='center'>
                <container>
                  <div className="title-holder">
                <Header as='h1' inverted className="hokuhead">H O K U</Header>
                <Header as='h3' inverted>Easily navigate through college using Hoku, an interactive campus map showing campus events, classes, eateries, and bathrooms.</Header>
                </div>
                </container>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row className='blankspace'>
            </Grid.Row>
          </Grid>

            <div className="body">
          <Grid className='table'>
            <Grid.Column className='card' width={8}>
              <Container text-align='center'>
              <Header as='h2' inverted>As a Student...</Header>
                <Image src='https://mbtskoudsalg.com/images/student-cartoon-png-5.png' />
              </Container>
            </Grid.Column>
            <Grid.Column width={8}>
              <Container text-align='center'>
              <Header as='h5' className='ltext'> With Hoku, viewing your semesters classes is easier than ever. Simply add in your CRN to be able to view your classes on the Hoku interactive campus map.</Header>
              </Container>
            </Grid.Column>
          </Grid>
            </div>
            <div className="body">
          <Grid className='table'>
            <Grid.Column width={8}>
              <Container text-align='center'>
              <Header as='h5' className='rtext'>Advertise campus events to the Hoku users. With Hoku, admins are able to add campus events, which will be shown on the Hoku interactive campus maps.</Header>
              </Container>
            </Grid.Column>
            <Grid.Column className='card' width={8}>
              <Container text-align='center'>
              <Header as='h2' inverted>As a Admin...</Header>
              <Image src='https://s3-ap-southeast-2.amazonaws.com/autom-io-home-assets/Uploads/3-office-workers-graphic.png' />
              </Container>
            </Grid.Column>
          </Grid>
            </div>

            <div classname="body">
          {!Meteor.userId() &&
            <Grid>
              <Grid.Row centered>
                <Grid.Column textAlign='center'>
                  <Container text-align={'center'}
                  <Header as='h1' inverted className='instruct'> To get started, login or register now</Header>
                  <Button className='buttoning' as={NavLink} activeClassName="active" exact to="/signin" key='signin'>
                    Log In
                  </Button>
                  <Button as={NavLink} activeClassName="active" exact to="/signup" key='signup'>Register Now</Button>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className='blankspace'>
              </Grid.Row>
            </Grid>
          }
            </div>
          </container>
        </div>
    );
  }
}

export default Landing;

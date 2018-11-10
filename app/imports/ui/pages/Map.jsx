import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader, Message, Grid, Segment, Checkbox, Button } from 'semantic-ui-react';
import Calendar from 'react-calendar';


class Map extends React.Component {
  state = {
      date: new Date(),
    }

    onChange = date => this.setState({ date })
    ;


  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Grid columns={2} stackable>
        <Grid.Row>
        <Grid.Column width={6}>
        <Container>
        <Header as='h1' textAlign='center'>Map</Header>
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
        <a href="/#/add">
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

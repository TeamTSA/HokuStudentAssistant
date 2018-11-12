import React from 'react';
import { Container, List, Header } from 'semantic-ui-react';
import InfoItem from '/imports/ui/components/InfoItem';

const info = [
  { key: 1, question: 'What is Hoku?', answer: 'Hoku is designed for users of the UH Manoa Student Body Community.' +
    ' Helping students get their schedule together by showing them locations and events. ' },
  { key: 2, question: 'Why should this matter to me?', answer: 'Many college students have a hard time balancing time. ' +
    ' By showing event times, location, useful routes, there can be less time spent on planning by having Hoku do ' +
    ' it for you. ' },
];

/** Renders a page that contains FAQ / Info */
class Info extends React.Component {
  /** Render the page. */
  render() {
    return (
        <Container text className='faq-container'>
          <Header as='h1' textAlign="center" className='top-header'>FAQ / Info</Header>
          <List>
            {info.map((item) => <InfoItem key={item.key} item={item} />)}
          </List>
        </Container>
    );
  }
}

export default Info;

import React from 'react';
import {Container} from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px'};
    return (
        <footer>
          <div style={divStyle} className="footer">
            <hr></hr>
            <br></br>
                Hoku: A UH Manoa Initiative
            <br></br>
            Information and Computer Sciences
          </div>
        </footer>
    );
  }
}

export default Footer;

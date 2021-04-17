import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "../_Styles/Request_style.css";

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { visibility: false };
  }

  render() {
    const { visibility } = this.state;
    return (
      <div className="Main12">
        <VisibilitySensor
          partialVisibility="top"
          offset={{ top: 800 }}
          onChange={(isVisible) => {
            this.setState({ visibility: isVisible });
          }}
        >
          <div className="Mainn12">
            <Fade bottom when={!visibility} distance="50%">
              <h1 className="Mainn12_title">REQUEST A PROPOSAL</h1>
              <p className="Mainn12_description">
                Leave your details for our manager to contact you.
                <br />
                Let our estimating and design team assess your project.
                <br />
                Receive a proposal and free consultation.
              </p>
              <button type="button" className="Mainn12_button">Request a Quote</button>
              <p className="Mainn12_description_bottom">Save on your next parking project with Rollpark, the most advanced and eco-friendly semi-permanent parking solution to date.</p>
            </Fade>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

export default Request;

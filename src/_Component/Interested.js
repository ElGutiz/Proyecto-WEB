import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "../_Styles/Interested_style.css";

class Interested extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { visibility: false };
  }

  render() {
    const { visibility } = this.state;
    return (
      <VisibilitySensor
        partialVisibility="top"
        offset={{ top: 800 }}
        onChange={(isVisible) => {
          this.setState({ visibility: isVisible });
        }}
      >
        <div className="Main10" style={{ backgroundColor: visibility ? "white" : "rgb(240, 240, 240)" }}>
          <Fade bottom when={!visibility} distance="30%">
            <div className="Mainn10">
              <h2 className="Title_10">Interested in product specifications?</h2>
              <p className="info_10">Discover available geotextile characteristics, unique features of subgrade design, and how Rollpark holds up against asphalt and gravel.</p>
              <button button type="button" className="Specifications_button">
                <p className="Specifications_button_text">Specifications </p>
              </button>
            </div>
          </Fade>
        </div>
      </VisibilitySensor>
    );
  }
}

export default Interested;

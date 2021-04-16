import React from "react";

import "../_Styles/DesignedForYou_style.css";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";
import parkImage from "../_Source/designed.png";
import parkShadow from "../_Source/designedShadow.png";

class DesignedForYou extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { visibility: false };
  }

  render() {
    const { visibility } = this.state;
    return (
      <div className="Main">
        <VisibilitySensor
          partialVisibility="top"
          offset={{ top: 800 }}
          onChange={(isVisible) => {
            this.setState({ visibility: isVisible });
          }}
        >
          <div className="Mainn2" style={{ opacity: visibility ? 0 : 1 }}>
            <Fade bottom when={!visibility} distance="50%">
              <div className="main_title">
                <h2>Designed for You.</h2>
              </div>
            </Fade>
            <div className="Facts">
              <Fade bottom cascade when={!visibility}>
                <ul className="Facts_list">
                  <li> Roll it out and instantly park</li>
                  <li> Re-use it on multiple sites</li>
                  <li> Event Parking, Overflow, Vehicle Storage</li>
                  <li className="m1"> Daily, temporary use </li>
                  <li className="m2"> Daily, long term use </li>
                </ul>
              </Fade>
            </div>
            <Fade top when={!visibility} distance="20%">
              <img className="shadow" src={parkShadow} alt="sombra" />
              <img className="mainImage" src={parkImage} alt="parqueo" />
            </Fade>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

export default DesignedForYou;

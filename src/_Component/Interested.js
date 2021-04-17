import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "../_Styles/Interested_style.css";
import layer1 from "../_Source/spec-layer-1.png";
import layer2 from "../_Source/spec-layer-2.png";
import layer3 from "../_Source/spec-layer-3.png";

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
        <div className="Main10" style={{ backgroundColor: visibility ? "white" : "rgb(240, 240, 240)", transition: visibility ? 0 : "background-color 2s ease-out" }}>
          <Fade bottom when={!visibility} distance="30%">
            <div className="Mainn10">
              <h2 className="Title_10">Interested in product specifications?</h2>
              <p className="info_10">Discover available geotextile characteristics, unique features of subgrade design, and how Rollpark holds up against asphalt and gravel.</p>
              <button button type="button" className="Specifications_button">
                <p className="Specifications_button_text">Specifications </p>
              </button>
            </div>
          </Fade>
          <div className="image_row">
            <div className="image_column">
              <img className="interested_layer layer_3" src={layer3} alt="layer3" style={{ transform: visibility ? "translateY(-110px)" : "translateY(50px)", transition: visibility ? 0 : "transform 1s ease" }} />
              <img className="interested_layer layer_2" src={layer2} alt="layer2" style={{ transform: visibility ? "translateY(-310px)" : "translateY(-230px)", transition: visibility ? 0 : "transform 1s ease" }} />
              <img className="interested_layer layer_1" src={layer1} alt="layer1" />
            </div>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default Interested;

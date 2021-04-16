import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "../_Styles/expect_style.css";
import workers from "../_Source/workers.jpg";

class Expect extends React.Component {
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
        <div className="Main6">
          <Fade bottom when={!visibility} distance="30%" cascade>
            <div className="Mainn6">
              <h2 className="Title_6">What to expect? </h2>
              <p className="info_6">From design to installation, Rollpark can handle every aspect of the job: site procurement, civil engineering, geotechnical engineering, design, site preparation, and installation.</p>
              <button button type="button" className="Installation_process_button">
                <p className="Installation_process_button_text">Installation Process </p>
              </button>
            </div>
          </Fade>
          <img className="worker_image" src={workers} alt="worker" width="300" />
        </div>
      </VisibilitySensor>
    );
  }
}

export default Expect;

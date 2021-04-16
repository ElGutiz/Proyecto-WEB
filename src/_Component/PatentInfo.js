import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "../_Styles/patent_style.css";

class PatentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { visibility: false };
  }

  render() {
    const { visibility } = this.state;
    return (
      <div className="Main2">
        <VisibilitySensor
          partialVisibility="top"
          offset={{ top: 800 }}
          onChange={(isVisible) => {
            this.setState({ visibility: isVisible });
          }}
        >
          <Fade bottom when={!visibility} distance="50%">
            <div className="Mainn4">
              <div className="Title_2">
                <h2 className="Title_2_1">Patented cutting edge technology </h2>
              </div>
            </div>
          </Fade>
        </VisibilitySensor>
      </div>
    );
  }
}

export default PatentInfo;

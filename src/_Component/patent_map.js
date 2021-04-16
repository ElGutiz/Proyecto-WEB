import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "../_Styles/patent_map_style.css";
import logo1 from "../_Source/patent-logo-1.png";
import logo2 from "../_Source/patent-logo-2.png";
import logo3 from "../_Source/patent-logo-3.png";

class PatentMap extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { visibility: false };
  }

  render() {
    const { visibility } = this.state;
    return (
      <div className="patent_map">
        <VisibilitySensor
          partialVisibility="top"
          offset={{ top: 800 }}
          onChange={(isVisible) => {
            this.setState({ visibility: isVisible });
          }}
        >
          <div className="patent_map_main">
            <Fade bottom when={!visibility} distance="50%">
              <h1 className="patent_map_title">US Patent </h1>
            </Fade>
            <div className="patent_map_info">
              <Fade bottom when={!visibility} distance="50%">
                <p className="patent_map_p">
                  The product is resistant to tears, soft chemicals,
                  puncture damage and ultraviolet light exposure.
                  It’s also unaffected by hydrocarbons, mildew, rot and the freeze and thaw cycle.
                </p>
              </Fade>
              <Fade bottom cascade when={!visibility} distance="40%" duration={500}>
                <ul className="patent_list">
                  <li>
                    <img className="patent_1" src={logo1} alt="logo1" width="53" />
                    <p className="patent_desc">
                      Industrial Fabrics
                      <br />
                      {" "}
                      International Award
                    </p>
                  </li>
                  <li>
                    <img className="patent_1" src={logo2} alt="logo2" width="53" />
                    <p className="patent_desc">
                      Top 3 of 100
                      <br />
                      {" "}
                      suppliers by CSX
                    </p>
                  </li>
                  <li>
                    <img className="patent_1" src={logo3} alt="logo3" width="53" />
                    <p className="patent_desc">
                      3 Safety Awards
                      <br />
                      {" "}
                      from Advocare
                    </p>
                  </li>
                </ul>
              </Fade>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

export default PatentMap;

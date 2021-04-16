import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "../_Styles/table_info_style.css";

class TableInfo extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { visibility: false };
  }

  render() {
    const { visibility } = this.state;
    return (
      <div className="Main7">
        <VisibilitySensor
          partialVisibility="top"
          offset={{ top: 400 }}
          onChange={(isVisible) => {
            this.setState({ visibility: isVisible });
          }}
        >
          <div className="Mainn7">
            <Fade bottom when={!visibility} distance="50%">
              <h2 className="Title_7">A Proven Alternative to Asphalt and Gravel</h2>
            </Fade>
            <table>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <th> </th>
                  <th>Asphalt</th>
                  <th className="unique1">Rollpark®</th>
                  <th>Gravel</th>
                </Fade>
              </tr>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <td className="unique2"><i className="fa fa-tint fa-2x" aria-label="Mute volume" /></td>
                </Fade>
                <td>Impervious</td>
                <Fade when={!visibility} delay={1000}>
                  <td className="unique3">Permeable</td>
                </Fade>
                <Fade when={!visibility}>
                  <td className="unique3">Permeable</td>
                </Fade>
              </tr>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <td className="unique2"><i className="fa fa-money fa-2x" aria-label="Mute volume" /></td>
                </Fade>
                <td>Expensive</td>
                <td className="unique3">Less Expensive</td>
                <td>Comparable Cost</td>
              </tr>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <td className="unique2"><i className="fa fa-refresh fa-2x" aria-label="Mute volume" /></td>
                </Fade>
                <Fade when={!visibility} delay={1000}>
                  <td>Cannot be reused</td>
                  <td className="unique3">Re-usable</td>
                </Fade>
                <Fade when={!visibility}>
                  <td>Not usually reused</td>
                </Fade>
              </tr>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <td className="unique2"><i className="fa fa-calendar fa-2x" aria-label="Mute volume" /></td>
                </Fade>
                <td>15 years life</td>
                <Fade when={!visibility} delay={1000}>
                  <td>7+ years life</td>
                  <td>5-7 years life</td>
                </Fade>
              </tr>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <td className="unique2"><i className="fa fa-clock-o fa-2x" aria-label="Mute volume" /></td>
                </Fade>
                <Fade when={!visibility} delay={1000}>
                  <td>2-3 weeks per acre</td>
                </Fade>
                <Fade when={!visibility} duration={750}>
                  <td className="unique3">1 week per acre</td>
                </Fade>
                <Fade when={!visibility} distance="50%">
                  <td>-1 week per acre</td>
                </Fade>
              </tr>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <td className="unique2"><i className="fa fa-wheelchair fa-2x" aria-label="Mute volume" /></td>
                </Fade>
                <Fade when={!visibility} delay={1000}>
                  <td>ADA accessible</td>
                  <td className="unique3">ADA accessible</td>
                </Fade>
                <td>Not ADA accessible</td>
              </tr>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <td className="unique2"><i className="fa fa-pagelines fa-2x" aria-label="Mute volume" /></td>
                </Fade>
                <Fade when={!visibility} delay={1000}>
                  <td>No LEED</td>
                </Fade>
                <td className="unique3">Up to 7 LEED</td>
                <td>No LEED</td>
              </tr>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <td className="unique2"><i className="fa fa-unlock fa-2x" aria-label="Mute volume" /></td>
                </Fade>
                <td>Cannot be rented</td>
                <Fade when={!visibility} duration={750}>
                  <td className="unique3">Rentable</td>
                </Fade>
                <td>Cannot be rented</td>
              </tr>
              <tr>
                <Fade when={!visibility} delay={1700}>
                  <td className="unique2"><i className="fa fa-truck fa-2x" aria-label="Mute volume" /></td>
                </Fade>
                <Fade when={!visibility} delay={1000}>
                  <td>Easy Maintenance</td>
                  <td>Moderate Maintenance</td>
                </Fade>
                <Fade when={!visibility}>
                  <td>Difficult Maintenance</td>
                </Fade>
              </tr>
            </table>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

export default TableInfo;

import React from "react";

import "../_Styles/DesignedForYou_style.css";
import parkImage from "../_Source/designed.png";
import parkShadow from "../_Source/designedShadow.png";

class DesignedForYou extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main">
        <div className="main_title">
          <h2>Designed for You.</h2>
        </div>
        <div className="Facts">
          <ul className="Facts_list">
            <li> Roll it out and instantly park</li>
            <li> Re-use it on multiple sites</li>
            <li> Event Parking, Overflow, Vehicle Storage</li>
            <li className="m1"> Daily, temporary use </li>
            <li className="m2"> Daily, long term use </li>
          </ul>
        </div>
        <img className="shadow" src={parkShadow} alt="sombra" />
        <img className="mainImage" src={parkImage} alt="parqueo" />
      </div>
    );
  }
}

export default DesignedForYou;

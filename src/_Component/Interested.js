import React from "react";

import "../_Styles/Interested_style.css";

class Interested extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main10">
        <div className="Mainn10">
          <h2 className="Title_10">Interested in product specifications?</h2>
          <p className="info_10">Discover available geotextile characteristics, unique features of subgrade design, and how Rollpark holds up against asphalt and gravel.</p>
          <button button type="button" className="Specifications_button">
            <p className="Specifications_button_text">Specifications </p>
          </button>
        </div>
      </div>
    );
  }
}

export default Interested;

import React from "react";

import "../_Styles/expect_style.css";
import workers from "../_Source/workers.jpg";

class Expect extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main6">
        <div className="Mainn6">
          <h2 className="Title_6">What to expect? </h2>
          <p className="info_6">From design to installation, Rollpark can handle every aspect of the job: site procurement, civil engineering, geotechnical engineering, design, site preparation, and installation.</p>
          <button button type="button" className="Installation_process_button">
            <p className="Installation_process_button_text">Installation Process </p>
          </button>
        </div>
        <img className="worker_image" src={workers} alt="worker" width="300" />
      </div>
    );
  }
}

export default Expect;

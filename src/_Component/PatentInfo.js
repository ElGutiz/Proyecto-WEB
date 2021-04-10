import React from "react";

import "../_Styles/patent_style.css";

class PatentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main2">
        <div className="Mainn4">
          <div className="Title_2">
            <h2 className="Title_2_1">Patented cutting edge technology </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PatentInfo;

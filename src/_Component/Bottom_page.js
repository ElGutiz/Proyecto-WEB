import React from "react";

import "../_Styles/BottomPage_style.css";

class BottomP extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main13">
        <div className="Mainn13">
          <div className="Mainn13_1">
            <p className="Mainn13_1_text">Rollpark</p>
          </div>
          <div className="Mainn13_2">
            <p className="Mainn13_2_text">
              704-321-0802
              <br />
              info@rollpark.us
            </p>
          </div>
          <div className="Mainn13_3">
            <ul className="Mainn13_3_list">
              <li>
                <i className="fa fa-linkedin" aria-label="Mute volume" width="15" />
              </li>
              <li>
                <i className="fa fa-instagram" aria-label="Mute volume" width="15" />
              </li>
              <li>
                <i className="fa fa-twitter" aria-label="Mute volume" width="15" />
              </li>
            </ul>
            <p className="Mainn13_3_text">
              Copyright © 2018 Rollpark
              <br />
              Trademark of Polivka International Company
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomP;

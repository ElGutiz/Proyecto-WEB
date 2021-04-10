import React from "react";

import "../_Styles/carsParked_style.css";
import logo1 from "../_Source/company-logo-1.jpg";
import logo2 from "../_Source/company-logo-2.jpg";
import logo3 from "../_Source/company-logo-3.jpg";
import logo4 from "../_Source/company-logo-4.jpg";
import logo5 from "../_Source/company-logo-5.jpg";
import logo6 from "../_Source/company-logo-6.jpg";
import logo7 from "../_Source/company-logo-7.jpg";
import logo8 from "../_Source/company-logo-8.jpg";
import logo9 from "../_Source/company-logo-9.jpg";

class CarsParked extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main1">
        <div className="Mainn3">
          <div className="Title_1">
            <h2 className="Title_1_1">Over 1 million cars parked </h2>
            <ul className="logo_list">
              <li>
                <img className="logos_1" src={logo1} alt="logo1" width="55" />
              </li>
              <li>
                <img className="logos_1" src={logo2} alt="logo2" width="47" />
              </li>
              <li>
                <img className="logos_1" src={logo3} alt="logo3" width="122" />
              </li>
              <li>
                <img className="logos_1" src={logo4} alt="logo4" width="53" />
              </li>
              <li>
                <img className="logos_1" src={logo5} alt="logo5" width="106" />
              </li>
              <li>
                <img className="logos_1" src={logo6} alt="logo6" width="26" />
              </li>
              <li>
                <img className="logos_1" src={logo7} alt="logo7" width="100" />
              </li>
              <li>
                <img className="logos_1" src={logo8} alt="logo8" width="53" />
              </li>
              <li>
                <img className="logos_1" src={logo9} alt="logo9" width="126" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CarsParked;

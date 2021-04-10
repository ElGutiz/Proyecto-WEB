import React from "react";

import "../_Styles/patent_map_style.css";
import logo1 from "../_Source/patent-logo-1.png";
import logo2 from "../_Source/patent-logo-2.png";
import logo3 from "../_Source/patent-logo-3.png";

class PatentMap extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="patent_map">
        <div className="patent_map_main">
          <h1 className="patent_map_title">US Patent </h1>
          <div className="patent_map_info">
            <p>
              The product is resistant to tears, soft chemicals,
              puncture damage and ultraviolet light exposure.
              It’s also unaffected by hydrocarbons, mildew, rot and the freeze and thaw cycle.
            </p>
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
          </div>
        </div>
      </div>
    );
  }
}

export default PatentMap;

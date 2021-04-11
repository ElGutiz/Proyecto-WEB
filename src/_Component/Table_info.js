import React from "react";

import "../_Styles/table_info_style.css";

class TableInfo extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main7">
        <div className="Mainn7">
          <h2 className="Title_7">A Proven Alternative to Asphalt and Gravel</h2>
          <table>
            <tr>
              <th> </th>
              <th>Asphalt</th>
              <th className="unique1">Rollpark®</th>
              <th>Gravel</th>
            </tr>
            <tr>
              <td className="unique2"><i className="fa fa-tint fa-2x" aria-label="Mute volume" /></td>
              <td>Impervious</td>
              <td className="unique3">Permeable</td>
              <td className="unique3">Permeable</td>
            </tr>
            <tr>
              <td className="unique2"><i className="fa fa-money fa-2x" aria-label="Mute volume" /></td>
              <td>Expensive</td>
              <td className="unique3">Less Expensive</td>
              <td>Comparable Cost</td>
            </tr>
            <tr>
              <td className="unique2"><i className="fa fa-refresh fa-2x" aria-label="Mute volume" /></td>
              <td>Cannot be reused</td>
              <td className="unique3">Re-usable</td>
              <td>Not usually reused</td>
            </tr>
            <tr>
              <td className="unique2"><i className="fa fa-calendar fa-2x" aria-label="Mute volume" /></td>
              <td>15 years life</td>
              <td>7+ years life</td>
              <td>5-7 years life</td>
            </tr>
            <tr>
              <td className="unique2"><i className="fa fa-clock-o fa-2x" aria-label="Mute volume" /></td>
              <td>2-3 weeks per acre</td>
              <td className="unique3">1 week per acre</td>
              <td>-1 week per acre</td>
            </tr>
            <tr>
              <td className="unique2"><i className="fa fa-wheelchair fa-2x" aria-label="Mute volume" /></td>
              <td>ADA accessible</td>
              <td className="unique3">ADA accessible</td>
              <td>Not ADA accessible</td>
            </tr>
            <tr>
              <td className="unique2"><i className="fa fa-pagelines fa-2x" aria-label="Mute volume" /></td>
              <td>No LEED</td>
              <td className="unique3">Up to 7 LEED</td>
              <td>No LEED</td>
            </tr>
            <tr>
              <td className="unique2"><i className="fa fa-unlock fa-2x" aria-label="Mute volume" /></td>
              <td>Cannot be rented</td>
              <td className="unique3">Rentable</td>
              <td>Cannot be rented</td>
            </tr>
            <tr>
              <td className="unique2"><i className="fa fa-truck fa-2x" aria-label="Mute volume" /></td>
              <td>Easy Maintenance</td>
              <td>Moderate Maintenance</td>
              <td>Difficult Maintenance</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default TableInfo;

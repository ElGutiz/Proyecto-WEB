import React from "react";

import "../_Styles/company_button_style.css";

class CompanyButton extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main5">
        <div className="Mainn5">
          <button type="button" className="Company_button">
            <h1 className="Company_button_text">Company </h1>
          </button>
        </div>
      </div>
    );
  }
}

export default CompanyButton;

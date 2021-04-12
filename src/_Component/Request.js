import React from "react";

import "../_Styles/Request_style.css";

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main12">
        <div className="Mainn12">
          <h1 className="Mainn12_title">REQUEST A PROPOSAL</h1>
          <p className="Mainn12_description">
            Leave your details for our manager to contact you.
            <br />
            Let our estimating and design team assess your project.
            <br />
            Receive a proposal and free consultation.
          </p>
          <button type="button" className="Mainn12_button">Request a Quote</button>
          <p className="Mainn12_description_bottom">Save on your next parking project with Rollpark, the most advanced and eco-friendly semi-permanent parking solution to date.</p>
        </div>
      </div>
    );
  }
}

export default Request;

import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import "../_Styles/BottomPage_style.css";

class BottomP extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { visibility: false };
  }

  render() {
    const { visibility } = this.state;
    return (
      <VisibilitySensor
        partialVisibility="top"
        offset={{ top: 6100 }}
        onChange={(isVisible) => {
          this.setState({ visibility: isVisible });
        }}
      >
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
          <div className={visibility ? "navbar_1" : "navbar_1 scrolled"}>
            <a className={visibility ? "navbar_obj rollpark_option" : "navbar_obj rollpark_option scrolled1"} href="#home">Rollpark</a>
            <a className={visibility ? "navbar_obj" : "navbar_obj scrolled2"} href="#home">Why Rollpark</a>
            <a className={visibility ? "navbar_obj" : "navbar_obj scrolled2"} href="#news">Case Studies</a>
            <a className={visibility ? "navbar_obj" : "navbar_obj scrolled2"} href="#contact">Installation</a>
            <a className={visibility ? "navbar_obj" : "navbar_obj scrolled2"} href="#contact">Company</a>
            <a className={visibility ? "navbar_obj" : "navbar_obj scrolled2"} href="#contact">Specs</a>
            <a className={visibility ? "navbar_obj faq_option" : "navbar_obj scrolled2 faq_option"} href="#contact">FAQ</a>
            <button type="button" className={visibility ? "nav_button" : "nav_button scrolled3"}>Get a Quote</button>
          </div>
          <button className="message_button" type="button"><i className="fa fa-comment" aria-label="Mute volume" /></button>
        </div>
      </VisibilitySensor>
    );
  }
}

export default BottomP;

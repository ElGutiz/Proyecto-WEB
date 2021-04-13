import React from "react";

import "../_Styles/mainpage_style.scss";
import video1 from "../_Source/rollpark-intro.mp4";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main_Page_1">
        <div className="Main_Page_2">
          <video autoPlay height="816" muted loop>
            <source src={video1} type="video/mp4" />
            <track kind="true" />
          </video>
          <div className="Main_Page_3">
            <button type="button" className="MainPage_Button"><i className="fa fa-play" aria-label="Mute volume" /></button>
            <h1 className="MainPage_Title">COMMERCIAL PARKING</h1>
            <div className="carousel">
              <div className="pre">for </div>
              <div className="change_outer">
                <div className="change_inner">
                  <div className="element">universities</div>
                  <div className="element">automanufacturers</div>
                  <div className="element">airports</div>
                  <div className="element">special events</div>
                  <div className="element">municipalities</div>
                </div>
              </div>
            </div>
            <div className="MainPage_div2">
              <h1 className="MainPage_info">Not Asphalt. Not Gravel.</h1>
              <div className="MainPage_message">
                <p className="MainPage_message_text">
                  Rollable permeable paving surface. Durable and environmentally-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;

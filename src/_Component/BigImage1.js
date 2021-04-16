import React from "react";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

import "../_Styles/bigimages_style.css";
import bigimage1 from "../_Source/homepage-gallery-1.jpg";
import bigimage2 from "../_Source/homepage-gallery-2.jpg";
import bigimage3 from "../_Source/homepage-gallery-3.jpg";
import deanportrait from "../_Source/dean-anoe.jpg";

class BigImageGallery extends React.Component {
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
        offset={{ top: 100 }}
        onChange={(isVisible) => {
          this.setState({ visibility: isVisible });
        }}
      >
        <div className="responsive1">
          <div className="Main_Big_Images_r">
            <img className="Big_Image" src={bigimage1} alt="big_image_1" width="930" height="680" />
          </div>
          <div className="Main_Big_Images_l">
            <img className="Big_Image" src={bigimage2} alt="big_image_1" width="930" height="680" />
          </div>
          <div className="Main_Big_Images_r">
            <img className="Big_Image" src={bigimage3} alt="big_image_1" width="930" height="680" />
          </div>
          <div className="Main_Big_Paragraph">
            <div className="Big_Paragraph_1">
              <Fade bottom when={!visibility} distance="50%">
                <h1 className="Information_gallery">
                  Rollpark has saved Ford Motor
                  <br />
                  {" "}
                  Company several million dollars
                  {" "}
                </h1>
                <p className="Information_gallery_rest">
                  having a single site developed in a
                  <br />
                  {" "}
                  shorter time in lieu of the traditional
                  <br />
                  {" "}
                  multiple paved facilities we have utilized
                  <br />
                  {" "}
                  in the past
                  {" "}
                </p>
              </Fade>
              <Fade bottom when={!visibility} delay={750}>
                <p className="portrait_info">Dean Anos</p>
              </Fade>
              <Fade bottom when={!visibility} delay={500}>
                <img className="portrait_dean" src={deanportrait} alt="deanP" width="40" />
              </Fade>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default BigImageGallery;

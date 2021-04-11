import React from "react";

import "../_Styles/Tailored_style.css";
import logo1 from "../_Source/tailored_icons_1.jpg";
import logo2 from "../_Source/tailored_icons_2.png";
import logo3 from "../_Source/tailored_icons_3.jpg";
import logo4 from "../_Source/tailored_icons_4.png";
import logo5 from "../_Source/tailored_icons_5.png";
import logo6 from "../_Source/tailored_icons_6.png";
import logo7 from "../_Source/tailored_icons_7.png";

class Tailored extends React.Component {
  constructor() {
    super();
    this.state = { title1: "Economic Uncertainty in the Autologistics World", paragraph1: "With an uncertain economic climate and ever growing inventory, ports and auto manufacturers need a parking material that keeps cars free of dust and damage at a lost cost." };
  }

  render() {
    return (
      <div className="Main8">
        <div className="Mainn8">
          <h1 className="Mainn8_title">Tailored to Your Industry </h1>
          <ul className="tailored_icons_list">
            <li role="presentation" onClick={() => this.setState({ title1: "Economic Uncertainty in the Autologistics World", paragraph1: "With an uncertain economic climate and ever growing inventory, ports and auto manufacturers need a parking material that keeps cars free of dust and damage at a lost cost." })}>
              <img className="tailored_icons_item" src={logo1} alt="logo1" width="90" />
              <p className="tailored_icons_item_desc">
                Autologistics
              </p>
            </li>
            <li role="presentation" onClick={() => this.setState({ title1: "Short Term Parking for Auto-manufacturers", paragraph1: "Because auto-manufacturers have constantly fluctuating manufacturing volumes and stringent capital requirements, Rollpark is a less costly solution for quality holds and occasional large-capacity vehicle launches." })}>
              <img className="tailored_icons_item" src={logo2} alt="logo2" width="90" />
              <p className="tailored_icons_item_desc">
                Auto- manufacturing
              </p>
            </li>
            <li role="presentation" onClick={() => this.setState({ title1: "Inexpensive and Safe Event Parking", paragraph1: "Beyond parking in the mud, there isn't an effective, inexpensive, and proven temporary parking material for events besides Rollpark. Stabilize the ground and roll Rollpark directly overtop for instant parking for a few days to a month and then roll it up and re-use it at another event." })}>
              <img className="tailored_icons_item" src={logo3} alt="logo3" width="90" />
              <p className="tailored_icons_item_desc">
                Event
              </p>
            </li>
            <li role="presentation" onClick={() => this.setState({ title1: "Proven Temporary Parking for Filming", paragraph1: "Films often require a stable and flat surface for small segments, usually involving vehicles. Rollpark can be transformed to look exactly like asphalt, reused on multiple films, and at a low price." })}>
              <img className="tailored_icons_item" src={logo4} alt="logo3" width="90" />
              <p className="tailored_icons_item_desc">
                Hollywood
              </p>
            </li>
            <li role="presentation" onClick={() => this.setState({ title1: "Permitting Spells Trouble for Asphalt", paragraph1: "Some regions have impervious surface limits, requiring solutions like Rollpark or pervious asphalt. Unlike pervious asphalt, Rollpark is far less expensive and doesn't have the same tendency to fail from clogging." })}>
              <img className="tailored_icons_item" src={logo5} alt="logo3" width="90" />
              <p className="tailored_icons_item_desc">
                Permitting Restrictions
              </p>
            </li>
            <li role="presentation" onClick={() => this.setState({ title1: "Don't Put Asphalt On Land You'll Develop in 5 Years", paragraph1: "Universities are constantly expanding, which is good for universities, but bad for their parking capacity. When land is available it is usually only available temporarily. Rollpark can be used for land the university intends to develop without the same cost-restrictions as asphalt (both for installation and tear down)." })}>
              <img className="tailored_icons_item" src={logo6} alt="logo3" width="90" />
              <p className="tailored_icons_item_desc">
                Universities
              </p>
            </li>
            <li role="presentation" onClick={() => this.setState({ title1: "Parking Garages Take Time To Build", paragraph1: "While you wait for a massive parking garage to be designed, built, and approved, use Rollpark to park your clients so as to not waste revenue while waiting." })}>
              <img className="tailored_icons_item" src={logo7} alt="logo3" width="90" />
              <p className="tailored_icons_item_desc">
                Parking Managers
              </p>
            </li>
          </ul>
          <h2 className="Mainn8_title_1">
            { this.state.title1 }
            {" "}
          </h2>
          <p className="Mainn8_paragraph_1">
            { this.state.paragraph1 }
            {" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Tailored;

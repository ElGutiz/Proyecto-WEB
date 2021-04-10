import React from "react";

import "../_Styles/stats_style.css";

class Stats extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="statistics">
        <div className="Mainn1">
          <div className="stat-item">
            <p className="_1-stat">
              40%
            </p>
            <p className="description">
              less cost than using asphalt
            </p>
          </div>
          <div className="stat-item">
            <p className="_2-stat">
              80%
            </p>
            <p className="description">
              less construction time than conventional lots
            </p>
          </div>
          <div className="stat-item">
            <p className="_3-stat">
              7y
            </p>
            <p className="description">
              durable enough to last for up to 7 years
            </p>
          </div>
          <div className="stat-item">
            <p className="_4-stat">
              100%
            </p>
            <p className="description">
              permeability protects surrounding land
            </p>
          </div>
          <div className="stat-item">
            <p className="_5-stat">
              12+
            </p>
            <p className="description-1">
              reasons to choose Rollpack
            </p>
          </div>
          <button type="button" className="Button_"><i className="fa fa-long-arrow-right fa-2x" aria-label="Mute volume" /></button>
        </div>
      </div>
    );
  }
}

export default Stats;

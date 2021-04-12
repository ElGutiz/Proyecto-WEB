import React from "react";

import "../_Styles/Questions_style.css";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="Main11">
        <div className="Mainn11">
          <ul className="questions_items_list">
            <li className="fix_n">
              <h1 className="Mainn11_title">Got questions?</h1>
            </li>
            <li className="fix_n">
              <button type="button" className="question_button_1">
                <p className="question_button_text_1"> Ask your Manager</p>
              </button>
            </li>
            <li className="fix_">
              <button type="button" className="question_button_1">
                <p className="question_button_text_2"> Read FAQ</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Questions;

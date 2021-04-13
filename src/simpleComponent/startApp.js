import React from "react";

import MainPage from "../_Component/MainPage";
import Stats from "../_Component/Stats";
import DesignedForYou from "../_Component/DesignedForYou";
import CarsParked from "../_Component/CarsParked";
import BigImageGallery from "../_Component/BigImage1";
import PatentInfo from "../_Component/PatentInfo";
import PatentMap from "../_Component/patent_map";
import CompanyButton from "../_Component/Company_button";
import Expect from "../_Component/Expect";
import TableInfo from "../_Component/Table_info";
import Tailored from "../_Component/Tailored";
import Interested from "../_Component/Interested";
import Questions from "../_Component/Questions";
import Request from "../_Component/Request";
import BottomP from "../_Component/Bottom_page";

class StartApp extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="startName">
        <MainPage />
        <Stats />
        <DesignedForYou />
        <CarsParked />
        <BigImageGallery />
        <PatentInfo />
        <PatentMap />
        <CompanyButton />
        <Expect />
        <TableInfo />
        <Tailored />
        <Interested />
        <Questions />
        <Request />
        <BottomP />
      </div>
    );
  }
}

export default StartApp;

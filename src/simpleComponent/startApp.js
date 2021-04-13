// import React from "react";

// import Header from "../components/Header";
// import Tablero from "../components/Tablero";
// import contruirBaraja from "../utils/Baraja";

// const getInitialState = () => {
//   const baraja = contruirBaraja();
//   return {
//     baraja,
//     selectedCards: [],
//     comparing: false,
//     tryNumber: 0,
//   };
// };

// class StartApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = getInitialState();
//   }

//   selectCard(card) {
//     const { comparing, selectedCards } = this.state;
//     if (
//       comparing
//       || selectedCards.indexOf(card) > -1
//       || card.guessed
//     ) {
//       return;
//     }

//     const selectedCardsUpdated = [...selectedCards, card];
//     this.setState({
//       selectedCards: selectedCardsUpdated,
//     });

//     if (selectedCards.length === 2) {
//       this.compareCards(selectedCards);
//     }
//   }

//   compareCards(selectedCards) {
//     this.setState({ comparing: true });

//     setTimeout(() => {
//       const [firstCard, secondCard] = selectedCards;
//       let { baraja } = this.state;

//       if (firstCard.icon === secondCard.icon) {
//         baraja = baraja.map((card) => {
//           if (card.icon !== firstCard.icon) {
//             return card;
//           }

//           return { ...card, guessed: true };
//         });
//       }

//       this.victory(baraja);
//       const { tryNumber } = this.state;
//       this.setState({
//         selectedCards: [],
//         baraja,
//         comparing: false,
//         tryNumber: tryNumber + 1,
//       });
//     }, 1000);
//   }

//   victory(baraja) {
//     const { tryNumber } = this.state;
//     if (baraja.filter((card) => !card.guessed).length === 0) {
//       alert(`You win in only ${tryNumber} movements`);
//     }
//   }

//   resetGame() {
//     this.setState(
//       getInitialState(),
//     );
//   }

//   render() {
//     const { tryNumber, selectedCards, baraja } = this.state;
//     return (
//       <div className="startName">
//         <Header
//           tryNumber={tryNumber}
//           resetGame={() => this.resetGame()}
//         />
//         <Tablero
//           baraja={baraja}
//           selectedCards={selectedCards}
//           selectCard={(card) => this.selectCard(card)}
//         />

//       </div>
//     );
//   }
// }

// export default StartApp;

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

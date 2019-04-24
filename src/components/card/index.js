import React from 'react';
import './style.css';
import GInfo from "./userinfo";
import Statistics from "./userstatistics";

class PortfolioCard extends React.Component {
  render() {
    return (
      <div>
        <GInfo />
        <Statistics />
      </div>
    );
  }
}

export default PortfolioCard;

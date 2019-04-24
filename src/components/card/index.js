import React from 'react';
import './style.css';
import GInfo from "./userinfo";
import Statistics from "./userstatistics";
import { getData, API_BASE } from "../../tools/getData";

class PortfolioCard extends React.Component {
  state = {
    data: {}
  };


  componentDidMount() {
    const username = "";
    const url = `${API_BASE}/users/${username}`;

    getData(url).then(data => this.setState({ data }));
  }

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

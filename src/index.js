import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';
import Button from './components/button/button.js'
import PortfolioCard from './components/card';
import Image from './components/image'
import "./style.css";
class App extends React.Component {
state = {
  userOne:"",
  userTwo:"",
}
render(){
  return(<div>
    <div className="inputs-container">
      <Input updateUser={(value) => this.setState({ userOne: value})}/> <Button /> <Input updateUser={(value) => this.setState({ userOne: value})} />
    </div>
<div className="cards-container">
    <PortfolioCard /> <Image /> <PortfolioCard />
  </div>
  </div>
)}}


ReactDOM.render(<App/>, document.getElementById('🤡'));

import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';
import PortfolioCard from './components/card';
import "./style.css";
import { getData, API_BASE } from "./tools/getData";
class App extends React.Component {
state = {
  userOne:"",
  userTwo:"",
  userOneData:'',
  userTwoData:'',

}
// componentDidUpdate(){
//   alert(this.state.userOne + this.state.userTwo);
// }
  onclickHandler = () => {
  const username1 = this.state.userOne;
  const username2 = this.state.userTwo;
  // const url = `${API_BASE}/users/tamernasser`;
  const url1 = `${API_BASE}/users/${username1}`;
  const url2 = `${API_BASE}/users/${username2}`;

  getData(url1).then(d =>{
    console.log(d);
     this.setState( {userOneData:d} );
  });
  getData(url2).then(d =>{
    console.log(d);
     this.setState( {userTwoData:d} );
  });

}
render(){
  return(<div>
    <div className="inputs-container">
      <Input updateUser={(value) => this.setState({ userOne: value})}/>
      <button onClick={this.onclickHandler} />
      <Input updateUser={(value) => this.setState({ userTwo: value})} />
    </div>
    <div className="cards-container">
    <PortfolioCard userdata={this.state.userOneData} />
    <img />
     <PortfolioCard userdata={this.state.userTwoData}/>
    </div>
    </div>
)}}


ReactDOM.render(<App/>, document.getElementById('ter'));
